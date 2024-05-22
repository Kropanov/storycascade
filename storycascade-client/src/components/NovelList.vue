<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row v-if="loading">
        <v-col v-for="n in 6" :key="n" cols="12" xxl="1" xl="2" lg="2" md="4" sm="6">
          <v-skeleton-loader height="250"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="novel in novels" :key="novel.title" cols="12" xxl="1" xl="2" lg="2" md="4" sm="6">
          <NovelListItem @click="() => onClickNovel(novel)" :novel="novel" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import NovelListItem from '@/components/NovelListItem.vue';
import { useFetch } from '@/utils/fetch';
import { useRouter } from 'vue-router';

const router = useRouter();
const novels = ref([]);
const loading = ref(true);
const url = ref('/novels');

const { data } = useFetch(url);

watchEffect(() => {
  if (data.value !== null) {
    novels.value = data.value;
    loading.value = false;
  }
});

const onClickNovel = (item) => {
  const name = item.title.toLowerCase().split(' ').join('-');
  router.push(`/novels/${item.id + '-' + name}`);
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
