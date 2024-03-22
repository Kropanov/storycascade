<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col lg="10" xl="8">
        <v-text-field
          label="Search"
          variant="solo"
          :loading="loading"
          append-inner-icon="mdi-magnify"
          @click:append-inner="onClick"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

function onClick() {
  loading.value = true;
}
</script>

<style scoped></style>
