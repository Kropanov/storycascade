<template>
  <v-btn-group class="btn-group">
    <v-btn
      :icon="theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-4'"
      @click="toggleTheme"
    ></v-btn>

    <template v-if="!isLoggedIn">
      <v-btn @click="loginDialog = true">Log In</v-btn>
      <v-btn @click="signUpDialog = true">Sign Up</v-btn>
    </template>

    <v-btn icon="mdi-account" v-if="isLoggedIn"></v-btn>

    <v-dialog v-model="loginDialog" width="auto">
      <Login @closeDialog="loginDialog = false" @login="isLoggedIn = true" />
    </v-dialog>

    <v-dialog v-model="signUpDialog" width="auto">
      <SignUp @closeDialog="signUpDialog = false" />
    </v-dialog>
  </v-btn-group>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';

const theme = useTheme();
const isLoggedIn = ref(false);
const loginDialog = ref(false);
const signUpDialog = ref(false);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>

<style scoped>
.btn-group {
  margin-right: 8px;
}
</style>
