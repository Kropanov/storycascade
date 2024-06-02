<template>
  <v-form>
    <v-stepper v-model="step" :items="items1" alt-labels>
      <template v-slot:[`item.1`]> </template>

      <template v-slot:[`item.2`]> </template>

      <template v-slot:[`item.3`]> </template>

      <template v-slot:[`item.4`]> </template>
    </v-stepper>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

// const draft = ref({
//   title: '',
//   other_titles: [],
//   descriptions: '',
//   country: '',
//   genres: [],
//   tags: [],
//   image: '',
// });
//
// console.log(draft);

const items1 = ref(['Naming', 'Description and country', 'Genres and tags', 'Novel cover']);
const step = ref(1);
</script>

<style scoped></style>
