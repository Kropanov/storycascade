<template>
  <v-autocomplete
    clearable
    chips
    class="mt-2"
    variant="outlined"
    v-model="values"
    :items="titles"
    label="Genres"
    multiple
  ></v-autocomplete>

  <v-autocomplete
    clearable
    chips
    class="mt-2"
    variant="outlined"
    v-model="values"
    :items="titles"
    label="Tags"
    multiple
  ></v-autocomplete>
</template>

<script setup>
import { ref } from 'vue';

const values = ref(null);
const titles = ref([
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming1',
  'California2',
  'Colorado3',
  'Florida4',
  'Georgia5',
  'Texas6',
  'Wyoming7',
]);
</script>

<style scoped></style>
