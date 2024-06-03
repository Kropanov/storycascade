<template>
  <v-text-field ref="input" class="mt-2" variant="outlined" label="Enter the title of the novel"></v-text-field>

  <v-text-field
    variant="outlined"
    label="Consider other possible titles for the novel, for example, in another language"
  ></v-text-field>

  <v-sheet class="pa-6" border="dotted lg">
    <v-chip-group selected-class="text-primary" mandatory multiple column>
      <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const input = ref(null);

onMounted(() => {
  input.value.focus();
});

const titles = ref([
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]);
</script>

<style scoped></style>
