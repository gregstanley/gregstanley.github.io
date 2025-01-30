---
layout: post
title: Windows PATH priorities
categories:
  - software
tags:
  - Windows
---

Having scratched my head for a while wondering why my Python 3.7 install was taking precedence over my Python 3.8 one, despite being convinced that 3.8 was taking priority on the PATH, I stumbled across [this SO answer](https://superuser.com/a/878382) containing the following key line:

> *The User path is appended to the system path.*

Which, as another answer describes, could be written as:

> Path = %Path% (System) ; %Path% (User)

So although for the most part user environment variables will win, in the case of the PATH variables they will be processed after the system ones. I'm pretty sure I've been similarly confused in the past so it's good to finally have some idea what's going on.
