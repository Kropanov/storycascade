<template>
  <v-textarea clearable label="Novel description"></v-textarea>
  <v-autocomplete :items="items" label="Country" prepend-icon="mdi-flag-outline"></v-autocomplete>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(['foo', 'bar', 'fizz', 'buzz']);
</script>

<style scoped></style>
