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
import { ref, watch } from 'vue';
import { useFetch } from '@/utils/fetch';

const loading = ref(true);
const { data, error } = useFetch();

watch(
  () => data.value,
  () => {
    if (data && data.value) {
      console.log(data.value);
    }
  },
);

watch(
  () => error.value,
  () => {
    if (error && error.value) {
      console.log(error.value);
    }
  },
);
</script>

<style scoped>
.progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
