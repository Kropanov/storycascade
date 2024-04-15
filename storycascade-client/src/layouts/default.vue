<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <Alert />
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppBar from '@/components/AppBar.vue';
import Alert from '@/components/Alert.vue';
</script>
