---
layout: post
title: When is Whitespace not Whitespace?
categories:
  - software
tags:
  - C#
---

While working with C# I have regularly typed in _string._ and then been presented with two options:

{% highlight c# linenos %}
string.IsNullOrWhiteSpace
string.IsNullOrEmpty
{% endhighlight %}

History tells me that there is likely to be some difference between these two but I've generally just picked the first which has then done exactly what I wanted and thought nothing more of it.
Until one day I wanted to specify an alternative line break character, specifically the TAB character. I verified that the string I used was not null then set the delimiter and... nothing. And the penny dropped. \t is not null but it's also not any visible text. Obvious really, it's literally in the name.
