<template>
  <footer class="footer">
    <div class="footer__title">
      João Pimentel
    </div>
    <div class="footer__social">
      <a href="mailto:a80874@alunos.uminho.pt" target="_blank" class="footer__icon">
        <email-icon :width="icon_size.value" :height="icon_size.value" :color="'var(--third-color)'"/>
      </a>
      <a href="https://www.linkedin.com/in/joão-pimentel-34074a155/" target="_blank" class="footer__icon">
        <linkedin-icon :width="icon_size.value" :height="icon_size.value" :color="'var(--third-color)'"/>
      </a>
      <a href="https://www.github.com/citoplasme" target="_blank" class="footer__icon">
        <github-icon :width="icon_size.value" :height="icon_size.value" :color="'var(--third-color)'"/>
      </a>
    </div>
    <p class="footer__copy">&#169; João Pimentel - All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import emailIcon from '@/components/icons/email.vue';
import githubIcon from '@/components/icons/github.vue';
import linkedinIcon from '@/components/icons/linkedin.vue';
import { reactive } from "vue";

// Define vue reactive value for icon_size
var icon_size = reactive({
  value: 25
});

//var icon_size: Number = 30;

// Watch changes in window size
window.addEventListener("resize", () => {
  if (window.innerWidth < 968) {
    icon_size.value = 20;
  } else {
    icon_size.value = 25;
  }
});
</script>

<style scoped>
.footer {
  background-color: var(--first-color);
  color: var(--third-color);
  text-align: center;
  font-weight: var(--font-semi);
  padding: var(--mb-4) 0;
}
.footer__title {
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-1);
}
.footer__social {
  margin-bottom: var(--mb-1);
}
.footer__icon {
  position: relative;
  font-size: 1.5rem;
  color: var(--third-color);
  margin: 0 var(--mb-2);
}
.footer__icon:hover {
  position: relative;
}
.footer__icon:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--second-color);
}
.footer__copy {
  font-size: var(--smaller-font-size);
}
</style>