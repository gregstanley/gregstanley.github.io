---
layout: page
title: Azure
categories:
  - software
tags:
  - azure
---

## Working with the ACR

* [List the available tags for a repository](https://docs.microsoft.com/en-us/cli/azure/acr/repository?view=azure-cli-latest#az-acr-repository-show-tags)

{% highlight bash %}
az acr repository show-tags --name <registry>.azurecr.io/<image>:<tag> --repository <repo>
{% endhighlight %}
