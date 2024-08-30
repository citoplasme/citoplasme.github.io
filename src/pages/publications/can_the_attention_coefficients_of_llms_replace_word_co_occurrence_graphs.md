---
layout: '../../layouts/publications/individual.astro'
title: 'Can the attention coefficients of large language models replace word co-occurrence graphs?'
date: '2024-08-30'
date_text: 'August 2024'
status: 'Submitted'
type: 'Research aptitude project'
journal: ''
publisher: ''
description: '<a href="https://web.cs.dal.ca/~pimentel/" target="_blank">João Pimentel</a>, supervised by <a href="https://web.cs.dal.ca/~rudzicz/" target="_blank">Frank Rudzicz</a> | Research aptitude project | <a href="https://www.dal.ca/faculty/computerscience.html" target="_blank">Faculty of computer science</a> | <a href="https://www.dal.ca" target="_blank">Dalhousie University</a>'
keywords: '#GNNS, #LLMs, #Word_co-occurrence, #Affective_computing'
---
Submitted August 2024 | [Dalhousie University](https://www.dal.ca)

[João Pimentel](https://web.cs.dal.ca/~pimentel/), supervised by [Frank Rudzicz](https://web.cs.dal.ca/~rudzicz/)

With the ever-growing amount of publicly available text data, extracting information from text has become crucial. Even though transformers are considered the standard, these have considerable limitations when compared to some GNNs that make them unusable or sub-optimal in certain tasks. These limitations encompass maximum sequence lengths and higher computational needs. GNNs have shown adequacy to extract meaningful information in affect-related tasks, such as sentiment analysis or depression detection, reason why we focus on this paradigm. Recent works have shown benefits in considering broader context windows and positional information; in learning from farther word relationships; and have revealed that the intrinsic knowledge in LLMs can produce more informative word-based structural learning than close-distance co-occurrences. Based on these, we propose a novel method to construct word graphs using the attention coefficients of pre-trained LLMs. This method was compared to fixed-size sliding windows in three GNN-based architectures, and contrasted against the performance of two SOTA methods in five benchmark data sets. We found the construction of word graphs using the attention coefficients of LLMs to not always be beneficial. Granted that performance is not guaranteed to improve, this method may also be more time-consuming too -- both in terms of time to construct and to train. Furthermore, it might require more memory, due to a tendency to produce denser graphs, as well as LLM-based inference alone. Despite these problems, the method surpassed the performance of the sliding window baselines and SOTA methods in DAIC-WoZ using BART-based word graphs, reaching 85.71% validation and 75.96% testing micro F1-scores. We found the suitability of each LLM to construct graphs to differ considerably. Even though we could not find a clear pattern between the performance changes from using graphs constructed with the attention coefficients of pre-trained models and corpus properties, we suspect that BART is adequate for extremely long texts due to its summarizing nature, while BERT is the best choice for smaller documents. In the future, we plan to extend this study to MPAD and TEXTING, and shift from a global evaluation approach to a more local one, so that we may uncover how individual text properties relate to performance. We also intend to explore how sub-setting the layers and/or attention heads of each pre-trained model impacts the end-results. Lastly, studying other kinds of pre-trained LLMs, such as prompt-based models, may provide additional understanding about how to exploit the structural information within these models.

<h3 class="section__subtitle">Technologies</h3>

<span class="mdi mdi-language-python"/> [Python](https://www.python.org)
