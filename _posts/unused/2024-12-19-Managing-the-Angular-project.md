---
layout: post
title: Angular notes
published: false
---

- Develop locally e.g. `ng serve` from `ng-app` directory.
- When ready, run `ng build` to update `ng-app\dist\gs\`.
- Copy the contents of `ng-app\dist\gs\angular.html` into `_includes\angular.html`.
  - REMEMBER! [Tailwind](https://tailwindcss.com/) requires the `<head>` attribute to insert styles so this must removed again when copying into `_includes\angular.html`.
- Commit.
