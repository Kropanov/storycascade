<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row v-if="loading">
        <v-col v-for="n in 6" :key="n" cols="12" xxl="1" xl="2" lg="2" md="4" sm="6">
          <v-skeleton-loader height="250" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="card in cards" :key="card.title" cols="12" xxl="1" xl="2" lg="2" md="4" sm="6">
          <NovelListItem :card="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import NovelListItem from '@/components/NovelListItem.vue';
import { useFetch } from '@/util/fetch';

const cards = ref([]);
const loading = ref(false);
const url = ref('/test');

loading.value = true;

const { data } = useFetch(url);

watchEffect(() => {
  if (data.value !== null) {
    cards.value = data.value;
    loading.value = false;
  }
});
</script>

<style scoped></style>
