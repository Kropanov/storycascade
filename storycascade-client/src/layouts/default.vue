<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <Alert />
    <AppFooter v-if="store.isFooterVisible" />
  </v-app>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppBar from '@/components/AppBar.vue';
import Alert from '@/components/Alert.vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
</script>
