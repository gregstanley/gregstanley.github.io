---
layout: post
title: Winget to the rescue
published: true
categories:
  - windows software console
tags:
  - windows terminal console winget
---

I'm terrible at updating the various applications, frameworks and packages that are installed on my development machines. As such I was pretty excited to discover the [Winget](https://learn.microsoft.com/en-us/windows/package-manager/) application which acts as an [npm](https://www.npmjs.com/) style package manager for my Windows machine - once installed, run the following to get a list of the applications that have updates available for them:

```sh
winget upgrade
```

Then either manually update the relevant applications or do it in-place using:

```sh
winget upgrade -e 'Id'
```

Where `'Id'` is the Id as listed by the previous command. See [the documentation](https://learn.microsoft.com/en-us/windows/package-manager/winget/#commands) for more commands.
