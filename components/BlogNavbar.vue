<template>
  <nav id="site-navigation" class="main-navigation">
    <button class="menu-toggle">Menu</button>
    <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
    <div class="menu-menu-1-container">
      <ul id="menu-menu-1" class="menu" >
        <li v-for="link in links" :key="link.title">
          <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">

const links  = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "contact",
    url: "/contact",
  },
];
</script>

<style scoped>
.router-link-exact-active{
  text-decoration: underline;
  
}
</style>
