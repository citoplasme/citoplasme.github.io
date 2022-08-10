<template>
  <div class="sidebar">
    <span>Publications</span>
  </div>

  <div class="content">
    <div class="section publications">
      <div
        class="publication"
        v-for="(publication, publication_index) in publications"
        :key="publication.name"
      >
        <div class="publication__name">
          <a :href="publication.link" target="_blank">{{ publication.name }}</a>
          | {{ publication.date.getFullYear() }} - {{ publication.status }}
        </div>
        <div class="publication__authors">
          <p class="publication__text">
            <b>Authors: </b>
            <span
              v-for="(author, index) in publication.authors"
              :key="author.name"
            >
              <a :href="author.link" target="_blank" class="author__name">{{
                author.name
              }}</a>
              <span v-if="index + 1 < publication.authors.length">, </span>
            </span>
          </p>
        </div>
        <div class="publication_journal">
          <p class="publication__text">
            {{ publication.journal }}, {{ publication.publisher }}
          </p>
        </div>
        <div class="publication__description">
          <p class="publication__text">
            <b>Abstract: </b> {{ publication.abstract }}
          </p>
        </div>
        <div class="publication__extras">
          <span class="publication__extra">
            <calendar-icon
              :width="icon_size"
              :height="icon_size"
              :color="'var(--second-color)'"
              class="publication__extra__icon"
            />
            {{ months[publication.date.getMonth()] }}
            {{ publication.date.getFullYear() }}
          </span>
          <span class="publication__extra">
            <citation-icon
              :width="icon_size"
              :height="icon_size"
              :color="'var(--second-color)'"
              class="publication__extra__icon"
            />
            <custom-dialog caption="Cite" :content="publication.citation" />
          </span>
          <span class="publication__extra">
            <github-icon
              :width="icon_size"
              :height="icon_size"
              :color="'var(--second-color)'"
              class="publication__extra__icon"
            />
            <a :href="publication.github" target="_blank">Github Repository</a>
          </span>
        </div>
        <hr
          class="horizontal__rule"
          v-if="publication_index + 1 < publications.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import githubIcon from "@/components/icons/github.vue";
import citationIcon from "@/components/icons/citation.vue";
import calendarIcon from "@/components/icons/calendar.vue";
import customDialog from "@/components/dialog.vue";
const icon_size: Number = 20;
const publications: {
  name: string;
  abstract: string;
  journal: string;
  publisher: string;
  status: string;
  authors: {
    name: string;
    link: string;
    affiliation: string;
  }[];
  date: Date;
  link: string;
  github: string;
  citation: string;
}[] = [
  {
    name: "Subgroup Mining for Performance Analysis of Regression Models",
    abstract:
      "Machine learning algorithms have shown several advantages compared to humans, namely in terms of the scale of data that can be analysed, delivering high speed and precision. However, it is not always possible to understand how algorithms work. As a result of the complexity of some algorithms, users started to feel the need to ask for explanations, boosting the relevance of Explainable Artificial Intelligence. This field aims to explain and interpret models with the use of specific analytical methods that usually analyse how their predicted values and/or errors behave. While prediction analysis is widely studied, performance analysis has limitations for regression models. This paper proposes a rule-based approach, Error Distribution Rules (EDRs), to uncover atypical error regions, while considering multivariate feature interactions without size restrictions. Extracting EDRs is a form of subgroup mining. EDRs are model agnostic and a drill-down technique to evaluate regression models, which consider multivariate interactions between predictors. EDRs uncover regions of the input space with deviating performance providing an interpretable description of these regions. They can be regarded as a complementary tool to the standard reporting of the expected average predictive performance. Moreover, by providing interpretable descriptions of these specific regions, EDRs allow end users to understand the dangers of using regression tools for some specific cases that fall on these regions, thaṯ is, they improve the accountability of models. The performance of several models from different problems was studied, showing that our proposal allows the analysis of many situations and direct model comparison. In order to facilitate the examination of rules, two visualization tools based on boxplots and density plots were implemented. A network visualization tool is also provided to rapidly check interactions of every feature condition. An additional tool is provided by using a grid of boxplots, where comparison between quartiles of every distribution with a reference is performed. Based on this comparison, an extrapolation of counterfactual examples to regression was also implemented. A set of examples is described, including a setting where regression models performance is compared in detail using EDRs. Specifically, the error difference between two models in a dataset is studied by deriving rules highlighting regions of the input space where model performance difference is unexpected. The application of visual tools is illustrated using EDRs examples derived from public available datasets. Also, case studies illustrating the specialization of subgroups, identification of counter factual subgroups and detecting unanticipated complex models are presented. This paper extends the state of the art by providing a method to derive explanations for model performance instead of explanations for model predictions.",
    journal: "Expert Systems",
    publisher: "Wiley",
    status: "Published",
    authors: [
      {
        name: "João Pimentel",
        link: "https://citoplasme.github.io/",
        affiliation: "University of Minho",
      },
      {
        name: "Paulo J. Azevedo",
        link: "https://www.di.uminho.pt/~pja/",
        affiliation: "University of Minho",
      },
      {
        name: "Luis Torgo",
        link: "https://web.cs.dal.ca/~ltorgo/",
        affiliation: "Dalhousie Univeristy",
      },
    ],
    date: new Date("2022-02-24"),
    link: "",
    github: "https://github.com/citoplasme/edr_paper_results/",
    citation: `@article{https://doi.org/10.1111/exsy.13118,
author = {Pimentel, João and Azevedo, Paulo J. and Torgo, Luís},
title = {Subgroup mining for performance analysis of regression models},
journal = {Expert Systems},
volume = {n/a},
number = {n/a},
pages = {e13118},
keywords = {interpretability, machine learning, performance, regression},
doi = {https://doi.org/10.1111/exsy.13118},
url = {https://onlinelibrary.wiley.com/doi/abs/10.1111/exsy.13118},
eprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1111/exsy.13118},
}
`,
  },
];
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
</script>

<style scoped>
.author__name {
  font-style: italic;
}

.author__name:hover {
  text-decoration: underline;
}

.publication {
  border-left: 1.5px solid var(--second-color);
  padding-left: var(--mb-6);
  position: relative;
  text-align: left;
  padding-bottom: var(--mb-1);
}
@media screen and (max-width: 480px) {
  .publication {
    padding-left: var(--mb-2);
  }
}

.publication:before {
  position: absolute;
  content: "";
  top: 7px;
  left: -0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--first-color);
  border: 2px solid var(--second-color);
}

.publication__name {
  font-size: var(--h3-font-size);
  font-weight: bold;
  margin-bottom: var(--mb-1);
  color: var(--third-color);
}
.publication__authors {
  margin-bottom: var(--mb-1);
}
.publication__text {
  text-align: justify;
  margin-bottom: var(--mb-1);
  font-size: var(--normal-font-size);
}

.publications {
  background-color: var(--sixth-color);
  padding: 1.5rem;
  color: var(--fifth-color);
}

.publication__extras {
  color: var(--second-color);
}

.publication__extra {
  margin-right: var(--mb-2);
}
.publication__extra__icon {
  margin-right: var(--mb-1);
  position: relative;
  top: 0.25rem;
}
.horizontal__rule {
  width: 60%;
  margin: 15px auto;
  border: 1px solid var(--fifth-color);
}
</style>