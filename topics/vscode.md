---
layout: page
title: Visual Studio (VS) Code
categories:
  - software
tags:
  - vscode
---

## Example launch.json snippets

I can never remember these and have to dig them upo each time.

### Python

`
{
    "name": "Python: App (Integrated Terminal)",
    "type": "python",
    "request": "launch",
    "program": "${workspaceFolder}/path/to/start.py",
    "console": "integratedTerminal",
    "cwd": "${workspaceFolder}",
    "pythonPath": "${workspaceFolder}/venv/Scripts/python.exe",
    "env": {
        "PYTHONPATH" : "${workspaceFolder}"
    }
}
`

* `pythonPath` - Ensure the application runs through your [virtual environment](https://docs.python.org/3/library/venv.html)
* `PYTHONPATH` - allows Python to actually find your source code.
