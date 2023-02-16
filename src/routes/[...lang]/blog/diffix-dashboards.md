---
title: Introducing Diffix Dashboards
author: Paul Francis
date: 2023-02-15
excerpt: Diffix Dashboards brings together Metabase data visualization with Diffix for PostgreSQL in a simple Windows desktop app that works with local CSV files.
---

# Introducing Diffix Dashboards

Diffix Dashboards is a simple Windows standalone desktop application that imports CSV files containing personal data and exports anonymized statistical data as CSV, Excel, or JSON files. The anonymized data is non-personal by GDPR criteria, and is safe to share.

It supports both users with limited technical skill (think basic Excel) as well as users comfortable with SQL.

Diffix Dashboards is designed to help users understand the effect of data distortion caused by Diffix anonymization, and to adjust queries to find the right balance between error and precision. It does this by allowing users to compare anonymized and non-anonymized query answers in both tabular and visual graphic forms.

<img src="/blog/figs/census-graph-ex1.png" width="600">

## Diffix for PostgreSQL marries Metabase

[Metabase](https://metabase.com) is an open-source data analytics tool with data visualizations, dashboarding, and both UX-based (point-and-click) and SQL-based query building. Diffix for PostgreSQL, used as the backend, turns Metabase into an anonymizing data analytics tool.

Metabase is designed to be used as a web service, and works as-is with Diffix for PostgreSQL as the backend. Indeed we have an [online instance](https:/open-diffix.org/en/play/#metabase) of Metabase that demonstrates this use case. A limitation of this approach, however, is that the UX-based query building feature of Metabase doesn't work smoothly. The limitations that Diffix places on SQL causes certain queries to fail. The user needs to understand these limitations, and write SQL queries that work with Diffix.

Another limitation is that it requires the installation of PostgreSQL with the Diffix extension pg_diffix as well as the installation of Metabase. This is a lot of overhead for someone who is working with data in the form of CSV files on their local machine.

Diffix Dashboards overcomes these limitations. It bundles Metabase and Diffix for PostgreSQL into a simple Windows desktop application. The added value of Diffix Dashboards is:

- **Simple installation:** Metabase and Diffix for PostgreSQL local services are managed by Diffix Dashboards. The user only needs to download and run the Diffix Dashboards executable in the normal way.
- **File import:** Diffix Dashboards offers simple drag-and-drop file import. Under the hood, Diffix Dashboards loads the data into the local PostgreSQL engine and configures Metabase to recognize the new table.
- **UX-based query building:** Diffix Dashboards has UX-based query-building tool that is tailored to the limitations of Diffix' SQL. Users with no SQL expertise can generate queries by selecting columns and generalizations, and Diffix Dashboards generates the appropriate SQL and loads it into Metabase.

<img src="/blog/figs/dashboards-query-builder.png" width="600">

## Anonymizing and Direct databases

When a table is installed in Diffix Dashboards, it is appears in two Metabase databases, `Direct Access` and `Anonymized Access`. When the table is queried in the `Direct Access` database, the answer is exact: there is no anonymization. When the table is queried in the `Anonymized Access` database, the answer is anonymized by Diffix and therefore distorted. The count has a little noise, and some data may be suppressed.

<img src="/blog/figs/dashboards-system-overview.png" width="600">

A common problem when dealing with any kind of data anonymization is understanding how much the data is distorted, and whether or not the anonymized statistics accurately reflects the real data. Diffix Dashboards solves this problem by making both `Direct Access` and `Anonymized Access` data easily accessible to the same queries. Users can see the direct impact of anonymization, and can modify queries to reduce distortion, either by increasing bin sizes (from age bins of 1 year to 5 years, for instance), or by reducing the number of columns.

A typical Diffix Dashboards workflow starts with an analysis of the `Direct Access` data using Metabase's query building and visualization tools. Once the user understands what data they would like to release, Diffix-friendly queries that capture this data are written using Diffix Dashboards' query building tool. The answers from both `Anonymized Access` and `Direct Access` are then compared to determine if the anonymized statistics are accurate enough.

## Let us know how it goes!

Please contact us at hello@open-diffix.org if you have any questions about the use of Diffix Dashboards, would like to request new features, or just to let us know how it goes. We look forward to hearing from you, and hope that Diffix Dashboards solves your anonymization needs!
