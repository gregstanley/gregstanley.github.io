---
layout: page
title: Python
categories:
  - software
tags:
  - python
---
## Installing on Windows

| Installation method                                                      | Expected path                                                       |
|--------------------------------------------------------------------------|---------------------------------------------------------------------|
| [Manual](https://www.python.org/downloads/) (all users)                  | `C:\Python3x`                                                       |
| [Manual](https://www.python.org/downloads/) (local user)                 | `C:\Users\[user]\AppData\Local\Programs\Python\Python3x`            |
| [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) | `C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64` |

See this [SO answer](https://stackoverflow.com/questions/52021815/where-visual-studio-install-python) for more information about the [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) location.

### Anaconda

The key benefits of using [Anaconda](https://www.anaconda.com/distribution/) from this [SO answer](https://stackoverflow.com/questions/42096280/how-is-anaconda-related-to-python):

> [Anaconda](https://www.anaconda.com/distribution/) is a python and R distribution. It aims to provide everything you need (Python-wise) for data science "out of the box".
> It includes:
> * The core Python language
> * 100+ Python "packages" (libraries)
> * Spyder (IDE/editor - like PyCharm) and Jupyter
> * _conda_, [Anaconda](https://www.anaconda.com/distribution/)'s own package manager, used for updating [Anaconda](https://www.anaconda.com/distribution/) and packages

_and_

>  It is quite complete and avoids problems in building libraries that you need from source code, that frequently plague one by one installations of those libraries by tools like pip.

Considerations:
* The independent package management can sometimes be behind.
* Larger size - is it suitable for the project e.g. Docker perhaps?

## Unit testing

[In VSCode](https://code.visualstudio.com/docs/python/testing#_test-configuration-settings)
[General file structure advice](https://www.patricksoftwareblog.com/python-unit-testing-structuring-your-project/)
* Make your `source` and `tests` directories siblings.
* Ensure `__init__.py` exists in both (for test discovery).
