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

## Rebasing wtih DevOps and squash commits

Scenario: A pull request has been made based on a developemnt branch. Upon completion will be merged to master using a squash commit. In the meantime, additional development - that is dependent on the changes that make up the first PR - has started. When the the PR is completed the second development branch will have a different history (it's based on the original commits that have now turned in to a single squash on master). To avoid dealing with conflicts the second development branch can be rebased on to of master.

* Once the PR is complete, checkout 'master' and pull to ensure it is up-to-date.
* Checkout the development branch and run the following (change the final number to reflect the number of commits in the development branch):

{% highlight Git %}
git rebase --onto master HEAD~1
{% endhighlight %}

## Cleaning up old branches

{% highlight Git %}
git remote prune origin --dry-run
{% endhighlight %}

[Additional notes](http://www.fizerkhan.com/blog/posts/Clean-up-your-local-branches-after-merge-and-delete-in-GitHub.html)
