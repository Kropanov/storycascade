<template>
  <v-snackbar
    variant="elevated"
    v-model="alert.open"
    :color="alert.color"
    :timeout="alert.timeout"
    rounded="10"
    transition="v-snackbar-transition"
    location="right bottom"
  >
    {{ alert.text }}

    <template v-slot:actions>
      <v-btn variant="text" @click="alert.open = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';

const alert = ref({
  open: false,
  timeout: 4000,
  color: 'green',
  text: 'My timeout is set to 4000',
});
</script>

<style scoped></style>
