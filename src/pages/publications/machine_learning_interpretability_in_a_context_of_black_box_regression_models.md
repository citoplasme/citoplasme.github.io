---
layout: '../../layouts/publications/individual.astro'
title: 'Machine Learning Interpretability in a Context of Black Box Regression Models'
date: '2021-07-31'
date_text: 'July 2021'
status: 'Published'
type: 'MSc Dissertation'
journal: ''
publisher: ''
description: '<a href="https://web.cs.dal.ca/~pimentel/" target="_blank">João Pimentel</a>, supervised by <a href="https://www.di.uminho.pt/~pja/" target="_blank">Paulo J. Azevedo</a> | MSc Dissertation | <a href="https://www.eng.uminho.pt/en" target="_blank">School of Engineering</a> | <a href="https://www.uminho.pt/EN/" target="_blank">University of Minho</a>'
keywords: '#Interpretability #Machine_Learning #Performance_Analysis #Regression'
---
[João Pimentel](https://web.cs.dal.ca/~pimentel/), supervised by [Paulo J. Azevedo](https://www.di.uminho.pt/~pja/)

Machines have shown several advantages compared to humans, namely to reproduce and scale tasks, presenting high speed and precision. However, it is not always possible to understand how the algorithms used work. Consequently, the need to explain the results of these models has been increasing, leading to a boost in the relevance of explainability tools, as these enable the reduction of divergences between the interpretation of the model and the human level of reasoning.

The main goal of this dissertation consisted of developing a drill-down technique to evaluate black box regression models, that considered multivariate interactions within the scope of the predictors. Thus, we propose EDRs, a combination between DRs and EDPs. In order to ease the examination of these, multiple visualization forms were implemented. Namely, boxplots, histograms and density plots to display complete distributions of values, a network visualization to rapidly check interactions of every feature condition and performance tables, comparing the quartiles of every distribution with a reference. Based on the cutting point values and a reference distribution, an extrapolation of counter-factual examples to regression was also implemented.

Four distinct algorithms were applied to a heterogeneous range of datasets in order to eliminate any potential model bias. These experiments showed that EDRs present some advantages in comparison to EDPs. First, the number of plots to analyze is reduced, as only subgroups that differ significantly from the reference and similar subgroups are presented. Also, interactions composed by more than three conditions of feature values can be detected. A case study was considered, applying the developed tools to a model selection problem. EDRs showed to be crucial in helping users to understand how the models behave regarding specific combinations of data. Moreover, it was shown that the best model overall is not always the best for every subgroup. Hence, EDRs can be used to select a model or to generate ensembles, using the best performing models for each subgroup.

Despite the advantages compared to the existing tools, the usage of rules does not exhaust the domain of variables, as not every possible combination of values, with up to three conditions, is displayed. In the future, a rule based discretization of numerical features might be proven fruitful, as this step relies on external techniques. Meta-models are also to be defined to produce ensembles based on performance for each subgroup. \newline

<h3 class="section__subtitle">Resources</h3>

<span class="mdi mdi-github"/> [Github Repository](https://github.com/citoplasme/MScDissertation/)

<h3 class="section__subtitle">Technologies</h3>

<span class="mdi mdi-language-r"/> [R Programming Language](https://www.r-project.org)
<span class="mdi mdi-language-r"/> [GGPlot2](https://ggplot2.tidyverse.org)
