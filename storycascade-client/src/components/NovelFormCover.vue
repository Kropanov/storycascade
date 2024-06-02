<template>
  <div class="d-flex flex-column align-center">
    <v-img :aspect-ratio="1" :src="imageSrc" width="300" height="350" max-height="500">
      <template v-slot:placeholder>
        <v-card border="thin" class="d-flex align-center justify-center fill-height" color="surface"> </v-card>
      </template>
    </v-img>

    <v-file-input
      label="Choose novel art cover"
      class="w-33 mt-3"
      show-size
      counter
      variant="outlined"
      accept="image/*"
      @change="onFileChange"
    ></v-file-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageSrc = ref('');

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped></style>
