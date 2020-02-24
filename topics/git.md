---
layout: page
title: Git
categories:
  - software
tags:
  - git
---


## Squashing commits

[This](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/) seems to be the standard method.

To summarise - on the relevant branch use the following to open the default text editor (where x is the number of commits to include):

{% highlight Git %}
git rebase -i HEAD~x
{% endhighlight %}

Leave one commit as 'pick' and change the rest to 'squash'.

Interesting discussion of the [squash rebase workflow](https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/). 

There are alternative approaches:

[Use reset to merge](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git/5201642#5201642)
