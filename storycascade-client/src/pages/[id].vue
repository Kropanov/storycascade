<template>
  <div>
    <v-progress-circular
      class="progress-circular"
      :size="50"
      color="primary"
      v-if="loading"
      indeterminate
    ></v-progress-circular>
    <div v-else>Hi</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>

<style scoped>
.progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
