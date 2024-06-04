<template>
  <v-form>
    <v-stepper v-model="step" :items="steps" alt-labels>
      <template v-slot:[`item.1`]>
        <v-text-field
          clearable
          v-model="draft.title"
          ref="inputRef"
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
        <NovelFormDesc />
      </template>

      <template v-slot:[`item.3`]>
        <NovelFormGenres />
      </template>

      <template v-slot:[`item.4`]>
        <NovelFormCover />
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
import { onMounted, ref } from 'vue';
import NovelFormDesc from '@/components/NovelFormDesc.vue';
import NovelFormGenres from '@/components/NovelFormGenres.vue';
import NovelFormCover from '@/components/NovelFormCover.vue';

const draft = ref({
  title: '',
  other_titles: [],
  descriptions: '',
  country: '',
  genres: [],
  tags: [],
  image: '',
});

const inputRef = ref(null);
const inputValue = ref('');

const step = ref(1);
const steps = ref(['Naming', 'Description and country', 'Genres and tags', 'Novel cover']);

onMounted(() => {
  inputRef.value.focus();
});

const onKeyDown = (e) => {
  if (e.key === 'Enter' && inputValue.value !== '') {
    draft.value.other_titles.push(inputValue.value);
    inputValue.value = '';
  }
};

const submit = () => {
  console.log('Submit!');
  console.log(draft.value);
};
</script>

<style scoped></style>
