---
layout: page
title: Notes
permalink: /notes/
redirect_from:
  - Topics
  - Topics/
---

General notes on the following technologies:

- [![Git icon]({{'/assets/images/brands/git-icon.svg' | relative_url}}) Git](git)
- [![VSCode icon]({{'/assets/images/brands/visual-studio-code-1.svg' | relative_url}}) VS Code](vscode)
- [![Docker icon]({{'/assets/images/brands/docker-4.svg' | relative_url}}) Docker](docker)
- SQL Server
- Node
- Azure

---

## SQL Server

When logs get big you can try this (from [here](https://docs.microsoft.com/en-us/sql/relational-databases/databases/shrink-a-database?view=sql-server-ver15)):

```sql
DBCC SHRINKDATABASE (DataWarehouse, 10);
GO
```

---

## Node

```sh
npm ls -g --depth=0 // List out top level global packages
```

## Windows Terminal

### Setup with Oh My Posh

Install [Oh My Posh](https://ohmyposh.dev/):

```sh
winget install JanDeDobbeleer.OhMyPosh
```

Next, select a [Nerd Font](https://www.nerdfonts.com/font-downloads) and install that e.g.:

```sh
oh-my-posh font install Cousine
```

Install Powershell:

```sh
winget install Microsoft.Powershell
```

Change the terminal 'default' to Powershell (NOT WIndows Powershell)

Edit Profile -> Background image to whatever

Select one of the [Oh My Posh Themes](https://ohmyposh.dev/docs/themes):

```sh
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/star.omp.json" | Invoke-Expression
```

The local copies of the [Oh My Posh Themes](https://ohmyposh.dev/docs/themes) are stored at: <User>/AppData/Local/Programs/oh-my-posh/themes

- drop custom ones in there

Ensure the profile is downloaded - theme must be set in file
/Documents/Profile/Powershell/Microsoft.Powershall_profile.ps1

---

## Azure

### ACR (Azure Container Registry)

- [List the available tags for a repository](https://docs.microsoft.com/en-us/cli/azure/acr/repository?view=azure-cli-latest#az-acr-repository-show-tags)

```sh
az acr repository show-tags --name <registry>.azurecr.io/<image>:<tag> --repository <repo>
```
