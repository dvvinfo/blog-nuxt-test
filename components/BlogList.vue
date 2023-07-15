<template>
  <article class="post">
    <header class="entry-header">
      <h1 class="entry-title">
        <router-link :to="`/blog/${post.id}`"> {{post.title}}</router-link>
      </h1>
      <div class="entry-meta">
        <span class="posted-on"
          ><time class="entry-date published"> {{post.createdAt}} </time></span
        >
      </div>
      <div class="entry-thumbnail">
        <img :src="post.image" alt="" />
      </div>
    </header>
    <div class="entry-summary">
      <p>{{post.preview}}</p>
    </div>
    <footer class="entry-footer">
      <span class="cat-links">
        Posted in <a href="#" rel="category tag">audio</a>,
        <a href="#" rel="category tag">embed</a>,
        <a href="#" rel="category tag">media</a>
      </span>
    </footer>
  </article>
</template>

<script setup lang="ts">
interface Post {
id: string;
title: string;
createdAt: string;
preview: string;
image: string;
description: string;
}
defineProps(['post'])

</script>

<style scoped>
.post{
  width: 100%;
}
</style>