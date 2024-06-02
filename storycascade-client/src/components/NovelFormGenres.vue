<template>
  <v-text-field class="mt-2" variant="outlined" label="Genres"></v-text-field>

  <v-sheet class="pa-6">
    <v-chip-group selected-class="text-primary" mandatory multiple column>
      <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
    </v-chip-group>
  </v-sheet>

  <v-divider class="mb-5"></v-divider>

  <v-text-field variant="outlined" label="Tags"></v-text-field>
  <v-sheet class="pa-6 mb-5">
    <v-chip-group selected-class="text-primary" mandatory multiple column>
      <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const titles = ref(['Work', 'Home Improvement', 'Vacation', 'Food', 'Drawers', 'Shopping', 'Art', 'Tech']);
</script>

<style scoped></style>
