<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>
    <AppBarControls />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary permanent>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in listItems"
        :key="item.title"
        :title="item.title"
        @click="
          () => {
            toggleDrawer();
            $router.push({ path: item.path });
          }
        "
        :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import AppBarControls from '@/components/AppBarControls.vue';

const listItems = ref([
  {
    path: '/',
    title: 'Home',
    icon: 'mdi-home',
  },
  {
    path: '/library',
    title: 'Library',
    icon: 'mdi-library',
  },
  {
    path: '/projects',
    title: 'Your projects',
    icon: 'mdi-pen',
  },
]);

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped></style>
