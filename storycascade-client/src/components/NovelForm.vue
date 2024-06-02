<template>
  <v-form>
    <v-stepper v-model="step" :items="items1" alt-labels>
      <template v-slot:[`item.1`]>
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
      </template>

      <template v-slot:[`item.2`]>
        <v-textarea clearable label="Novel description" max-rows="20"></v-textarea>
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Country"
          prepend-icon="mdi-flag-outline"
        ></v-autocomplete>
      </template>

      <template v-slot:[`item.3`]>
        <v-text-field variant="outlined" label="genres"></v-text-field>

        <v-sheet class="pa-6">
          <v-chip-group selected-class="text-primary" mandatory multiple column>
            <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
          </v-chip-group>
        </v-sheet>

        <div class="text-mono text-subtitle-1 mt-5">Create a novel draft using a form</div>
        <v-divider class="mb-5"></v-divider>

        <v-text-field variant="outlined" label="tags"></v-text-field>
        <v-sheet class="pa-6 mb-5">
          <v-chip-group selected-class="text-primary" mandatory multiple column>
            <v-chip v-for="title in titles" :key="title" :text="title"></v-chip>
          </v-chip-group>
        </v-sheet>
      </template>

      <template v-slot:[`item.4`]>
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
    </v-stepper>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

const imageSrc = ref('');
const titles = ref(['Work', 'Home Improvement', 'Vacation', 'Food', 'Drawers', 'Shopping', 'Art', 'Tech']);
const items = ref(['foo', 'bar', 'fizz', 'buzz']);

const items1 = ref(['Naming', 'Description and country', 'Genres and tags', 'Novel cover']);
const step = ref(1);

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
