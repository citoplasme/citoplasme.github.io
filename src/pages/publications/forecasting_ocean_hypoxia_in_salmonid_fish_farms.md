---
layout: '../../layouts/publications/individual.astro'
title: 'Forecasting ocean hypoxia in salmonid fish farms'
date: '2024-07-08'
date_text: 'July 2024'
status: 'Published'
type: 'Peer reviewed paper'
journal: 'Frontiers in Aquaculture'
publisher: 'Frontiers'
description: 'Vitor Cerqueira, <a href="https://web.cs.dal.ca/~pimentel/" target="_blank">João Pimentel</a>, Jennie Korus, Francisco Bravo, <a href="https://github.com/Joana-18">Joana Amorim</a>, Mariana Oliveira, Andrew Swanson, Ramon Filguera, Jon Grant and <a href="https://web.cs.dal.ca/~ltorgo/" target="_blank">Luís Torgo</a> | Refereed journal | <a href="https://www.frontiersin.org/journals/aquaculture" target="_blank">Frontiers in Aquaculture</a>, <a href="https://www.frontiersin.org" target="_blank">Frontiers</a>'
keywords: '#Fish_Farming #Forecasting #Machine_Learning #Time_Series'
---
Submitted January 2024, Accepted June 2024, Published July 2024 | [Frontiers in Aquaculture](https://www.frontiersin.org/journals/aquaculture), [Frontiers](https://www.frontiersin.org) | <i class="ai ai-doi"></i> [10.3389/faquc.2024.1365123](https://doi.org/10.3389/faquc.2024.1365123)

Vitor Cerqueira, [João Pimentel](https://web.cs.dal.ca/~pimentel/), Jennie Korus, Francisco Bravo, [Joana Amorim](https://github.com/Joana-18), Mariana Oliveira, Andrew Swanson, Ramon Filguera, Jon Grant and [Luís Torgo](https://web.cs.dal.ca/~ltorgo/)

<b>Introduction:</b> Hypoxia is defined as a critically low-oxygen condition of water, which, if prolonged, can be harmful to fish and many other aquatic species. In the context of ocean salmon fish farming, early detection of hypoxia events is critical for farm managers to mitigate these events to reduce fish stress, however in complex natural systems accurate forecasting tools are limited. The goal of this research is to use a machine learning approach to forecast oxygen concentration and predict hypoxia events in marine net-pen salmon farms.

<b>Methods:</b> The developed model is based on gradient boosting and works in two stages. First, we apply auto-regression to build a forecasting model that predicts oxygen concentration levels within a cage. We take a global forecasting approach by building a model using the historical data provided by sensors at several marine fish farms located in eastern Canada. Then, the forecasts are transformed into binary probabilities that indicate the likelihood of a low-oxygen event. We leverage the cumulative distribution function to compute these probabilities.

<b>Results and discussion:</b> We tested our model in a case study that included several cages across 14 fish farms. The experiments suggest that the model can detect future hypoxic events with a commercially acceptable false alarm rate. The resulting probabilistic predictions and oxygen concentration forecasts can help salmon farmers to prioritize resources, and reduce harm to crops.

<h3 class="section__subtitle">Technologies</h3>

<span class="mdi mdi-language-python"/> [Python](https://www.python.org)
<span class="mdi mdi-language-python"/> [Pandas](https://pandas.pydata.org)
<span class="mdi mdi-language-python"/> [Scikit-learn](https://scikit-learn.org/stable/)
