<template>
  <h1>{{ $route.params.id }}</h1>
  <h1>id: {{ id }}</h1>
  <h1>name: {{ novel }}</h1>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const id = ref('');
const novel = ref('');

const route = useRoute();

onBeforeMount(() => {
  const splitRoute = route.params.id.split('-');
  id.value = splitRoute[0];
  novel.value = splitRoute[1];
});
</script>

<style scoped></style>
