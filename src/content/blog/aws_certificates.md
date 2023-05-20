---
title: "Provisioning Certificates In AWS"
description: "This post explains how to provision SSL/TLS certificates using ACM (AWS Certificate Manager)"
pubDate: "May 20 2023"
---

Building solutions exposed to internet is complicated, You need to consider varius requirements. One of the most common one is creating an SSL/TLS certificate. Which (for obvious reasons) needs to be **not self signed**

What is more interesing is, when you are maintaining the solution for long term, you need to ensure your certificate gets **renewed**. In the past this was done manually. Today however there exists many solutions (let's encrypt) that we can use to automate this tedious task.

And on AWS there is ( as you already guessed) a managed service **AWS Certificate Manager (ACM)**. That handles this mundane task for you. Before moving right away into certificate creation i would like to say a few thins about SSL/TLS certificates.

PKI or Public Key Infrastructure is the collection of technologies that explains **How** this technology works.
In short, you are proving to your client/consumer that you are the same entity **as the one you claim** to your client/consumer. And this is achieved by introduction of a third party in to the conversation which client trusts ( For some reason ). And this entity is the Certificate Authority (CA). This <a href="https://en.wikipedia.org/wiki/Public_key_infrastructure">Wikipedia Article</a> provides a good overview and the contains links to specs that form the PKI technology in it's references section.

So let's look into provisioning of the certificate, Below is the terraform code that provisions the certificate for **test.ridvanozaydin.com** domain
In summary we request a certificate for a subdomain, and we let ACM to verify that we own the domain using DNS. Verification is done by creating custom DNS entries for the subdomain in route53, ACM later checks if the DNS entries exist and if so, it creates the certificate and it becomes available in ACM.  

```go

resource "aws_acm_certificate" "cert" {

  domain_name       = "test.ridvanozaydin.com"
  validation_method = "DNS"

  tags = var.tags

  validation_option {
    domain_name       = "test.ridvanozaydin.com"
    validation_domain = "ridvanozaydin.com"
  }

  # to replace a certificate which is currently in use
  lifecycle {
    create_before_destroy = true
  }
}

data "aws_route53_zone" "ridvanozaydincom" {
  name         = "ridvanozaydin.com"
  private_zone = false
}

resource "aws_route53_record" "testridvanozaydincom" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.ridvanozaydincom.zone_id
}


resource "aws_acm_certificate_validation" "testridvanozaydincom" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.testridvanozaydincom : record.fqdn]
}

```

Here is what terraform says it will provision within our AWS account

![image terraform](/assets/blog/awsACM/terraform_resources.png)

And right after running terraform apply here is the certificate available in ACM

![image terraform](/assets/blog/awsACM/certificate.png)

If we go into details, we can see how the DNS verification is performed:

![image terraform](/assets/blog/awsACM/certificate_detail.png)

As you can see there is DNS CNAME entry here, which ACM performs a DNS query to check if the DNS 
has the exact same entry in the response. This way ACM ensures we own the domain.

Checking Route53 records, we can see the same CNAME entry is present there as well:

![image aws_s3](/assets/blog/awsACM/route53_after.png)

And this concludes our post, hope you enjoyed it!

#### References

- <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager</a>
