---
layout: page
title: Docker
categories: docker
tags: notes
---

![Git icon]({{'/assets/images/brands/docker-4.svg' | relative_url}})

## Useful containers

```docker
docker run -d --name seq -e ACCEPT_EULA=Y --restart always -p 5341:80 datalust/seq
docker run -d --name ghost --restart always -p 3001:2368 ghost
```

## Copying files

```docker
docker cp name-1:/dump/onet C:/
```

## Volumes

DO NOT use ~ (home directory) when specifying volumes (on Windows).

Does NOT work:

```docker
volumes:
- ~/files:/home/docker-user/files
```

Does work:

```docker
volumes:

- /home/host-user/files:/home/docker-user/files
```

## House keeping

Remove all images that aren't connected to a container:

```docker
docker image prune -a
```

## Error occured: Cannot enable hyper-v service

This occured after a BIOS update. Hyper-V was still enable but Docker could not launch. Running:

```docker
bcdedit /set hypervisorlaunchtype auto
```

As discussed [here](https://forums.docker.com/t/cannot-enable-hyper-v-service/94086/5) resolved the issue.

## Docker Compose

Find out information about running processes:

```docker
docker-compose top
```
