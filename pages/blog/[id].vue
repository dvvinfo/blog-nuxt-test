<template>
  <Head>
    <Title> {{ post.title }}</Title>
  </Head>
  <BlogPost :post="post" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from "axios";
import { Post } from '@/types/post';
const { id } = useRoute().params;
const url = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`;
const post = ref<Post[]>([]);

// const { data: post } = await useFetch(url);
const fetchPost = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(url);
  return response.data;
};
onMounted(async () => {
  try {
    const data = await fetchPost();
    post.value = data;
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
  }
});
definePageMeta({
  layout: "blogs",
});
</script>

<style scoped></style>
