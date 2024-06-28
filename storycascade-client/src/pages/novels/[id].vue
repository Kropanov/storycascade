<template>
  <v-container fluid>
    <v-row justify="center" class="mt-4">
      <v-col class="d-flex border-thin rounded" cols="12" sm="10" md="8" lg="6">
        <div class="mr-3">
          <v-img class="rounded" :src="imageSrc" width="250" height="310" max-height="500" cover>
            <template v-slot:placeholder>
              <v-card class="border-thin d-flex align-center justify-center fill-height">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-card>
            </template>
          </v-img>
          <v-btn class="mt-2" variant="outlined" width="100%">Start reading</v-btn>
        </div>

        <div>
          <v-chip variant="outlined" size="small">ongoing</v-chip>

          <div class="text-h4 mt-1">{{ novel.title }}</div>
          <div class="text-subtitle-2 font-weight-light">{{ novel.other_titles }}</div>

          <div class="d-flex">
            <div class="mr-3 text-green-accent-1">8.33</div>
            <div class="text-subtitle-2">1008</div>
          </div>

          <v-divider class="mb-5" length="100" />

          <div class="text-mono font-weight-thin">Country: {{ novel.country_id }}</div>
          <div class="text-mono font-weight-thin">Author: mung mung kim</div>
          <div class="text-mono font-weight-thin">Translator: Yenmazin g</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/utils/fetch';

const imageSrc = ref('');

const route = useRoute();
const [id] = route.params.id.split('-');

const url = ref('/novels/');
url.value = url.value + id;

const { data, error } = useFetch(url);

const novel = ref({});

watch(
  () => data.value,
  () => {
    if (data && data.value) {
      novel.value = data.value;
      console.log(novel.value);
      imageSrc.value = data.value.image.res;
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
