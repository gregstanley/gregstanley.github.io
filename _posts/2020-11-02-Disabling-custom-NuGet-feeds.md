---
layout: post
title: Disabling custom NuGet feeds
categories:
  - software
tags:
  - nuget
  - build
  - error
  - 401
---

Scenario - You're trying to build and/or run a Visual Studio type project and it complains about being unable to access a custom (and for this case unnecessary) NuGet feed, something like:

{% highlight Console %}
C:\Program Files\dotnet\sdk\3.x.xxx\NuGet.targets(1,1): error : Unable to load the service index for source https://pkgs.dev.azure.com/somecompany/_packaging/project/nuget/v3/index.json. [C:\Users\user\AppData\Local\Temp\yo3lpsj5.fo2\restore.csproj]
{% endhighlight %}

Assuming that we might well need this feed again in future, just not right now, then a simple solution is to temporarily _disable_ the feed, do what we need to do, then _enable_ the feed again. This can be done from the Visual Studio UI or from the console.

## Using the command line

Type the following to view a list of your current feeds:

{% highlight Console %}
dotnet nuget list source
{% endhighlight %}

_Disable_ any problematic ones:

{% highlight Console %}
dotnet nuget disable source FEED_NAME
{% endhighlight %}

And _enable_ them again:

{% highlight Console %}
dotnet nuget enable source FEED_NAME
{% endhighlight %}
