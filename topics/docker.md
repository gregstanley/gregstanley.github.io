---
layout: page
title: Docker
categories:
  - software
tags:
  - docker
---
Running containers
Seq
docker run -d --name seq-1 -e ACCEPT_EULA=Y --restart always -p 5341:80 datalust/seq
2. Ghost
docker run -d --name ghost-1 --restart always -p 3001:2368 ghost
Copying files
docker cp name-1:/dump/onet C:/
