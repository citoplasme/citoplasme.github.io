---
layout: '../../layouts/publications/individual.astro'
title: 'Subgroup Mining for Performance Analysis of Regression Models'
date: '2022-08-09'
date_text: 'August 2022'
status: 'Published'
type: 'Peer reviewed paper'
journal: 'Expert Systems'
publisher: 'Wiley Online Library'
description: '<a href="https://web.cs.dal.ca/~pimentel/" target="_blank">João Pimentel</a>, <a href="https://www.di.uminho.pt/~pja/" target="_blank">Paulo J. Azevedo</a> and <a href="https://web.cs.dal.ca/~ltorgo/" target="_blank">Luís Torgo</a> | Refereed Journal | <a href="https://onlinelibrary.wiley.com/journal/14680394" target="_blank">Expert Systems</a>, <a href="https://onlinelibrary.wiley.com" target="_blank">Wiley Online Library</a>'
keywords: '#Interpretability #Machine_Learning #Performance_Analysis #Regression'
---
Submitted February 2022, Accepted July 2022, Published August 2022 | [Expert Systems](https://onlinelibrary.wiley.com/journal/14680394), [Wiley Online Library](https://onlinelibrary.wiley.com) | <i class="ai ai-doi"></i> [DOI](https://doi.org/10.1111/exsy.13118)

[João Pimentel](https://web.cs.dal.ca/~pimentel/), [Paulo J. Azevedo](https://www.di.uminho.pt/~pja/) and [Luís Torgo](https://web.cs.dal.ca/~ltorgo/)

Machine learning algorithms have shown several advantages compared to humans, namely in terms of the scale of data that can be analysed, delivering high speed and precision. However, it is not always possible to understand how algorithms work. As a result of the complexity of some algorithms, users started to feel the need to ask for explanations, boosting the relevance of Explainable Artificial Intelligence. This field aims to explain and interpret models with the use of specific analytical methods that usually analyse how their predicted values and/or errors behave. While prediction analysis is widely studied, performance analysis has limitations for regression models. This paper proposes a rule-based approach, Error Distribution Rules (EDRs), to uncover atypical error regions, while considering multivariate feature interactions without size restrictions. Extracting EDRs is a form of subgroup mining. EDRs are model agnostic and a drill-down technique to evaluate regression models, which consider multivariate interactions between predictors. EDRs uncover regions of the input space with deviating performance providing an interpretable description of these regions. They can be regarded as a complementary tool to the standard reporting of the expected average predictive performance. Moreover, by providing interpretable descriptions of these specific regions, EDRs allow end users to understand the dangers of using regression tools for some specific cases that fall on these regions, thaṯ is, they improve the accountability of models. The performance of several models from different problems was studied, showing that our proposal allows the analysis of many situations and direct model comparison. In order to facilitate the examination of rules, two visualization tools based on boxplots and density plots were implemented. A network visualization tool is also provided to rapidly check interactions of every feature condition. An additional tool is provided by using a grid of boxplots, where comparison between quartiles of every distribution with a reference is performed. Based on this comparison, an extrapolation of counterfactual examples to regression was also implemented. A set of examples is described, including a setting where regression models performance is compared in detail using EDRs. Specifically, the error difference between two models in a dataset is studied by deriving rules highlighting regions of the input space where model performance difference is unexpected. The application of visual tools is illustrated using EDRs examples derived from public available datasets. Also, case studies illustrating the specialization of subgroups, identification of counter factual subgroups and detecting unanticipated complex models are presented. This paper extends the state of the art by providing a method to derive explanations for model performance instead of explanations for model predictions.

<h3 class="section__subtitle">Resources</h3>

<span class="mdi mdi-github"/> [Paper Results and Source Code](https://github.com/citoplasme/edr_paper_results/)
<span class="mdi mdi-github"/> [R Package Source Code](https://github.com/citoplasme/edr/)

<h3 class="section__subtitle">Technologies</h3>

<span class="mdi mdi-language-r"/> [R Programming Language](https://www.r-project.org)
<span class="mdi mdi-language-r"/> [GGPlot2](https://ggplot2.tidyverse.org)
