<template>
  <v-container fluid>
    <v-row justify="center" class="mt-4">
      <v-col class="d-flex" cols="12" sm="10" md="8" lg="6">
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

        <div class="d-flex flex-column w-100">
          <v-skeleton-loader
            class="mb-3"
            :elevation="24"
            width="100%"
            v-if="loading"
            type="article"
          ></v-skeleton-loader>

          <div v-else>
            <v-chip variant="outlined" size="small">ongoing</v-chip>

            <div class="text-h4 mt-1">{{ novel.title }}</div>
            <v-chip-group>
              <v-chip
                v-for="title in novel.other_titles.split(',')"
                :key="title"
                class="text-subtitle-2 font-weight-light"
              >
                {{ title }}
              </v-chip>
            </v-chip-group>

            <NovelRating />
            <v-divider class="mb-5" length="100" />
          </div>

          <v-skeleton-loader
            class="mb-3"
            :elevation="24"
            width="100%"
            v-if="loading"
            type="paragraph"
          ></v-skeleton-loader>

          <div v-else>
            <div v-if="novel.country !== undefined" class="text-body-2 font-weight-regular">
              Country:
              <v-tooltip :text="novel.country[0].name" top>
                <template v-slot:activator="{ props }">
                  <span v-bind="props" :class="[countryCode]"></span>
                </template>
              </v-tooltip>
            </div>
            <div class="text-body-2 font-weight-regular">Author: mung mung kim</div>
            <div class="text-body-2 font-weight-regular">Translator: Yenmazin g</div>
          </div>

          <v-skeleton-loader
            class="mb-3"
            :elevation="24"
            width="100%"
            v-if="loading"
            type="paragraph"
          ></v-skeleton-loader>

          <div v-else>
            <div v-if="!novel.description" class="text-body-2 font-weight-regular">No description</div>
            <div v-else class="d-flex mt-3">
              <v-divider class="mr-2 border-opacity-100" color="info" vertical></v-divider>
              <div :class="{ expanded: isExpanded }" class="text-body-2 description">{{ novel.description }}</div>
            </div>
            <div @click="isExpanded = !isExpanded" class="text-caption cursor-pointer">
              {{ isExpanded ? 'show less' : 'show more' }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="d-flex" cols="12" sm="10" md="8" lg="6">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab text="About" value="about"></v-tab>
          <v-tab text="Chapters" value="chapters"></v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="d-flex" cols="12" sm="10" md="8" lg="6">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="about">
            <div v-if="novel && !loading" class="d-flex">
              <v-divider class="mr-2 ml-2 border-opacity-100" color="warning" vertical></v-divider>
              <div>
                <div class="text-body-2">
                  Chapters:
                  <span class="text-body-2">{{ novel.chapters }}</span>
                </div>
                <div class="text-body-2">Date of release: {{ new Date(novel.created_at).getFullYear() }}</div>
              </div>
            </div>

            <v-chip-group class="mt-3">
              <v-chip v-for="genre in novel.genres" :key="genre.name" variant="outlined"> {{ genre.name }} </v-chip>
            </v-chip-group>
          </v-tabs-window-item>
          <v-tabs-window-item value="chapters"> Chapters </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/utils/fetch';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import NovelRating from '@/components/NovelRating.vue';

const imageSrc = ref('');

const route = useRoute();
const [id] = route.params.id.split('-');

const url = ref('/novels/');
url.value = url.value + id;

const { data, error } = useFetch(url);

const novel = ref({});
const tab = ref('option-1');
const countryCode = ref('');

const isExpanded = ref(false);
const loading = ref(true);

watch(
  () => data.value,
  () => {
    if (data && data.value) {
      novel.value = data.value;
      console.log(novel.value);
      countryCode.value = 'fi fi-' + novel.value.country[0].code.toLowerCase();
      imageSrc.value = data.value.image;
      loading.value = false;
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

<style scoped>
.description {
  overflow: hidden;
  height: 120px;
}

.description.expanded {
  white-space: normal;
  height: auto;
}
</style>
