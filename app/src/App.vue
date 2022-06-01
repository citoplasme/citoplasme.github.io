<template>
  <custom-header />
  <main>
    <section class="section">
      <router-view />
    </section>
  </main>
  <custom-footer v-if="$route.name != 'home'" />
</template>

<script setup lang="ts">
import CustomHeader from "@/components/header.vue";
import CustomFooter from "@/components/footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

:root {
  --header-height: 3rem;
  --font-semi: 600;
  --first-color: rgb(39, 39, 39);
  --second-color: rgb(162, 252, 122);
  --third-color: rgb(255, 255, 255);
  --fourth-color: rgb(246, 255, 84);
  --fifth-color: rgb(170, 170, 170);
  --sixth-color: rgba(0, 0, 0, 0.3);
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.85rem;
  --smaller-font-size: 0.75rem;
  --mb-0: 0.25rem;
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  --z-back: -10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: 0.875rem;
  }
}

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--third-color);
  background-color: var(--first-color);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

h1,
h2,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: var(--second-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

::selection {
  color: var(--fourth-color);
}

/* Size */
::-webkit-scrollbar {
  -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
  width: 8px;
}

::-webkit-scrollbar:horizontal {
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--first-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--second-color);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--fourth-color);
}

.section {
  padding-top: 5rem;
  padding-bottom: 0;
}

.sidebar {
  position: absolute;
  white-space: nowrap;
  width: 0;
  left: 4.9rem;
  font-weight: var(--font-semi);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  top: 7.4rem;
}

.sidebar span {
  display: block;
  float: right;
}

@media screen and (max-width: 1195px) {
  .sidebar {
    display: none;
  }
}

.content {
  max-width: 1024px;
  text-align: center;
  margin: 0 auto;
  padding: 0 var(--mb-4);
}
@media screen and (max-width: 480px) {
  .content {
    padding: 0 var(--mb-1);
  }
}

.section__text {
  text-align: justify;
  margin-bottom: var(--mb-2);
  font-size: var(--normal-font-size);
}

.hashtag {
  color: var(--second-color);
  font-size: var(--normal-font-size);
  margin-right: var(--mb-1);
}
</style>
