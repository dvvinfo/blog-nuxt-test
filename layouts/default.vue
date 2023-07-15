<template>
  <div id="page">
    <div class="container">
      <BlogHeader />
      <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
          <main id="main" class="site-main">
            <slot />
          </main>
        </div>
      </div>
    </div>
    <BlogFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
