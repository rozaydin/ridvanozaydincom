---
title: "Enable Compression in AWS CloudFront"
description: "This post explains how to enable text compression in AWS CloudFront for better performance."
pubDate: "Apr 23, 2025"
---

Text compression is a technique used to reduce the size of text-based resources. While it has many applications, one of its most popular use cases is on HTTP servers to minimize the amount of data transferred between the client and the server. This results in faster load times for web pages and is also considered a performance metric.

For example, when analyzing your website with a tool like [PageSpeed Insights](https://pagespeed.web.dev/), you might encounter the following suggestion:

![PageSpeed suggestion](/assets/blog/awsCloudfront/pagespeed.png)

This post focuses on enabling text compression for a specific setup using **AWS CloudFront** and **AWS S3**. My personal website is hosted on AWS S3 and served through AWS CloudFront. Fortunately, CloudFront supports text compression through a simple configuration change. [Official documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html).

### Steps to Enable Compression

To enable compression support on CloudFront, you’ll need to update two settings:

1. **Compress Objects Automatically** → `true`

   ![Compress Objects setting](/assets/blog/awsCloudfront/compressobjects.gif)

2. **Set a Cache Policy** → Choose `Managed-CachingOptimized`

   ![Cache policy selection](/assets/blog/awsCloudfront/cachepolicy.gif)

That’s it! After these changes, check your response headers for `Content-Encoding`. You should now see that CloudFront is serving compressed content:

![Response headers with compression](/assets/blog/awsCloudfront/httpcompressionenabled.png)

The official AWS CloudFront documentation also explains caching strategies and TTL settings in more depth, which are worth exploring to fine-tune your configuration.

---

#### References

- [MDN: HTTP Compression](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression)
- [AWS: Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html)
