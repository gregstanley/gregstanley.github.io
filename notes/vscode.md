---
layout: page
title: VSCode
categories: vscode
tags: notes
redirect_from:
  - Topics/VSCode
  - Topics/VSCode/
---

![VSCode]({{'/assets/images/brands/visual-studio-code-1.svg' | relative_url}})
VSCode notes...

## Useful extensions

| Area               | Extension                                                                                         | Description                                                                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~UI~~             | ~~[Rainbow brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)~~ | Gives each pair of brackets a unique colour for easy identification. This is now [built-in](https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization) and can be enabled by adding `"editor.bracketPairColorization.enabled": true` to the `settings.json` file. |
| Git                | [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)               | Provides a clean graph of the project history.                                                                                                                                                                                                                                                  |
| Git                | [Git autoconfig](https://marketplace.visualstudio.com/items?itemName=shyykoserhiy.git-autoconfig) | Ensure you set the commit email for each project.                                                                                                                                                                                                                                               |
| Angular/TypeScript | [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)      | Manage TypeScript imports.                                                                                                                                                                                                                                                                      |
| Utilities          | [Rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)              | [Postman](https://www.postman.com/) like capabilities.                                                                                                                                                                                                                                          |

## Example launch.json snippets

### Python

```json
{
  "name": "Python: App (Integrated Terminal)",
  "type": "python",
  "request": "launch",
  "program": "${workspaceFolder}/path/to/start.py",
  "console": "integratedTerminal",
  "cwd": "${workspaceFolder}",
  "pythonPath": "${workspaceFolder}/venv/Scripts/python.exe",
  "env": {
    "PYTHONPATH": "${workspaceFolder}"
  }
}
```

- `pythonPath` - Ensure the application runs through your [virtual environment](https://docs.python.org/3/library/venv.html)
- `PYTHONPATH` - allows Python to actually find your source code.

### Angular frontend and NET Core backend

```json
"configurations": [
{
  "name": "Frontend",
  "command": "npm start",
  "request": "launch",
  "type": "node-terminal",
  "cwd": "${workspaceFolder}/Frontend/",
  "skipFiles": [
    "<node_internals>/**"
    ]
},
{
  "name": "API",
  "type": "coreclr",
  "request": "launch",
  "preLaunchTask": "build",
  "program": "${workspaceFolder}/Backend/<project>/bin/Debug/net5.0/C<project>.dll",
  "args": [],
  "cwd": "${workspaceFolder}/Backend/<project>",
  "stopAtEntry": false,
  "serverReadyAction":
  {
    "action": "openExternally",
    "pattern": "\\bNow listening on:\\s+(https?://\\S+)"
  },
  "env":
  {
    "ASPNETCORE_ENVIRONMENT": "Development"
  }
},
],
"compounds": [
{
  "name": "API + Frontend",
  "configurations": ["API", "Frontend"]
}
]
```
