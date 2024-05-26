<template>
  <v-btn class="ma-3" text="Create draft" variant="outlined" size="large" @click="onDraftClick"></v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onDraftClick = () => {
  router.push({ path: 'projects/draft' });
};
</script>

<style scoped></style>
