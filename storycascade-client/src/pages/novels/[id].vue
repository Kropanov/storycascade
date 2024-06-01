<template>
  <v-container>
    <v-img :aspect-ratio="1" class="bg-white" :src="imageSrc" width="300" height="350" max-height="500" cover>
      <template v-slot:placeholder>
        <v-card class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </v-card>
      </template>
    </v-img>

    <v-file-input
      label="File input"
      class="w-33 mt-3"
      show-size
      counter
      variant="outlined"
      accept="image/*"
      @change="onFileChange"
    ></v-file-input>

    <h1>{{ $route.params.id }}</h1>
    <h1>id: {{ id }}</h1>
    <h1>name: {{ novel }}</h1>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/utils/fetch';

const route = useRoute();
const url = ref('/novels/');
const imageSrc = ref('');

const [id, novel] = route.params.id.split('-');
url.value = url.value + id;

const { data, error } = useFetch(url);

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

<style scoped></style>
