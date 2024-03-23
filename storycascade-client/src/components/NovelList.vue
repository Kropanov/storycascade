<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="12" xxl="1" xl="2" lg="2" md="4" sm="6">
          <NovelListItem :card="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import NovelListItem from '@/components/NovelListItem.vue';

const initValue = [
  {
    title: 'Second World',
    subtitle: 'Games',
    src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
  },
  {
    title: 'Let Me Game in Peace',
    subtitle: 'Urban',
    src: 'https://cdn.vuetifyjs.com/images/cards/three.jpg',
  },
  {
    title: 'My Goalkeeping System',
    subtitle: 'Sports',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
  },
  {
    title: 'Rise of the Horde',
    subtitle: 'War',
    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
  },
  {
    title: 'Joy of Life',
    subtitle: 'History',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
  },
  {
    title: 'Plague Doctor',
    subtitle: 'Horror',
    src: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
  },
];

const cards = ref(initValue);
</script>

<style scoped></style>
