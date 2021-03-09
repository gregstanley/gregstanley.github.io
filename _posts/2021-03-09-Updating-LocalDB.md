---
layout: post
title: Updating LocalDB
categories:
  - sql
  - programming
tags:
  - localdb
---
I recently discovered that although [Visual Studio](https://visualstudio.microsoft.com/) installs a version of [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) it is not necessarily the latest one or kept up-to-date and I ran in to problems while trying to run a script containing ` OPTIMIZE_FOR_SEQUENTIAL_KEY`.

To upgrade [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) I followed [this article](https://intellitect.com/upgrading-sql-server-localdb/) inlcuding running:

```
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

The only minor issue was that I wasted time assuming the 'Basic' install option would deal with [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) - and it did not. For future reference, if you only want the [LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) part then select 'Download Media' and select it through there. 
