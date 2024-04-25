<template>
  <div class="d-flex justify-center mb-3">
    <v-card variant="elevated" width="100%" class="mr-2">
      <v-img
        cover
        height="256"
        max-width="256"
        class="rounded-circle mx-auto mt-4"
        aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      />
      <v-card-title class="text-h5 text-md-h5 text-lg-h4">{{ props.user.username }}</v-card-title>
      <v-card-text> Description </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(['user']);
</script>

<style scoped></style>
