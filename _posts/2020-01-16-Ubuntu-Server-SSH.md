---
layout: post
title: Configure SSH access into an Ubuntu Server
categories:
  - software
tags:
  - ubuntu
  - ssh
---

The following notes are a subset of the information provided in [this tutorial](https://linuxize.com/post/how-to-set-up-ssh-keys-on-ubuntu-1804/).

<!--more-->

## Prerequisites

- An instance of [Ubuntu Server](https://ubuntu.com/download/server) running.
- An account on the server that can be elevated to [root](https://askubuntu.com/questions/608495/what-is-root-and-how-can-i-become-it) and that you know the password for.

## Create an [SSH Key pair](https://winscp.net/eng/docs/ssh_keys)

The tutorial does this manually on the command line which is fine, however you can also use [PuTTYGen](https://www.ssh.com/ssh/putty/windows/puttygen):

- _Optional_ - change the bits to _4096_.
- Click _Generate_.
- Copy the contents of _box_ (something like ssh-rsa AAAAB3NzaC1...) into a file with a _.pub_ extension. This is simplest option to avoid some of the file format gotchas in [this question](https://stackoverflow.com/questions/42863913/key-load-public-invalid-format).
- Click _Save private key_ and save to a file with the same name as the previous one but with _no extension_.

## Copy the _public_ key to the remote [Ubuntu Server](https://ubuntu.com/download/server)

You should be able to run the following (exactly as shown in [the tutorial](https://linuxize.com/post/how-to-set-up-ssh-keys-on-ubuntu-1804/)):

```sh
cat ~/.ssh/id_rsa.pub | ssh remote_username@server_ip_address/your_domain.com "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

## Remember which key file to use with the domain

- Open _.ssh_ directory under your user folder (or create it if it does not exist).
- Open the _config_ file (or, again, create it if it does not exist).
- Add the following:

```plaintext
Host server_ip_address/your_domain.com
  HostName server_ip_address/your_domain.com
  User remote_user
  IdentityFile /home/localuser/.ssh/your_key_id_rsa
  IdentitiesOnly yes
```

## References

- [Using ssh.config to set remember the right private key for the domain](https://stackoverflow.com/questions/7927750/specify-an-ssh-key-for-git-push-for-a-given-domain)
