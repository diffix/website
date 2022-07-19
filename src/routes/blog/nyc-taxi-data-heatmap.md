---
title: Side-by-side comparison of Diffix Fir and original data using the NYC taxi data
author: Paul Francis
date: 2022-07-12
excerpt: This heatmap visualization shows just how accurate Diffix anonymization can be, even down to the city block.
---

# Side-by-side comparison of Diffix Fir and original data using the NYC taxi data

[Piotr Dobaczewski](https://github.com/pdobacz) wrote a [nice little visualization](https://taxi-heatmap.open-diffix.org/) that compares the accuracy of Diffix anonymization with the original data. The visualization uses the NYC taxi data; a pseudonymized dataset of every taxi ride in NYC that is released each year. The [code is on GitHub](https://github.com/diffix/taxi-heatmap). The version of Diffix used for the visualization is Fir.

The data we used covers 14776615 rides registered during January 2013 and comes from a publication by the [University of Illinois at Urbana-Champaign](https://databank.illinois.edu/datasets/IDB-9610843).

Each row of the dataset describes a single ride; its pickup and dropoff time and location, the fare, the number of passengers and other details. The dataset includes a column that uniquely identifies the driver of each ride. Because it is pseudonymized, the dataset would be regarded as personal data by GDPR criteria. There [have been claims](https://vgc.engineering.nyu.edu/~juliana/pub/taxi-privacy.pdf) that driver privacy could be at risk from this data, and indeed NYC no longer includes a driver identification in its releases (our dataset is from 2013).

[The visualization](https://taxi-heatmap.open-diffix.org/) gives data for two parameters, average ride fare and average ride speed. Many other parameters could be queried ... these are just the two examples we chose. The data is shown as a grid heatmap. The size of the grid boxes depends on the zoom level, but can get down to the size of a small city block. Each heatmap covers a 1-hour time window at 4-hour intervals.

The visualization comes with a slider that you can wipe across the heatmap. The heatmap to the left of the slider is without anonymization, and the heatmap to the right is anonymized by Diffix Fir. This lets you directly see how much Diffix distorts the results. We suggest you [go and try it](https://taxi-heatmap.open-diffix.org/) before reading further.

## How we make the boxes

Here is a portion of the heatmap from lower Manhattan for average fares, rounded to the nearest dollar, in the 8:00 - 12:00 time window:

<img src="figs/heatmap-ex.gif" width="600">

Not all locations are covered by boxes, and some boxes are larger than others.

The reason that not all locations have boxes is because there were not enough rides in the given time/space window to generate a meaningful average. In the case of the original (non-anonymized) data, we require that there be five or more rides originating in the time/space window. If not, we suppress the data and publish nothing. Diffix naturally suppresses data for which there are too few drivers as part of its anonymization. The average suppression threshold for Diffix Fir was set to five distinct drivers.

The reason some boxes are bigger than others is that we show the smallest box for which all of the four sub-boxes at the next zoom level are suppressed. (Box dimensions grow as a power of two, so each box can be divided into four smaller boxes. If all four smaller boxes would be suppressed, then we show the larger box.)

As you explore the visualization, you will notice that sometimes the original data displays a box where Diffix Fir does not, and vice versa. This is because the suppression threshold for Diffix Fir is not a specific value, but a range of values from three to roughly seven. ([Read more](https://www.open-diffix.org/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades) about noisy thresholds.) Sometimes Diffix Fir will display a box with only three or four distinct rides, or suppress a box with six or seven distinct rides. By contrast, the threshold for the original data is always five.

## Key takeaways

The key takeaways from this visualization are:

**Diffix is pretty accurate.** Visually you can see that the Diffix heatmap tracks the original data heatmap pretty closely. One can draw valid conclusions from the anonymized data.

**Diffix hides some data.** Any anonymization mechanism must either suppress or generalize data, and Diffix is no exception. We could certainly have shown the original data as exact points in time. Doing so, however, would in fact detract from the quality of the visualization. Heatmaps are good for visualization precisely because nearby values are cumulated. Given this, the fact that Diffix hides data hardly detracts from the quality of the visualization at all.

Please feel free to contact us at hello@open-diffix.org if you have any questions, or would like to explore the use of Diffix for your own project!


