---
layout: page
title: Docker
categories:
  - software
tags:
  - docker
---
# Running containers

## Seq

{% highlight Docker %}
docker run -d --name seq-1 -e ACCEPT_EULA=Y --restart always -p 5341:80 datalust/seq
{% endhighlight %}

## Ghost

{% highlight Docker %}
docker run -d --name ghost-1 --restart always -p 3001:2368 ghost
{% endhighlight %}

## Copying files

{% highlight Docker %}
docker cp name-1:/dump/onet C:/
{% endhighlight %}
