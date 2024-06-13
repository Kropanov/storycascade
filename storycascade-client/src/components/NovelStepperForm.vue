<template>
  <v-form>
    <v-stepper v-model="step" :items="steps" alt-labels>
      <template v-slot:[`item.1`]>
        <v-text-field
          clearable
          v-model="draft.title"
          class="mt-2"
          variant="outlined"
          label="Enter the title of the novel"
        ></v-text-field>

        <v-text-field
          clearable
          variant="outlined"
          v-model="inputValue"
          @keydown="(e) => onKeyDown(e)"
          label="Consider other possible titles for the novel, for example, in another language"
        ></v-text-field>

        <v-sheet class="pa-6" border="dotted lg">
          <h5>Other titles:</h5>
          <v-chip-group selected-class="text-primary" mandatory multiple column>
            <v-chip v-for="title in draft.other_titles" :key="title" :text="title"></v-chip>
          </v-chip-group>
        </v-sheet>
      </template>

      <template v-slot:[`item.2`]>
        <v-textarea v-model="draft.description" clearable label="Novel description"></v-textarea>
        <v-autocomplete
          v-model="draft.country"
          :items="countries"
          label="Country"
          prepend-icon="mdi-flag-outline"
        ></v-autocomplete>
      </template>

      <template v-slot:[`item.3`]>
        <v-autocomplete
          clearable
          chips
          class="mt-2"
          variant="outlined"
          v-model="draft.genres"
          :items="genres"
          label="Genres"
          multiple
        ></v-autocomplete>

        <v-autocomplete
          clearable
          chips
          class="mt-2"
          variant="outlined"
          v-model="draft.tags"
          :items="tags"
          label="Tags"
          multiple
        ></v-autocomplete>
      </template>

      <template v-slot:[`item.4`]>
        <div class="d-flex flex-column align-center">
          <v-img :aspect-ratio="1" :src="draft.image" width="300" height="350" max-height="500">
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

      <template v-slot:actions>
        <div class="d-flex justify-space-between mb-3">
          <v-btn class="ml-4" @click="step -= 1" :disabled="step === 1" variant="text"> Previous </v-btn>
          <div class="mr-5">
            <v-btn class="mr-3" @click="step += 1" :disabled="step === steps.length" variant="tonal"> Next </v-btn>
            <v-btn @click="submit" :disabled="step !== steps.length" variant="outlined"> Submit </v-btn>
          </div>
        </div>
      </template>
    </v-stepper>
  </v-form>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import { useFetch } from '@/utils/fetch';

const draft = ref({
  title: '',
  other_titles: [],
  description: '',
  country: '',
  state: 'Active',
  chapters: 0,
  genres: [],
  tags: [],
  image: '',
});

const inputValue = ref('');

const step = ref(1);
const steps = ref(['Naming', 'Description and country', 'Genres and tags', 'Novel cover']);

const countries = ref([]);
const tags = ref([]);
const genres = ref([]);

onBeforeMount(() => {
  fetch('/countries', getCountries);
  fetch('/genres', getGenres);
  fetch('/tags', getTags);
});

const fetch = (url, fn) => {
  const { data, error } = useFetch(url);

  watch(
    () => error.value,
    () => {
      console.log(error);
    },
  );

  watch(
    () => data.value,
    () => {
      if (data && data.value) {
        fn(data);
      }
    },
  );
};

const getCountries = (data) => {
  countries.value = data.value.map((obj) => obj.name);
};

const getGenres = (data) => {
  genres.value = data.value.map((obj) => obj.name);
};

const getTags = (data) => {
  tags.value = data.value.map((obj) => obj.name);
};

const onKeyDown = (e) => {
  if (e.key === 'Enter' && inputValue.value !== '') {
    draft.value.other_titles.push(inputValue.value);
    inputValue.value = '';
  }
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      draft.value.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submit = () => {
  const { data, error } = useFetch('/novels', {
    method: 'POST',
    body: JSON.stringify(draft.value),
  });

  watch(
    () => error.value,
    () => {
      console.log(error);
    },
  );

  watch(
    () => data.value,
    () => {
      if (data && data.value) {
        console.log(data.value);
      }
    },
  );
};
</script>

<style scoped></style>
