<template>
  <div class="grid portfoliogrid">
    <div class="wrapper" v-if="posts.length > 0">
      <BlogList v-for="post in paginatedPosts" :key="post.id" :post="post" />
      <!-- .grid -->

      <nav class="pagination">
        <a
          class="prev page-numbers"
          href="#"
          @click="goToPrevPage"
          v-if="currentPage > 1"
        >
          Prev «
        </a>
        <a
          :class="['page-numbers', { current: currentPage === 1 }]"
          href="#"
          @click="goToPage(1)"
        >
          1
        </a>
        <a
          class="page-numbers"
          href="#"
          @click="goToPage(2)"
          v-if="currentPage < 2 && totalPages > 1"
        >
          2
        </a>
        <span v-if="currentPage >= 2" class="page-numbers current">
          {{ currentPage }}
        </span>
        <a
          class="next page-numbers"
          href="#"
          @click="goToNextPage"
          v-if="currentPage < totalPages"
        >
          Next »
        </a>
      </nav>
      <br />
    </div>
    <BlogLoader v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from "axios";
import { Post } from '@/types/post';


const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
  );
  return response.data;
};

const posts = ref<Post[]>([]);
const itemsPerPage = 10;
const currentPage = ref(1);

// Вычисляемое свойство для пагинации
const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return posts.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage));

// Загрузка всех постов при монтировании компонента
onMounted(async () => {
  try {
    const data = await fetchPosts();
    posts.value = data;
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
  }
});

// Функция для перехода на определенную страницу
const goToPage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
};

// Функция для перехода на следующую страницу
const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};
// Функция для перехода на предыдущую страницу
const goToPrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};
</script>
