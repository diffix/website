---
title: Diffix Elm automates what statistics offices have been doing for decades
author: Paul Francis
date: 2022-01-31
excerpt: A good way to understand Diffix Elm's anonymization is that it automates the mechanisms that national statistics offices have been using for decades. This short and simple post explains how.
---

# Diffix Elm automates what statistics offices have been doing for decades

Diffix Elm is a methodology for dynamic data anonymization. _Dynamic_ means that it operates on a query-by-query basis (versus generating a single static anonymized table). Diffix Elm is essentially an SQL query engine. It accepts SQL queries with a limited syntax, reads the original personal data, and returns an anonymized answer.

<img src="figs/diffix-basic.png" width="400">

The two strong anonymization _models_ that get the most attention are _k-anonymity_ and _Differential Privacy_. You might be surprised to learn, then, that organizations like statistics offices, which routinely release anonymized data about whole populations, don't use these models per se\*. Rather, they use a combination of _mechanisms_. The most commonly used mechanisms are **aggregation**, **generalization**, **noise**, **suppression**, and **swapping**. These mechanisms have safely been in use for decades.

Diffix Elm uses these mechanisms too. You can think of Diffix Elm as _automating_ and _generalizing_ the bespoke methods used by statistics bureaus. In so doing, Diffix Elm brings "census strength" anonymization to non-experts across a wide range of use cases and datasets.

In this article, we describe how and why Diffix Elm uses these mechanisms. Along the way, we contrast them with how the mechanisms are used by the Australian Bureau of Statistics (ABS), the US Census Bureau (USCB), and the UK Office for National Statistics (ONS).

## Aggregation

The original personal data that Diffix Elm accesses has one row per person or per event (if time series data). Diffix Elm aggregates that data into counts:

<img src="figs/aggregate.png" width="400">

Virtually all statistics offices release aggregate data. One example of many is TableBuilder from the ABS ([https://www.abs.gov.au/websitedbs/censushome.nsf/home/tablebuilder](https://www.abs.gov.au/websitedbs/censushome.nsf/home/tablebuilder)).

Statistics offices also often release data in non-aggregated form, usually called _microdata_. Diffix Elm does not release microdata.

## Generalization

If data values are too detailed, then it may not be possible to release an aggregate without first generalizing the data. For example, a given birthdate might be unique to a single person. To deal with this, the birthdate may be generalized to year of birth:

<img src="figs/generalize.png" width="400">

Diffix Elm does not _enforce_ generalization per se. This is because data quality relative to a given use case depends heavily on how much generalization is done. It may be that for some use cases, decade of birth is adequate precision, whereas for other use cases, month of birth is needed. The analyst must be able to choose the amount of generalization.

Instead, Diffix Elm _allows_ generalization, and leaves it to the analyst to select the amount. Diffix Elm supports numeric ranges and substrings for text (offset and length). Other forms of generalization, in particular hierarchical categorization, must be done as a pre-processing step.

## Noise

Adding noise to data is one of the oldest privacy mechanisms, going back to the idea of randomized response in the 1960's. Note that noise here means adding noise to each bin's aggregate count, not adding noise to column values. In other words, we won't change the value of a birth year, but we will change the count of persons with a given birth year:

<img src="figs/noise1.png" width="400">

Noise needs to be random. If it is not random, it might be possible to deduce the noise amount and recover the original count. The difficulty with random noise, however, is that if one can get multiple samples of the same data, then the random noise can be averaged away and the original count recovered.

There are two classic ways to deal with this. One is to simply limit the amount of data that is released. This is the approach taken by Differential Privacy, leading to the concept of a privacy budget.

The other way is to make the noise _sticky_. The concept here is that some given data, when repeated, has the same noise. The noise is random the first time, but subsequent repeats of the data have the same noise attached. This is the approach taken by both the ABS and the ONS.

The ABS and the ONS effectively use the same approach. They select the noise value as a function of the set of persons that contribute to a given aggregate count. In
[[ABS]][ABS], it is referred to this as the _'same contributors, same perturbation'_ principle. In [[ONS]][ONS], it is called the Cell Key method.

Diffix Elm uses sticky noise too, but we take it a little further. In addition to 'same contributors, same perturbation', we also have _'same query, same perturbation'_. In other words, two noise samples. This adds an additional uncertainty in cases where different queries may result in the same set of contributors.

## Suppression

The mere presence or absence of a distinct value in the data can leak private information. Take, for instance, the oldest living person in an area. The age or year of birth of that person uniquely identifies that person in the data.

A common way of preventing this is through suppression: literally removing the record from the released data. In the case of census data, distinct values typically come in the form of extreme values from numeric attributes like age, number of children, number of marriages, and so on.

<img src="figs/top-code.png" width="400">

One approach that statistics offices use to suppress extreme values is with top- or bottom-coding. In this method, numeric ranges are capped with minimum and maximum values, and anything outside of this range is suppressed.

More generally, a combination of multiple values like birthdate, zip code, and sex can refer to a single person even though each value taken alone refers to many persons. These combinations are called _pseudo-identifiers_.

Diffix Elm suppresses by counting the number of distinct persons that comprise a bin, and removing that bin from the answer if the number falls below a threshold. Diffix Elm uses a _noisy threshold_ with a hard lower bound, rather than a simple hard threshold. In other words, instead of suppressing all bins with fewer than say four users, Diffix Elm adds a small amount of sticky noise to a _mean threshold_, and suppresses when the count falls below the noisy threshold.

An analyst can minimize the amount of suppression by increasing generalization to produce larger bins.

## Swapping

Another approach that statistics offices use to deal with data uniques is swapping: exchange a person in one bin with a person in a "nearby" bin. This can be done for a variety of reasons.

In census data, this is most commonly done by exchanging a unique person in one area (census block) with a person in a randomly selected nearby area. In noiseless systems, the advantage of this approach over suppression is that block counts stay accurate. In spite of the fact that the ONS uses noise, it still primarily relies on block swapping. In
[[ONS]][ONS], they refer to the noise as 'light touch perturbation'. It improves anonymization, but is not the primary mechanism.

<img src="figs/area-swap.png" width="500">

For the 2020 census, the USCB moved from a swapping-based approach to a noise-based approach. Nevertheless, the USCB does a kind of statistical swapping. Specifically, when noise would have caused a race category to have a negative count, they increase the count to zero and decrease other non-zero races by the corresponding amount
[[USCB]][USCB].

Diffix Elm has its own form of swapping, called _low-effect detection_ in
[[Elm]][Elm]. This swapping is used in cases where two different queries would cause a bin in one query to differ by a single person from the corresponding bin in the other query. For example, suppose that there is a single female in the computer science department of a university. A query for department, salary (generalized to $10K), and sex would suppress the bin composed of the woman. A query for only department and salary, on the other hand, would include the woman along with the men in the corresponding salary bin. If the analyst knows that there is only one woman in the CS department, in some cases it would be possible to infer the woman's salary bin with high confidence.

<img src="figs/low-effect.png" width="600">

To deal with this, Diffix Elm dynamically detects when this scenario takes place, and moves the person from the suppressed bin to the appropriate non-suppressed bin. This is a relatively rare operation, but sometimes happens

## Other mechanisms in Diffix Elm

Diffix Elm handles tables where each person appears in one row (survey or demographic data) as well as tables where each person appears in multiple rows (event or time-series data). Census data limited to the former type.

When counts are aggregated in census data, by default the counts refer to counts of persons. By contrast, Diffix Elm can count either persons or rows. When counting persons, each person contributes exactly one to the count. When counting rows in time-series data, each person can contribute a different amount to the count. This requires Diffix Elm to have two mechanisms that aren't required for census data. These two mechanisms are often found in systems that adhere to Differential Privacy.

### Dynamic, proportional noise

Diffix Elm adds enough noise to statistically hide the presence or absence of a single person. For time-series data, this means that the amount of noise should be proportional to the largest contributors (the persons with the most rows).

For each query, Diffix Elm dynamically adjusts the amount of noise per bin to hide the largest contributors. This is analogous to the concept of sensitivity in Differential Privacy. The amount of noise is proportional to the average contribution of the _K_ largest contributors, where _K_ is itself a noisy threshold.

### Outlier flattening

Dynamic proportional noise leads to a problem where the amount of noise itself can reveal the presence or absence of extreme contributors. To prevent this, Diffix Elm has one additional mechanism, _outlier flattening_. Diffix Elm dynamically detects where there are one or two extreme contributors, and reduces the contribution to match the average of the next _K_ largest contributors. Outlier flattening is analogous to the concept of clipping in Differential Privacy.

## Conclusion

Statistics offices employ teams of privacy experts to design and analyze bespoke anonymization mechanisms for specific types of data. These offices release data every year covering millions of persons all over the world. This process has been remarkably successful: according to members of the US, UK, and Australian statistics offices, there are no known instances of malicious re-identification of census data.

This is fine for statistics offices, but not everybody can afford a team of privacy experts. This is where Diffix Elm, as part of the Open Diffix project, can help. Diffix Elm takes the anonymization mechanisms used by statistics offices for decades, and engineers them so that they are easy to use for a wide variety of data types and use cases, and provide good quality data with strong anonymization.

This article gives an overview of these mechanisms, and compares and contrasts how they are used by Diffix Elm and statistics offices alike. For more information, a full specification and risk analysis of Diffix Elm can be found at [[Elm]][Elm]. As always, please don't hesitate to get in touch with us at hello@open-diffix.org.

---

\* The US Census Bureau ostensibly uses Differential Privacy. I'm just not sure a budget of epsilon around 20 really ought to be counted as a legitimate use of Differential Privacy. Note I'm not criticizing the US Census Bureau: their 2020 release is undoubtedly their most secure.

### References

**\[ABS\]** http://www.unece.org.net4all.ch/fileadmin/DAM/stats/documents/ece/ces/ge.46/2019/mtg1/SDC2019_S2_ABS_Bailie_D.pdf

**\[Elm\]** https://arxiv.org/abs/2201.04351

**\[ONS\]** https://uksa.statisticsauthority.gov.uk/wp-content/uploads/2020/07/EAP125-Statistical-Disclosure-Control-SDC-for-2021-UK-Census.docx

**\[USCB\]** https://www2.census.gov/library/publications/decennial/2020/2020-census-disclosure-avoidance-handbook.pdf

[abs]: http://www.unece.org.net4all.ch/fileadmin/DAM/stats/documents/ece/ces/ge.46/2019/mtg1/SDC2019_S2_ABS_Bailie_D.pdf
[elm]: https://arxiv.org/abs/2201.04351
[ons]: https://uksa.statisticsauthority.gov.uk/wp-content/uploads/2020/07/EAP125-Statistical-Disclosure-Control-SDC-for-2021-UK-Census.docx
[uscb]: https://www2.census.gov/library/publications/decennial/2020/2020-census-disclosure-avoidance-handbook.pdf
