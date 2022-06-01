<template>
  <header class="header">
    <nav class="nav bd__grid">
      <div>
        <router-link to="/" class="nav__link">
          <span style="font-size: 1.5rem">João Pimentel</span>
        </router-link>
      </div>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item" v-for="item in items" :key="item.text">
            <router-link :to="item.link" class="nav__link">{{ item.text }}</router-link>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle" @click="show_menu">
        <menu-icon
          :width="icon_size"
          :height="icon_size"
          :color="'var(--third-color)'"
        />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import menuIcon from '@/components/icons/menu.vue';
const icon_size : Number = 20;

// Show the menu when the toggle is clicked
function show_menu() {
  const menu : HTMLElement | null = document.getElementById("nav-menu");
  menu?.classList.toggle("show");
}

const items : {
    text: string;
    link: string;
}[] = [
  {
    text: "About Me",
    link: "/about"
  },
  {
    text: "Publications",
    link: "/publications"
  },
  {
    text: "Projects",
    link: "/projects"
  }
]
</script>

<style scoped>
.bd__grid {
  display: grid;
  margin-left: var(--mb-6);
  margin-right: var(--mb-6);
}

@media screen and (max-width: 767px) {
  .bd__grid {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-color);
}

.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    top: var(--header-height);
    right: -100%;
    width: 80%;
    height: 100%;
    padding: 2rem;
    background-color: var(--first-color);
    transition: 0.5s;
  }
}
.nav__item {
  margin-bottom: var(--mb-4);
  text-transform: uppercase;
}
.nav__link {
  position: relative;
  color: var(--third-color);
}
.nav__link:hover {
  position: relative;
  text-decoration: none;
}
.nav__link:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--second-color);
}
.nav__logo {
  position: relative;
  color: var(--third-color);
}
.nav__logo:hover {
  position: relative;
}
.nav__logo:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 5rem;
  background-color: var(--second-color);
}
.nav__toggle {
  color: var(--third-color);
  font-size: 1.5rem;
  cursor: pointer;
}
/*Active menu*/
.active::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--second-color);
}
/*=== Show menu ===*/
.show {
  right: 0;
}

@media screen and (min-width: 768px) {
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__list {
    display: flex;
    padding-top: 0;
  }
  .nav__item {
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
  .nav__link {
    color: var(--third-color);
  }
}
</style>