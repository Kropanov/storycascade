<template>
  <h1>{{ $route.params.id }}</h1>
  <h1>id: {{ id }}</h1>
  <h1>name: {{ novel }}</h1>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/utils/fetch';

const route = useRoute();
const url = ref('/novels/');

const [id, novel] = route.params.id.split('-');
url.value = url.value + id;

const { data, error } = useFetch(url);

watch(
  () => data.value,
  () => {
    if (data && data.value) {
      console.log(data.value);
    }
  },
);

watch(
  () => error.value,
  () => {
    if (error && error.value) {
      console.log(error.value);
    }
  },
);
</script>

<style scoped></style>
