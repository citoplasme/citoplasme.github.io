<template>
  <div class="sidebar">
    <span>About Me</span>
  </div>

  <div class="content">
    <div class="section about">
      <p class="section__text">
        I have a Bachelor's and a Master's degrees from the
        <a href="https://www.eng.uminho.pt/pt">Faculty of Engineering</a> of the
        <a href="https://www.uminho.pt/">University of Minho</a> in Software
        Engineering. I have specialized in both data science and web
        development. In fact, I have worked on a number of projects in both
        fields, academically and professionally.
      </p>

      <p class="section__text">
        Starting on January 2023, I will be a Computer Science PhD student under
        the supervision of Professor
        <a href="https://web.cs.dal.ca/~ltorgo/">Luís Torgo</a> at
        <a href="https://www.dal.ca">Dalhousie University</a>.
      </p>

      <p class="section__text">
        I have worked as a research assistant at
        <a href="https://www.inesctec.pt">INESCTEC</a> within the scope of the
        <a href="https://www2.ciimar.up.pt/projects.php?id=84">Nitrolimit</a>
        project alongside Professors
        <a href="https://web.cs.dal.ca/~ltorgo/">Luís Torgo</a> and
        <a href="https://www2.ciimar.up.pt/team.php?id=85">Catarina Magalhães</a
        >. After that, I have also worked as a full stack sofware developer at
        one of biggest insurance brokers in Portugal, where I was responsible
        for the development of a web application to analyze the insurance claims
        of the company's clients.
      </p>

      <p class="section__text">
        My main interests are in the field of data science, specifically in
        Machine and Deep learning, forecasting, and spatiotemporal data
        analysis. Moreover, I am a strong supporter of the open-source and
        open-science movements. As a result, I try to make all of my work fully
        available for the sake of reproducibility.
      </p>

      <p class="section__text">
        If you have any desire to collaborate, contact me at
        <a href="mailto:joao.pimentel@dal.ca">joao.pimentel@dal.ca</a>.
      </p>
    </div>

    <div class="degrees">
      <h1 class="degrees__title">Education</h1>
      <div class="degree" v-for="ed in education" :key="ed.degree">
        <div class="degree__name">
          <a :href="ed.link">{{ ed.degree }}</a>
        </div>
        <div class="degree__field">
          {{ ed.field }}
        </div>
        <div class="degree__duration">{{ ed.from }} - {{ ed.to }}</div>
        <div class="degree__description">
          <p>{{ ed.faculty }}, {{ ed.institution }}, {{ ed.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const education: {
  institution: string;
  faculty: string;
  country: string;
  degree: string;
  field: string;
  from: number;
  to: number;
  link: string;
}[] = [
  {
    institution: "Dalhousie University",
    faculty: "Faculty of Computer Science",
    country: "Canada",
    degree: "Doctorate Degree",
    field: "Computer Science",
    from: 2023,
    to: 2027,
    link: "https://www.dal.ca/academics/programs/graduate/computer-science/program-details/phd-program0.html",
  },
  {
    institution: "University of Minho",
    faculty: "Faculty of Engineering",
    country: "Portugal",
    degree: "Master's Degree",
    field: "Software Engineering",
    from: 2019,
    to: 2021,
    link: "https://www.uminho.pt/en/education/educational-offer/_layouts/15/uminho.portalum.ui/pages/catalogocursodetail.aspx?itemid=2135&catid=7",
  },
  {
    institution: "University of Minho",
    faculty: "Faculty of Engineering",
    country: "Portugal",
    degree: "Bachelor's Degree",
    field: "Software Engineering",
    from: 2016,
    to: 2019,
    link: "https://www.uminho.pt/en/education/educational-offer/_layouts/15/uminho.portalum.ui/pages/catalogocursodetail.aspx?itemid=2135&catid=7",
  },
  {
    institution: "Dom Diogo de Sousa School",
    faculty: "Department of Science and Technology",
    country: "Portugal",
    degree: "High school Diploma",
    field: "Science and Technology",
    from: 2013,
    to: 2016,
    link: "https://cdds.pt",
  },
];
</script>

<style scoped>
.about {
  background-color: var(--sixth-color);
  padding: 1.5rem;
  color: var(--fifth-color);
  margin-bottom: 3rem;
}
.extras {
  background-color: var(--sixth-color);
  padding: 1.5rem;
  color: var(--fifth-color);
  margin-top: 3rem;
}
table {
  display: table;
  width: 100%;
}
tr {
  display: table-row;
}
td {
  width: 50%;
  display: table-cell;
  vertical-align: top;
  padding: 0.5em;
}
@media only screen and (max-width: 600px) {
  td {
    width: 100%;
    display: block;
  }
}
.degrees {
  background-color: var(--sixth-color);
  padding: 1.5rem;
  color: var(--fifth-color);
}
.degrees__title {
  font-size: var(--h2-font-size);
  color: var(--third-color);
  margin-bottom: var(--mb-2);
  display: inline-block;
  position: relative;
}
.degrees__title:after {
  content: "";
  position: absolute;
  width: 4rem;
  height: 0.2rem;
  bottom: 0;
  left: 0;
  border-bottom: 0.2rem solid var(--second-color);
}

.degree {
  border-left: 1.5px solid var(--second-color);
  padding-left: var(--mb-6);
  position: relative;
  text-align: left;
  padding-bottom: var(--mb-1);
}
@media screen and (max-width: 480px) {
  .degree {
    padding-left: var(--mb-2);
  }
}
.degree:before {
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
.degree__name {
  font-size: var(--h3-font-size);
  font-weight: bold;
  color: var(--third-color);
}
.degree__description {
  text-align: justify;
  margin-bottom: 0;
}
</style>