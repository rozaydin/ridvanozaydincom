---
title: "Obtaining SSL Certificates In Kubernetes with Cert-Manager"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jul 15 2022"
---

The code for this blog post is available here [https://github.com/rozaydin/doCertManager](https://github.com/rozaydin/doCertManager)


Secure Connections using HTTPS, enables encryption in transit, thus it protects the information flow between The client and the server from middle entities. Unless they can solve the trap function of the hash function (RSA, Elliptic Curve etc)  you are using.

Normally how you do this is

- You obtain a digital SSL certificate from a certificate authority, proving the identity of the domain, you are serving the content from.

- You use your ssl certificate to start a SSL session, that provides encryption in transit.

Obtaining the SSL certificate, renewing it before it expires, can be done manually but it's hard to remember and laborous work which cert-manager provides a solution and solves for us. Within this post we will 

- Create a kubernetes cluster on Digital Ocean
- Install Cert Manager
- Create a deployment that uses cert-manager to obtain a certificate

We will use Terraform to do everything, so we would have our infrastructure as code ready for us.

I will divide the post to 2 sections, 

- Creation of the cluster, installing the Cert-Manager
- Creation of the deployment with it's own SSL certificate

## Creation of the Cluster On Digital Ocean

I will assume, you have a digital ocean account already, if not it's very easy to obtain one. But digital ocean is just a provider for the kubernetes cluster, if you already have clusters on AWS or Azure or any other provider that is fine too. It's just the provisioning of the cluster will be different the rest will be the same.

I will highlight the steps that's important for the Cert-Manager step. within kubernetes-config/main.tf we are installing the nginx-ingress controller and the cert-manager to our cluster using helm. And the cert-manager is getting installed to it's own namespace. Rest is self explanatory.


```
resource "helm_release" "nginx_ingress" {
  name = "nginx-ingress-controller"
  # namespace = kubernetes_namespace.test.metadata.0.name

  repository = "https://charts.bitnami.com/bitnami"
  chart      = "nginx-ingress-controller"

  set {
    name  = "service.type"
    value = "LoadBalancer"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-name"
    value = format("%s-nginx-ingress", var.cluster_name)
  }
}

resource "kubernetes_namespace" "cert_manager" {

  metadata {
    labels = {
      "app" = "cert-manager"
    }
    name = "cert-manager"
  }

}

resource "helm_release" "cert_manager" {
  name      = "cert-manager"
  namespace = kubernetes_namespace.cert_manager.metadata.0.name

  repository = "https://charts.jetstack.io"
  chart      = "cert-manager"

  set {
    name  = "installCRDs"
    value = true
  }

}

```

You should see the following outouts with your kubectl after the above step:

![image kubectl](/assets/blog/certmanager/kubectl.png)

There we have it, the Cert Manager is installed and it's pods are running. Now we can proceed to the next step, where we will create a deployment with a backend and a frontend using SSL certificates.

In case if you are wondering, Cert-Manager does the following:

**https://cert-manager.io/docs/**

```
cert-manager adds certificates and certificate issuers as resource types in Kubernetes clusters, 
and simplifies the process of obtaining, renewing and using those certificates.

It can issue certificates from a variety of supported sources, 
including Let's Encrypt, HashiCorp Vault, and Venafi as well as private PKI.

It will ensure certificates are valid and up to date, and attempt to renew certificates 
at a configured time before expiry.
```


## The deployment

Our deployment will involve a backend, a frontend and a DB. To show, how to use 2 different domains (subdomains actually) are provisioned on the Ingress with the SSL certificate. Below is the diagram of the architecture we will have:

![image design](/assets/blog/certmanager/design.png)

And again here is the link to the repo (same repo under deployment folder) https://github.com/rozaydin/doCertManager 

There are 2 important concepts here. ClusterIssuer and Certificate.

- ClusterIssuer

Kubernetes resources that represent **certificate authorities (CAs)** that are able to generate signed certificates by honoring certificate signing requests.
All cert-manager certificates require a referenced issuer that is in a ready condition to attempt to honor the request.   

**https://cert-manager.io/docs/concepts/issuer/**

```
resource "kubernetes_manifest" "clusterissuer_letsencrypt_cluster_issuer" {
  manifest = {
    "apiVersion" = "cert-manager.io/v1"
    "kind" = "ClusterIssuer"
    "metadata" = {
      "name" = "letsencrypt-cluster-issuer"
    }
    "spec" = {
      "acme" = {
        "email" = "admin@admin.com"
        "privateKeySecretRef" = {
          "name" = "letsencrypt-cluster-issuer-key"
        }
        "server" = "https://acme-v02.api.letsencrypt.org/directory"
        "solvers" = [
          {
            "http01" = {
              "ingress" = {
                "class" = "nginx"
              }
            }
          },
        ]
      }
    }
  }
}
```

- Certificate

represents a human readable definition of a certificate request that is to be honored by an issuer which is to be kept up-to-date. This is the usual way that you will interact with cert-manager to request signed certificates.
This is basically the SSL certificate we will use in our ingress.

**https://cert-manager.io/docs/usage/certificate/**

```
resource "kubernetes_manifest" "certificate_application_koinrun" {
  manifest = {
    "apiVersion" = "cert-manager.io/v1"
    "kind" = "Certificate"
    "metadata" = {
      "name" = "demo-tls"
      "namespace" = "demo"
    }
    "spec" = {
      "dnsNames" = [
        "demo.ridvanozaydin.com",
        "api.ridvanozaydin.com",
      ]
      "issuerRef" = {
        "kind" = "ClusterIssuer"
        "name" = "letsencrypt-cluster-issuer"
      }
      "secretName" = "demo-tls"
    }
  }
}

```

Here we are requesting a certificate from ClusterIssuer, and providing the domain names this certificate will be first validated aganist and if validation passes, will be issued for. Another thing to note is this certificate will be stored as a secret on our cluster with name **demo-tls** under demo namespace.

The final piece is configuring our Ingress resource (I am using NginX here) to use TLS and point to the certificate.

```
resource "kubernetes_ingress_v1" "application" {

  metadata {
    name      = "demo"
    namespace = kubernetes_namespace.demo.metadata.0.name
    annotations = {
      # Required
      "kubernetes.io/ingress.class" = "nginx"
    }
  }

  spec {
    tls {
      hosts = [ "demo.ridvanozaydin.com", "api.ridvanozaydin.com" ]
      secret_name = "demo-tls"
    }
    
    rule {
      host = "demo.ridvanozaydin.com"
      http {
        path {
          path = "/"
          backend {
            service {
              name = kubernetes_service.frontend_service.metadata.0.name
              port {
                number = 80
              }
            }

          }
        }
      }
    }

    rule {
      host = "api.ridvanozaydin.com"
      http {
        path {
          path = "/"
          backend {
            service {
              name = kubernetes_service.backend_service.metadata.0.name
              port {
                number = 8058
              }
            }

          }
        }
      }
    }
  }

}

```

as you can see under tls object we are referring to the kubernetes secret, which holds our certificate itself.
Once you deploy this using terraform, you will first wait for your certificate to be assigned by the CA (Let's Encrypt).
it will take some time ( usually less then 1 minute in my cases ). You can track the status of your certificate acquisition process via

**kubectl describe certificate demo-tls -n demo** command. 

And that's pretty much it happy coding and thanks for reading ...

![image certificate](/assets/blog/certmanager/certificate.png)