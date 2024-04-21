<template>
  <v-btn-group class="btn-group">
    <ThemeSwitcher />

    <template v-if="!isLoggedIn">
      <v-btn @click="loginDialog = true">Log In</v-btn>
      <v-btn @click="signUpDialog = true">Sign Up</v-btn>
    </template>

    <v-btn icon="mdi-account" v-if="isLoggedIn" @click="$router.push({ path: 'profile' })"></v-btn>

    <v-dialog v-model="loginDialog" width="auto">
      <Login @closeDialog="loginDialog = false" @login="isLoggedIn = true" />
    </v-dialog>

    <v-dialog v-model="signUpDialog" width="auto">
      <SignUp @closeDialog="signUpDialog = false" @login="isLoggedIn = true" />
    </v-dialog>
  </v-btn-group>
</template>

<script setup>
import { ref } from 'vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import { TOKEN } from '@/utils/constants';

const loginDialog = ref(false);
const signUpDialog = ref(false);

const isLoggedIn = ref(localStorage.getItem(TOKEN));
</script>

<style scoped>
.btn-group {
  margin-right: 8px;
}
</style>
