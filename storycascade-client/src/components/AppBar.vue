<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Home</v-app-bar-title>

    <v-btn-group class="btn-group">
      <v-btn
        :icon="theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-4'"
        @click="toggleTheme"
      ></v-btn>

      <template v-if="!isLoggedIn">
        <v-btn>Log In</v-btn>
        <v-btn>Sign Up</v-btn>
      </template>

      <v-btn icon="mdi-account" v-if="isLoggedIn"></v-btn>
    </v-btn-group>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <!--  -->
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const drawer = ref(false);
const isLoggedIn = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>

<style scoped>
.btn-group {
  margin-right: 8px;
}
</style>
