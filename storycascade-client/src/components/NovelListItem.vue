<template>
  <v-card>
    <v-img
      :src="novel.image"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
      cover
    >
      <v-card-title class="text-white" v-text="props.novel.title"></v-card-title>
      <v-card-subtitle class="text-white mb-2" v-text="props.novel.chapters"></v-card-subtitle>
    </v-img>
  </v-card>
</template>

<script setup>
const props = defineProps(['novel']);
console.log(props.novel);
</script>

<style scoped></style>
