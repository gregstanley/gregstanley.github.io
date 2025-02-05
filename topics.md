---
layout: page
title: Topics
permalink: /topics/
---

General notes on the following technologies:

- Git
- Docker
- SQL Server
- Node
- Python
- Azure
- [VS Code](/topics/vscode)
- [Clean code](/topics/clean-code)

## Git

### Squashing commits

[This](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/) seems to be the standard method.

To summarise - on the relevant branch use the following to open the default text editor (where x is the number of commits to include):

{% highlight Git %}
git rebase -i HEAD~x
{% endhighlight %}

Leave one commit as 'pick' and change the rest to 'squash'.

Interesting discussion of the [squash rebase workflow](https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/).

There are alternative approaches:

[Use reset to merge](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git/5201642#5201642)

### Rebasing wtih DevOps and squash commits

Scenario: A pull request has been made based on a developemnt branch. Upon completion will be merged to master using a squash commit. In the meantime, additional development - that is dependent on the changes that make up the first PR - has started. When the the PR is completed the second development branch will have a different history (it's based on the original commits that have now turned in to a single squash on master). To avoid dealing with conflicts the second development branch can be rebased on to of master.

- Once the PR is complete, checkout 'master' and pull to ensure it is up-to-date.
- Checkout the development branch and run the following (change the final number to reflect the number of commits in the development branch):

{% highlight Git %}
git rebase --onto master HEAD~1
{% endhighlight %}

### Cleaning up old branches

{% highlight Git %}
git remote prune origin --dry-run
{% endhighlight %}

[Additional notes](http://www.fizerkhan.com/blog/posts/Clean-up-your-local-branches-after-merge-and-delete-in-GitHub.html)

## Docker

### Useful containers

{% highlight Docker %}
docker run -d --name seq -e ACCEPT_EULA=Y --restart always -p 5341:80 datalust/seq
docker run -d --name ghost --restart always -p 3001:2368 ghost
{% endhighlight %}

### Copying files

{% highlight Docker %}
docker cp name-1:/dump/onet C:/
{% endhighlight %}

### Volumes

DO NOT use ~ (home directory) when specifying volumes (on Windows).

{% highlight Docker %}
DOES NOT WORK
volumes:

- ~/files:/home/docker-user/files

WORKS
volumes:

- /home/host-user/files:/home/docker-user/files
  {% endhighlight %}

### House keeping

Remove all images that aren't connected to a container:

{% highlight Docker %}
docker image prune -a
{% endhighlight %}

### Error occured: Cannot enable hyper-v service

This occured after a BIOS update. Hyper-V was still enable but Docker could not launch. Running:

{% highlight Docker %}
bcdedit /set hypervisorlaunchtype auto
{% endhighlight %}

As discussed [here](https://forums.docker.com/t/cannot-enable-hyper-v-service/94086/5) resolved the issue.

## Docker Compose

Find out information about running processes:

{% highlight Docker %}
docker-compose top
{% endhighlight %}

## SQL Server

When logs get big you can try this (from [here](https://docs.microsoft.com/en-us/sql/relational-databases/databases/shrink-a-database?view=sql-server-ver15)):
{% highlight SQL %}
DBCC SHRINKDATABASE (DataWarehouse, 10);
GO
{% endhighlight %}

## Node

{% highlight bash %}
npm ls -g --depth=0 // List out top level global packages
{% endhighlight %}

## Windows Terminal

### Setup with Oh My Posh

Install [Oh My Posh](https://ohmyposh.dev/):

{% highlight console %}
winget install JanDeDobbeleer.OhMyPosh
{% endhighlight %}

Next, select a [Nerd Font](https://www.nerdfonts.com/font-downloads) and install that e.g.:

{% highlight console %}
oh-my-posh font install Cousine
{% endhighlight %}

Install Powershell:

{% highlight console %}
winget install Microsoft.Powershell
{% endhighlight %}

Change the terminal 'default' to Powershell (NOT WIndows Powershell)

Edit Profile -> Background image to whatever

Select one of the [Oh My Posh Themes](https://ohmyposh.dev/docs/themes):

{% highlight console %}
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/star.omp.json" | Invoke-Expression
{% endhighlight %}

The local copies of the [Oh My Posh Themes](https://ohmyposh.dev/docs/themes) are stored at: <User>/AppData/Local/Programs/oh-my-posh/themes

- drop custom ones in there

Ensure the profile is downloaded - theme must be set in file
/Documents/Profile/Powershell/Microsoft.Powershall_profile.ps1

## Python

### Installing on Windows

| Installation method                                                      | Expected path                                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [Manual](https://www.python.org/downloads/) (all users)                  | `C:\Python3x`                                                       |
| [Manual](https://www.python.org/downloads/) (local user)                 | `C:\Users\[user]\AppData\Local\Programs\Python\Python3x`            |
| [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) | `C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64` |

See this [SO answer](https://stackoverflow.com/questions/52021815/where-visual-studio-install-python) for more information about the [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) location.

#### Anaconda

The key benefits of using [Anaconda](https://www.anaconda.com/distribution/) from this [SO answer](https://stackoverflow.com/questions/42096280/how-is-anaconda-related-to-python):

> [Anaconda](https://www.anaconda.com/distribution/) is a python and R distribution. It aims to provide everything you need (Python-wise) for data science "out of the box".
> It includes:
>
> - The core Python language
> - 100+ Python "packages" (libraries)
> - Spyder (IDE/editor - like PyCharm) and Jupyter
> - _conda_, [Anaconda](https://www.anaconda.com/distribution/)'s own package manager, used for updating [Anaconda](https://www.anaconda.com/distribution/) and packages

_and_

> It is quite complete and avoids problems in building libraries that you need from source code, that frequently plague one by one installations of those libraries by tools like pip.

Considerations:

- The independent package management can sometimes be behind.
- Larger size - is it suitable for the project e.g. Docker perhaps?

### Unit testing

- [In VSCode](https://code.visualstudio.com/docs/python/testing#_test-configuration-settings)

- [General file structure advice](https://www.patricksoftwareblog.com/python-unit-testing-structuring-your-project/)
  - Make your `source` and `tests` directories siblings.
  - Ensure `__init__.py` exists in both (for test discovery).

## Azure

### ACR (Azure Container Registry)

- [List the available tags for a repository](https://docs.microsoft.com/en-us/cli/azure/acr/repository?view=azure-cli-latest#az-acr-repository-show-tags)

{% highlight bash %}
az acr repository show-tags --name <registry>.azurecr.io/<image>:<tag> --repository <repo>
{% endhighlight %}

```bash
az acr repository show-tags --name <registry>.azurecr.io/<image>:<tag> --repository <repo>
```

```c#
Class.Call()
```
