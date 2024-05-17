---
layout: '../../layouts/publications/individual.astro'
title: 'Feature Extraction for Exoplanet Detection'
date: '2024-05-16'
date_text: 'May 2024'
status: 'Published'
type: 'Peer reviewed paper'
journal: 'International Journal of Data Science and Analytics'
publisher: 'Springer Nature'
description: '<a href="https://web.cs.dal.ca/~pimentel/" target="_blank">João Pimentel</a>, <a href="https://github.com/Joana-18">Joana Amorim</a> and <a href="https://web.cs.dal.ca/~rudzicz/" target="_blank">Frank Rudzicz</a> | Refereed journal | <a href="https://link.springer.com/journal/41060" target="_blank">International Journal of Data Science and Analytics</a>, <a href="https://www.springernature.com/gp" target="_blank">Springer Nature</a>'
keywords: '#Exoplanet_Detection #Feature_Engineering #Feature_Extraction #Machine_Learning'
---
Submitted November 2023, Accepted April 2024, Published May 2024 | [International Journal of Data Science and Analytics](https://link.springer.com/journal/41060), [Springer Nature](https://www.springernature.com/gp) | <i class="ai ai-doi"></i> [10.1007/s41060-024-00552-7](https://doi.org/10.1007/s41060-024-00552-7)

[João Pimentel](https://web.cs.dal.ca/~pimentel/), [Joana Amorim](https://github.com/Joana-18) and [Frank Rudzicz](https://web.cs.dal.ca/~rudzicz/)

Detecting possible habitable planets outside of our solar system has been a growing field of study. Among several other topics, this field aims to classify stars using the transit method, i.e., using their light intensity measured over time to spot the moment when a planet follows its orbit and covers part of the star as seen by a satellite. We propose a novel approach to such classification, using an extracted set of features from individual time-series that cover three different domains: temporal, statistical, and spectral. These features are filtered based on relevant measures, and used to train and evaluate models on Kepler data. The results were compared to state-of-the-art methods evaluated on the same data set and surpass existing approaches for some data transformations. All these transformations are related to turning the time-series naïvely stationary before feature extraction. Using principal components extracted from the feature set during model training did not have a considerable impact on results. In order to better evaluate the results, a cross-validation process was performed to eliminate data set bias. During this step, the best model achieved 100% recall and 98.82% F1-score for the minority class. In the future, testing additional feature selection methods, as well as assessing feature importance using more explainable metrics is crucial to further understand the distinctions that separate stars with exoplanets from those without.

<h3 class="section__subtitle">Resources</h3>

<span class="mdi mdi-github"/> [Results and source code](https://github.com/citoplasme/FeatureExtraction4ExoplanetDetection)

<h3 class="section__subtitle">Technologies</h3>

<span class="mdi mdi-language-python"/> [Python](https://www.python.org)
<span class="mdi mdi-language-python"/> [Pandas](https://pandas.pydata.org)
<span class="mdi mdi-language-python"/> [Scikit-learn](https://scikit-learn.org/stable/)
<span class="mdi mdi-language-python"/> [TSFEL](https://tsfel.readthedocs.io/en/latest/)
