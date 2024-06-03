<template>
  <v-form>
    <v-stepper v-model="step" :items="items" alt-labels>
      <template v-slot:[`item.1`]>
        <NovelFormNaming />
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
            <v-btn class="mr-3" @click="step += 1" :disabled="step === items.length" variant="tonal"> Next </v-btn>
            <v-btn @click="submit" :disabled="step !== items.length" variant="outlined"> Submit </v-btn>
          </div>
        </div>
      </template>
    </v-stepper>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';
import NovelFormNaming from '@/components/NovelFormNaming.vue';
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

const step = ref(1);
const items = ref(['Naming', 'Description and country', 'Genres and tags', 'Novel cover']);

const submit = () => {
  console.log('Submit!');
  console.log(draft);
};
</script>

<style scoped></style>
