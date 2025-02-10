---
layout: post
title: Changing a SQL Server column type during EF migrations
categories: software sql
tags: c# entity-framework
redirect_from:
  - Changing-a-SQL-Server-column-type-during-EF-migrations
  - Changing-a-SQL-Server-column-type-during-EF-migrations/
---

_Scenario_ - An existing data type has changed, from string to int for example, and therefore may contain invalid data.

<!--more-->

Entity Framework migrations will producing the following error:

```sh
An operation was scaffolded that may result in the loss of data. Please review the migration for accuracy.
```

If you're lucky and there is _definitely_ no data in the current column that might fail to cast to the new value then the migration may well 'just work'.
If however there is some invalid data then that must be handled first.

[This StackOverflow question](https://stackoverflow.com/questions/14837168/ef5-code-first-changing-a-column-type-with-migrations) pretty much covers it although I actually prefer the second answer which cleans the data in place before applying the conversion.
In my case I was fine to discard data that did not simply cast to the target type\_ but that may not always be acceptable. I ended up with something like the following injected at the very start of my migration:

```csharp
migrationBuilder.Sql("UPDATE [<table>] SET [<column>] = TRY_CAST(NULLIF([<column>],'') AS type)");
```

> NOTE: This will _permanently_ discard any data that can not simply be cast to the target type.

I also encountered a problem with the Down() command - it was unhappy with existing indexes. The approach I took was to:

- Drop the index
- Run the generated migrations
- Recreate the index - _by copying the exact command from the point it was last updated_.
