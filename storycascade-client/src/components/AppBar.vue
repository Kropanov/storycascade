<template>
  <v-app-bar title="Home">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>
    <AppBarControls />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary permanent>
    <v-list density="compact" nav>
      <v-list-item title="Home" @click="$router.push({ path: '/' })" prepend-icon="mdi-home" value=""></v-list-item>
      <v-list-item prepend-icon="mdi-library" title="Library" link value="library"></v-list-item>
      <v-list-item prepend-icon="mdi-pen" title="Your projects" link value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import AppBarControls from '@/components/AppBarControls.vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped></style>
