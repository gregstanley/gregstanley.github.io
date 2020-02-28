---
layout: post
title: Windows PATH priorities
categories:
  - software
tags:
  - Windows
---

Having scratched my head for a while wondering why my Python 3.7 install was taking precedence over my Python 3.8 despite being convinced that 3.8 was taking priority on the PATH [I discovered that](https://superuser.com/a/878382):

> The Path is constructed from the system path, which can be viewed in the System Environment Variables field in the System dialog box. *The User path is appended to the system path.*

So although for the most part user environment variables will win, in the case of the PATH variables they will be processed after the system ones.
