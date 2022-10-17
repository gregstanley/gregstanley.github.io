---
layout: post
title: Winget to the rescue
published: true
categories:
  - windows software console
tags:
  - windows terminal console winget
---

I'm terrible at updating the various frameworks, languages, packages that are installed on my development machines. As such I was excited to discover the [Winget](https://learn.microsoft.com/en-us/windows/package-manager/) application which can take care of the for me, [npm](https://www.npmjs.com/) style. Much better.

Once installed, run the following to get a list of the appliations that can be upgraded:

{% highlight Console %}
winget upgrade
{% endhighlight %}

You can then manually update the relevant applications or do it from the command line with:

{% highlight Console %}
winget upgrade -e <Id>
{% endhighlight %}

Where '<Id>' is the Id as listed by the previous command. See [the documentation](https://learn.microsoft.com/en-us/windows/package-manager/winget/#commands) for more commands.
