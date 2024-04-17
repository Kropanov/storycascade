<template>
  <v-tabs v-model="tab" align-tabs="start">
    <v-tab :value="1">Favorite</v-tab>
    <v-tab :value="2">Novels</v-tab>
    <v-tab :value="3">Settings</v-tab>
  </v-tabs>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref(null);
</script>

<style scoped></style>
