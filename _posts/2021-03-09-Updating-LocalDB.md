---
layout: post
title: Updating LocalDB
categories:
  - sql
  - programming
tags:
  - localdb
---

## TLDR

The 'Basic' option in the [SQL Express installer](https://www.microsoft.com/en-us/download/details.aspx?id=101064) doesn't install [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15), you need to switch to 'Download Media' and select it as the option there.

## Backstory

I recently discovered that although [Visual Studio](https://visualstudio.microsoft.com/) installs a version of [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) it is not necessarily the latest one (or updated when [Visual Studio](https://visualstudio.microsoft.com/) updates) and I ran in to problems while trying to run a script containing [OPTIMIZE_FOR_SEQUENTIAL_KEY](https://stackoverflow.com/questions/59985030/syntax-error-at-optimize-for-sequential-key) which requires v15 - two versions above the version installed by [Visual Studio](https://visualstudio.microsoft.com/).

To upgrade [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) I followed [this article](https://intellitect.com/upgrading-sql-server-localdb/) including running:

```sh
C:\
λ sqllocaldb stop MSSQLLocalDB
LocalDB instance "MSSQLLocalDB" stopped.

C:\
λ sqllocaldb delete MSSQLLocalDB
LocalDB instance "MSSQLLocalDB" deleted.

C:\
λ sqllocaldb create MSSQLLocalDB
LocalDB instance "MSSQLLocalDB" created with version 15.0.2000.5.

C:\
λ sqllocaldb start MSSQLLocalDB
LocalDB instance "MSSQLLocalDB" started.
```

And then manually attaching the databases via [SSMS](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15). The only minor issue was that I wasted time assuming the 'Basic' install option would deal with [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) - and it did not. For future reference, if you only want the [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) part then select 'Download Media' and select it through there.
