<template>
  <v-text-field
    label="Search"
    variant="solo"
    :loading="loading ? 'surface-light' : false"
    append-inner-icon="mdi-magnify"
    @click:append-inner="onClick"
    onchange=""
  ></v-text-field>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
function onClick() {
  loading.value = true;
}
</script>

<style scoped></style>
