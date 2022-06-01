<template>
  <div class="sidebar">
    <span>Projects</span>
  </div>

  <div class="content">
    <div
      v-for="(project, project_index) in projects"
      :key="project.name"
      :class="[
        'project',
        project_index + 1 < projects.length ? 'project__margin' : null,
      ]"
    >
      <div class="project__name">
        <a :href="project.link" target="_blank">{{ project.name }}</a>
      </div>
      <div class="project__technologies">
        <span class="project__technology">
          <b>Technologies: </b>
          <span
            v-for="(technology, index) in project.technologies"
            :key="index"
          >
            <dynamicComponent
              :name="technology.file"
              :width="icon_size"
              :height="icon_size"
              :color="'var(--fourth-color)'"
              class="project__technology__icon"
            ></dynamicComponent>
            {{ technology.text }}
            <span v-if="index + 1 < project.technologies.length">, </span>
          </span>
        </span>
      </div>
      <div class="project__description">
        <b>Description: </b>
        {{ project.description }}
      </div>
      <div class="project__extras">
        <span class="project__extra" v-if="project.github !== null">
          <github-icon
            :width="icon_size"
            :height="icon_size"
            :color="'var(--second-color)'"
            class="project__extra__icon"
          />
          <a :href="project.github" target="_blank">Github Repository</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import githubIcon from "@/components/icons/github.vue";
import dynamicComponent from "@/components/dynamic_component.vue";
const icon_size: Number = 20;
const projects: {
  name: string;
  description: string;
  link: string;
  github: string | null;
  technologies: {
    text: string;
    file: string;
  }[];
}[] = [
  {
    name: "Nitrolimit",
    description:
      "Nitrogen is a fundamental element for living and its biogeochemical cycle is almost entirely microbial mediated. Covering all major steps of this cycle across different terrestrial habitats in Antarctica Dry Valleys (DVs), this project will enable to outline the limits of biogeochemical activity of resident microbial communities as well as to understand in what way different N transformations are established according to the influenced abiotic factors. It will represent an important breakthrough regarding ecosystem functioning, giving new insights on the ecological role of microorganisms in the regulation of N cycle in one of the most extreme environments on Earth. Combining different methodologies (biogeochemical / molecular) and crossing different types of data (genomic / transcriptomic / biogeochemical) the results of this proposal will allow to trace the major ecological networks that are behind DVs ecosystem and to screen the energy and matter fluxes across the ecosystem.",
    link: "https://www2.ciimar.up.pt/projects.php?id=84",
    github: null,
    technologies: [
      {
        text: "R Programming Language",
        file: "r",
      },
      {
        text: "Shiny Web App",
        file: "shiny",
      },
    ],
  },
  {
    name: "Explainable Artificial Intelligence",
    description:
      "This research line involves studying methods for helping end-users to better understand complex and frequently black-box maching learning models. Our work is currently focused on trying to explain the reasons/conditions leading to prediction errors to serve as warnings to the use of the models for critical decisions.",
    link: "https://www.github.com/citoplasme/MScDissertation/",
    github: "https://www.github.com/citoplasme/MScDissertation/",
    technologies: [
      {
        text: "R Programming Language",
        file: "r",
      },
      {
        text: "GGPlot2",
        file: "ggplot2",
      },
    ],
  },
  {
    name: "CLAV",
    description:
      "CLAV is a platform that provides tools for classification and evaluation of Portuguese public information. It acts as a facilitator instrument to prepare classification plans and selection tables of public administration, public companies and other entities.",
    link: "https://clav.dglab.gov.pt",
    github: "https://github.com/jcramalho/CLAV2019",
    technologies: [
      {
        text: "NodeJS",
        file: "nodejs",
      },
      {
        text: "VueJS",
        file: "vuejs",
      },
      {
        text: "MongoDB",
        file: "mongodb",
      },
      {
        text: "GraphDB",
        file: "graphdb",
      },
    ],
  },
];
</script>

<style scoped>
.project {
  background-color: var(--sixth-color);
  padding: 1.5rem;
  color: var(--fifth-color);
  text-align: left;
}

.project__margin {
  margin-bottom: var(--mb-4);
}
.project__name {
  font-size: var(--h3-font-size);
  font-weight: bold;
  margin-bottom: var(--mb-1);
  color: var(--third-color);
}
.project__technologies {
  margin-bottom: var(--mb-1);
}
.project__technology__icon {
  margin-right: var(--mb-0);
  position: relative;
  top: 0.25rem;
}
.project__description {
  text-align: justify;
  margin-bottom: var(--mb-2);
}
.project__extras {
  color: var(--second-color);
}

.project__extra {
  margin-right: var(--mb-2);
}
.project__extra__icon {
  margin-right: var(--mb-1);
  position: relative;
  top: 0.25rem;
}
</style>