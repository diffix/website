---
title: Introducing Diffix Fir
author: Paul Francis
date: 2022-09-15
excerpt: Diffix Fir, the latest version of Diffix, has been released. Among the new features offered by Diffix Fir are WHERE clauses and sum().
---

# Introducing Diffix Fir

Diffix Elm was the first Diffix version produced by the Open Diffix project. Compared to the versions released by Aircloak GmbH (Aspen, Birch, Cedar, and Dogwood), Elm is simpler and has fewer features.

Diffix Fir builds on Elm with several new features.

Whereas the only aggregate supported by Elm is `count()`, Fir adds three new aggregates. `sum(col)` and `avg(col)` work identically to their PostgreSQL counterparts (with the important caveat that noise is added).

The third new aggregate is `diffix.count_histogram(aid_col)`. This creates histogram bins according to the number of rows (events) of each protected entity. For example, from a banking dataset, we can learn how many customers had one transaction, how many had two transactions, and so on. (Note that in SQL, the same thing could be done with nested SELECTs, where the inner SELECT counts the number of rows for each protected entity, and the outer SELECT bins those counts. Diffix Fir, however, is not able to handle this SQL, and so we use a custom function.)

Diffix Fir re-introduces the `WHERE` clause that was dropped by Diffix Elm. In Fir, however, `WHERE` logic is limited to `AND`, and each expression is limited to `col = val` or `func(col) = val`. The main purpose of `WHERE` in Fir is to speed up query processing by filtering out much of the data before Diffix anonymization is encountered.

## Learn more

The [analyst guide](https://github.com/diffix/pg_diffix/blob/release/fir/docs/analyst_guide.md) has all the details.

Alternatively, the [Diffix Training App](https://https://training.open-diffix.org) is an interactive online application that walks you through all of the features of Diffix Fir and shows how to manage noise and suppression.

## Next, Diffix Greenheart

We are looking forward to the next version of Diffix, Greenheart, which will include `JOIN` and native timestamp data types!