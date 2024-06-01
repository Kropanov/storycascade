<template>
  <v-form>
    <div class="text-mono text-subtitle-1 mt-2">Create a novel draft using a form</div>
    <v-divider class="mb-5"></v-divider>
    <v-text-field variant="outlined" label="Enter the title of the novel"></v-text-field>

    <v-text-field
      variant="outlined"
      label="Consider other possible titles for the novel, for example, in another language"
    ></v-text-field>

    <v-sheet class="pa-6">
      <v-chip-group selected-class="text-primary" mandatory multiple column>
        <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
      </v-chip-group>
    </v-sheet>

    <div class="text-mono text-subtitle-1 mt-15">Create a novel draft using a form</div>
    <v-divider class="mb-5"></v-divider>
    <v-textarea clearable label="Novel description"></v-textarea>
    <v-autocomplete v-model="values" :items="items" label="Country" prepend-icon="mdi-flag-outline"></v-autocomplete>

    <div class="text-mono text-subtitle-1 mt-10">Create a novel draft using a form</div>
    <v-divider class="mb-5 mt-1"></v-divider>
    <v-text-field variant="outlined" label="genres"></v-text-field>

    <v-sheet class="pa-6">
      <v-chip-group selected-class="text-primary" mandatory multiple column>
        <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
      </v-chip-group>
    </v-sheet>

    <div class="text-mono text-subtitle-1 mt-10">Create a novel draft using a form</div>
    <v-divider class="mb-5"></v-divider>

    <div class="d-flex flex-column align-center mb-3">
      <v-img :aspect-ratio="1" class="bg-white" :src="imageSrc" width="300" height="350" max-height="500" cover>
        <template v-slot:placeholder>
          <v-card class="d-flex align-center justify-center fill-height"> </v-card>
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
    </div>

    <div class="text-mono text-subtitle-1 mt-5">Create a novel draft using a form</div>
    <v-divider class="mb-5"></v-divider>

    <v-text-field variant="outlined" label="tags"></v-text-field>
    <v-sheet class="pa-6 mb-5">
      <v-chip-group selected-class="text-primary" mandatory multiple column>
        <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
      </v-chip-group>
    </v-sheet>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

const imageSrc = ref('');
const titles = ref(['Work', 'Home Improvement', 'Vacation', 'Food', 'Drawers', 'Shopping', 'Art', 'Tech']);
const items = ref(['foo', 'bar', 'fizz', 'buzz']);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  console.log(imageSrc);
};
</script>

<style scoped></style>
