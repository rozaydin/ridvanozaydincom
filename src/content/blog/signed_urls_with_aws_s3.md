---
title: "Creating Signed URLs with AWS S3"
description: "This post describes how to generate signed urls for both upload and download"
pubDate: "Apr 26 2023"
---


AWS offers many many services, and AWS S3 ( Simple Storage Service ) is one of the most fundemantal one ( This service is where i earn my living ). It allows you to store your content reliably and makes it available from any where in the world ( as long as you have internet connection ). Here is a beatiful graphic (see references for original content) that summarizes the capabilities of AWS S3:

![image aws_s3](/assets/blog/awsS3/aws_s3.png)


This blog post is only about **creating signed urls to share files securely to a limited audience**. This scenario pops up very frequently for me when building software solutions, You do not want to grant access to your AWS S3 bucket but want to share a single object for a limited time. AWS S3 lets you achieve this via signed urls. A signed URL permits accessing to a single object within AWS S3. It contains the necessary authentication&authorization information and it also has an expiration ( you can create URLs valid for only 1 hour ). You can grant access to download an existing object and also grant access to upload an object as well.

So how we create them ? Below is a piece of code ( part of my battle tested, production ready AWSS3Client ) that demonstrates how to:

and as always, read the documentation :)

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html and look for

@aws-sdk/client-s3 and @aws-sdk/s3-request-presigner

```
import {  
  PutObjectCommand,
  PutObjectCommandOutput,
  GetObjectCommand,
  S3Client,  
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { ReadStream } from "fs";

export class AWSS3Client {
  private s3BucketName: string;
  private awsS3Client: S3Client;

  constructor(
    s3BucketName: string,
    accessKeyId: string,
    awsSecretAccessKey: string,
    awsRegion: string
  ) {
    this.s3BucketName = s3BucketName;
    this.awsS3Client = new S3Client({
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: awsSecretAccessKey,
      },
      region: awsRegion,
    });
  } 

  async createUploadSignedUrl(
    objectKey: string,
    expiresInSeconds = 3600
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.s3BucketName,
      Key: objectKey,
    });
    return getSignedUrl(this.awsS3Client, command, {
      expiresIn: expiresInSeconds,
    });
  }

  async createDownloadSignedUrl(
    objectKey: string,
    expiresIn = 3600
  ): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.s3BucketName,
      Key: objectKey,
    });
    return getSignedUrl(this.awsS3Client, command, { expiresIn });
  }
}

const s3BucketName = process.env.S3_BUCKET_NAME;
if (!s3BucketName) throw new Error("S3_BUCKET_NAME is not defined");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
if (!accessKeyId) throw new Error("AWS_ACCESS_KEY_ID is not defined");

const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
if (!awsSecretAccessKey)
  throw new Error("AWS_SECRET_ACCESS_KEY is not defined");

const awsRegion = process.env.AWS_REGION;
if (!awsRegion) throw new Error("AWS_REGION is not defined");

export const awsS3Client = new AWSS3Client(
  s3BucketName,
  accessKeyId,
  awsSecretAccessKey,
  awsRegion
);


```

#### References

- <a href="https://aws.amazon.com/s3/">AWS S3</a>
- <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html">AWS JavaScript SDK</a>
