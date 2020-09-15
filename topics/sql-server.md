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

{% highlight SQL %}
DBCC SHRINKDATABASE (DataWarehouse, 10);
GO
{% endhighlight %}
