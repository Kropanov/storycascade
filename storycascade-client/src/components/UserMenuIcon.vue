<template>
  <v-menu open-on-hover transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-account" v-bind="props"></v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index" @click="item.fn">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const { user } = useAppStore();

const router = useRouter();
const emit = defineEmits(['logout']);

const items = ref([
  // FIXME: have to get data when reload
  { title: 'Profile', fn: () => navigate(`/${user.value.username ?? ''}`) },
  { title: 'Exit', fn: () => emit('logout') },
]);

const navigate = (path) => {
  router.push({ path });
};
</script>

<style scoped></style>
