---
layout: post
title: Line of sight coding
categories: clean-code
tags: article
redirect_from:
  - Topics/Clean-code
  - Topics/Clean-code/
---

Writing clean, readable code is a skill that benefits both you and those who come after you. Recently, I came across [Mat Ryer’s discussion on 'line of sight code'](https://medium.com/@matryer/line-of-sight-in-code-186dd7cdea88), which presents some excellent guidelines for keeping your code easy to follow.

<!--more-->

The core idea is that the **happy path**, in other words, the expected flow of execution, should be immediately clear when scanning the code. Tips to help achieve this include:

> - Align the happy path to the left; you should quickly be able to scan down one column to see the expected execution flow.
> - Don't hide happy path logic inside a nest of indented braces.
> - Exit early from your function.
> - Avoid else returns; consider flipping the if statement.
> - Put the happy return statement as the very last line.
> - Extract functions and methods to keep bodies small and readable.
> - If you need big indented bodies, consider giving them their own function.

These tips help ensure that when someone reads your code, they can quickly understand what it does without unnecessary cognitive overhead.

Beyond line of sight, other programming principles can also improve maintainability. [Vladimir Khorikov](https://enterprisecraftsmanship.com/) has some great insights on writing maintainable code and effective unit tests. A couple of my favourites:

> - [The DRY principle stands for "Don’t Repeat Yourself" and requires that any piece of domain knowledge has a single representation in your code base.](https://enterprisecraftsmanship.com/posts/dry-damp-unit-tests/?__s=c3yjrwq8nzyqssfqqtov)
> - (Unit Testing) Only allow the most valuable tests in your test suite; disregard the rest. [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
