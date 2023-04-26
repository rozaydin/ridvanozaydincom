---
title: "Creating elliptic curve public private key with openSSL"
description: "This post describes the necessary steps to generate alliptic curve cryptographic keys"
pubDate: "Apr 04 2023"
---

### TLDR;

```
# validates secp256k1 ( The curve function bitcoin uses ) is present
openssl ecparam -list_curves | grep secp256k1

# outputs a spec file we will use to generate public/private ec keys
openssl ecparam -name secp256k1 -out secp256k1-spec.pem

# generate ec-private key
openssl ecparam -in secp256k1-spec.pem -genkey -noout -out ec-private.pem

# convert from ec format to pkcs8 format
openssl pkcs8 -topk8 -nocrypt -in ./ec-private.pem -out ./private.pem

# generate public key
openssl ec -in ./private.pem -pubout -out ./public.pem

```

This is a short blog on generating public/private key pairs using elliptic curves (ec)
I use JWT's to secure the web applications I create. Luckily the library I use also supports
ec private/public keys.

```
alg: "ES256K"
```

Thus I obtain same level of security with fever bits ( compared to RSA ).
In order to generate the keys we need to have openssl installed.
I prefer to use secp256k1 curve to generate the keys. however openssl supports so much more, the
process is same just pick one you like to use.

First verify the openssl has the secp256k1 ec:

![image list_ecs](/assets/blog/sec256k1/list_ecs.png)

And after that, we will output the parameters of the curve, we will use this file
as input to generate private and public keys.

![image create_ecs_spec](/assets/blog/sec256k1/create_ecs_spec.png)

Now creating the private key ( in ec format ):

![image generate_ec_private_key](/assets/blog/sec256k1/generate-ec-private.png)

Converting private key into pkcs8 format:
![image generate_private_key](/assets/blog/sec256k1/generate-private.png)

And finally the public key:

![image generate_public_key](/assets/blog/sec256k1/generate-public.png)

All combined in a shell script would be:

```
#!/bin/bash

openssl ecparam -name secp256k1 -out secp256k1-spec.pem
openssl ecparam -in secp256k1-spec.pem -genkey -noout -out ec-private.pem
openssl pkcs8 -topk8 -nocrypt -in ./ec-private.pem -out ./private.pem
openssl ec -in ./private.pem -pubout -out ./public.pem


echo "";
cat ./private.pem;
echo "";
sed ':a;N;$!ba;s/\n/\\n/g' ./private.pem
echo "";
cat ./public.pem;
echo "";
sed ':a;N;$!ba;s/\n/\\n/g' ./public.pem
echo "";

rm private.pem public.pem ec-private.pem secp256k1-spec.pem
```
The script display public and private keys in two formats one in a single line (new lines are encoded with \n) and in as is format.

![image script-output](/assets/blog/sec256k1/script-output.png)


The keys will be in pkcs8 format. Thanks for reading.

#### References

- <a href="https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations">OpenSSL Wiki</a>
