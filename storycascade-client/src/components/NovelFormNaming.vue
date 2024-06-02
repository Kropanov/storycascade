<template>
  <v-text-field class="mt-2" variant="outlined" label="Enter the title of the novel"></v-text-field>

  <v-text-field
    variant="outlined"
    label="Consider other possible titles for the novel, for example, in another language"
  ></v-text-field>

  <v-sheet class="pa-6">
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
