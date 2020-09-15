---
layout: page
title: SQL Server
categories:
  - software
tags:
  - sql
---
# Development maintenance
## Reduce database size

When logs get big you can try this (from [here](https://docs.microsoft.com/en-us/sql/relational-databases/databases/shrink-a-database?view=sql-server-ver15)):
{% highlight SQL %}
DBCC SHRINKDATABASE (DataWarehouse, 10);
GO
{% endhighlight %}
