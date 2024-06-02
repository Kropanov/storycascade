<template>
  <v-text-field class="mt-2" variant="outlined" label="Genres"></v-text-field>

  <v-sheet class="mb-5">
    <v-chip-group selected-class="text-primary" mandatory multiple column>
      <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
    </v-chip-group>
  </v-sheet>

  <v-text-field variant="outlined" label="Tags"></v-text-field>
  <v-sheet class="mb-1">
    <v-chip-group selected-class="text-primary" mandatory multiple column>
      <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const titles = ref(['Work']);
</script>

<style scoped></style>
