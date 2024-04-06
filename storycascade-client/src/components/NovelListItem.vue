<template>
  <v-card>
    <v-img
      :src="props.card.image"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
      cover
    >
      <v-card-title class="text-white" v-text="props.card.title"></v-card-title>
      <v-card-subtitle class="text-white" v-text="props.card.genre"></v-card-subtitle>
    </v-img>
  </v-card>
</template>

<script setup>
const props = defineProps(['card']);
</script>

<style scoped></style>
