---
layout: post
title: Configure SSH access into an Ubuntu Server
categories:
  - software
tags:
  - ubuntu
  - ssh
---

The following notes are asubset of the information provided in [this tutorial](https://linuxize.com/post/how-to-set-up-ssh-keys-on-ubuntu-1804/).

# Prerequisites

* An instance of [Ubuntu Server](https://ubuntu.com/download/server) running.
* An account on the server that can be elevated to [root](https://askubuntu.com/questions/608495/what-is-root-and-how-can-i-become-it) and that you know the password for.

# Create an [SSH Key pair](https://winscp.net/eng/docs/ssh_keys)

Using [PuTTYGen](https://www.ssh.com/ssh/putty/windows/puttygen):

* _Optional_ - change the bits to _4096_.
* Click _Generate_.
* Copy the contents of _box_ (something like ssh-rsa AAAAB3NzaC1...) into a file with a _.pub_ extension. This is simplest option to avoid some of the file format gotchas in [this question](https://stackoverflow.com/questions/42863913/key-load-public-invalid-format).
* Click *Save private key* and save to a file with the same name as the previous one but with _no extension_.

# Copy the _public_ key to the remote [Ubuntu Server](https://ubuntu.com/download/server)

{% highlight Console %}
cat ~/.ssh/id_rsa.pub | ssh remote_username@server_ip_address "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
{% endhighlight %}

# Remember which key file to use with the domain

* Open _.ssh_ directory under you user folder (or create it if it does not exist).
* Open the _config_ file (or, again, create it if it does not exist).
* Add the following (:

{% highlight INI %}
Host server_ip_address/thedomain.com
  HostName server_ip_address/thedomain.com
  User remote_ruser
  IdentityFile /home/localuser/.ssh/your_private_key_id_rsa
  IdentitiesOnly yes
{% endhighlight %}

# References

* [Using ssh.config to set remember the right private key for the domain](https://stackoverflow.com/questions/7927750/specify-an-ssh-key-for-git-push-for-a-given-domain)
