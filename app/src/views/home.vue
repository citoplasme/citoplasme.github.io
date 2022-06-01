<template>
  <div class="content">
    <div class="home">
      <div class="vertical__centered">
        <div class="home__contacts">
          <a href="#" target="_blank" class="contact__icon">
            <google-scholar-icon
              :width="icon_size.value"
              :height="icon_size.value"
              :color="'var(--third-color)'"
            />
          </a>
          <a
            href="https://orcid.org/0000-0002-5794-3451"
            target="_blank"
            class="contact__icon"
          >
            <orcid-icon
              :width="icon_size.value"
              :height="icon_size.value"
              :color="'var(--third-color)'"
            />
          </a>
          <span class="vertical__divider">|</span>
          <a
            href="mailto:a80874@alunos.uminho.pt"
            target="_blank"
            class="contact__icon"
          >
            <email-icon
              :width="icon_size.value"
              :height="icon_size.value"
              :color="'var(--third-color)'"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joão-pimentel-34074a155/"
            target="_blank"
            class="contact__icon"
          >
            <linkedin-icon
              :width="icon_size.value"
              :height="icon_size.value"
              :color="'var(--third-color)'"
            />
          </a>
          <a
            href="https://www.github.com/citoplasme"
            target="_blank"
            class="contact__icon"
          >
            <github-icon
              :width="icon_size.value"
              :height="icon_size.value"
              :color="'var(--third-color)'"
            />
          </a>
        </div>
        <h1 class="home__title">João Pimentel</h1>
        <div class="home__divider" />
        <div class="home__subtitle">MSc in Software Engineering</div>
        <div class="home__extra">
          <span class="hashtag">#datamining</span>
          <span class="hashtag">#datascience</span>
          <span class="hashtag">#software</span>
          <span class="hashtag">#statistics</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emailIcon from "@/components/icons/email.vue";
import githubIcon from "@/components/icons/github.vue";
import googleScholarIcon from "@/components/icons/google_scholar.vue";
import linkedinIcon from "@/components/icons/linkedin.vue";
import orcidIcon from "@/components/icons/orcid.vue";

import { reactive } from "vue";

// Define vue reactive value for icon_size
var icon_size = reactive({
  value: 30,
});

// Watch changes in window size
window.addEventListener("resize", () => {
  if (window.innerWidth < 968) {
    icon_size.value = 20;
  } else {
    icon_size.value = 30;
  }
});
</script>

<style scoped>
.home {
  position: relative;
  text-align: left;
  margin-top: var(--mb-6);
  height: 63vh;
}
@media screen and (max-width: 768px) {
  .home {
    height: 63vh;
  }
}
.vertical__centered {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.home__title {
  font-size: var(--big-font-size);
}
.home__subtitle {
  font-size: var(--h2-font-size);
  margin-top: var(--mb-4);
}
.home__divider {
  position: absolute;
  margin-top: 0;
  margin-bottom: var(--mb-2);
  height: 0.3rem;
  width: 9rem;
  background: var(--second-color);
}
.vertical__divider {
  font-size: var(--h2-font-size);
  position: relative;
  top: -0.2rem;
  margin: 0 1rem;
}
.home__extra {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: var(--mb-1);
}

.contact__icon {
  position: relative;
  font-size: 1.5rem;
  color: var(--third-color);
  margin: 0 var(--mb-1);
}

.contact__icon:hover {
  position: relative;
}
.contact__icon:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--second-color);
}
</style>