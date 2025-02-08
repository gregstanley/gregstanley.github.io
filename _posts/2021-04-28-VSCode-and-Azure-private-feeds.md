---
layout: post
title: VSCode and Azure private feeds
categories:
  - azure
  - programming
tags:
  - vscode
---

_Scenario_ - Building a project that has packages in an [Azure private feed](https://docs.microsoft.com/en-us/azure/devops/artifacts/get-started-nuget?view=azure-devops&tabs=windows) 'just works' in [Visual Studio](https://visualstudio.microsoft.com/) but [VSCode](https://code.visualstudio.com/) receives a `Response status code does not indicate success: 401 (Unauthorized)` error.

<!--more-->

In the interest of time my immediate approach was just to use [Visual Studio](https://visualstudio.microsoft.com/) for the build, however, I'm trying to use [VSCode](https://code.visualstudio.com/) wherever possible now - so this was less than ideal. The [primary setup information](https://docs.microsoft.com/en-us/azure/devops/artifacts/get-started-nuget?view=azure-devops&tabs=windows) is entirely [Visual Studio](https://visualstudio.microsoft.com/) based but after a bit of digging I found the [Azure artifacts credentials provider for nuget](https://github.com/Microsoft/artifacts-credprovider) which appears to have been created for exactly this situation. Running the provided [Powershell helper script](https://github.com/microsoft/artifacts-credprovider/blob/master/helpers/installcredprovider.ps1) installed [nuget plugin files](https://docs.microsoft.com/en-us/nuget/reference/extensibility/nuget-cross-platform-plugins) under `"%USERPROFILE%\.nuget\plugins\netcore\CredentialProvider.Microsoft"` and then everything started working as expected.
