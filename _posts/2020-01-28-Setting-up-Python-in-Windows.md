---
layout: post
title: Setting up Python on Windows
categories: python
tags: notes
---

I've been using Python a lot more lately so I just wanted to capture some of the setup I've been through as I know I'll forget in future!

<!--more-->

## Installing on Windows

| Installation method                                                      | Expected path                                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [Manual](https://www.python.org/downloads/) (all users)                  | `C:\Python3x`                                                       |
| [Manual](https://www.python.org/downloads/) (local user)                 | `C:\Users\[user]\AppData\Local\Programs\Python\Python3x`            |
| [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) | `C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64` |

This [SO answer](https://stackoverflow.com/questions/52021815/where-visual-studio-install-python) has more information about the [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) location.

## Anaconda

[Anaconda](https://www.anaconda.com/distribution/) is a popular Python and R distribution, particularly suited for data science and machine learning applications. It provides an out-of-the-box environment with a comprehensive set of tools.

[Key benefits of using Anaconda](https://stackoverflow.com/questions/42096280/how-is-anaconda-related-to-python):

> [Anaconda](https://www.anaconda.com/distribution/) is a python and R distribution. It aims to provide everything you need (Python-wise) for data science "out of the box".
> It includes:
>
> - The core Python language
> - 100+ Python "packages" (libraries)
> - Spyder (IDE/editor - like PyCharm) and Jupyter
> - _conda_, [Anaconda](https://www.anaconda.com/distribution/)'s own package manager, used for updating [Anaconda](https://www.anaconda.com/distribution/) and packages
>
> ...
> It is quite complete and avoids problems in building libraries that you need from source code, that frequently plague one by one installations of those libraries by tools like pip.

Considerations:

- Independent package management can sometimes lag behind official releases.
- It's a larger size so evaluate if it's suitable for your project, e.g., in a Docker environment.

## Unit testing

- Some [thoughts on testing in VSCode](https://code.visualstudio.com/docs/python/testing#_test-configuration-settings)
- And some [general file structure advice](https://www.patricksoftwareblog.com/python-unit-testing-structuring-your-project/):
  - Make your `source` and `tests` directories siblings.
  - Ensure `__init__.py` exists in both (for test discovery).

\*This was edited in 2025 to make it more post like rather than a standalone notes page.
