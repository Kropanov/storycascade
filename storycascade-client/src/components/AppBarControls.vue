<template>
  <v-btn-group class="btn-group">
    <ThemeSwitcher />

    <template v-if="!isLoggedIn">
      <v-btn @click="loginDialog = true">Log In</v-btn>
      <v-btn @click="signUpDialog = true">Sign Up</v-btn>
    </template>

    <UserMenuIcon v-else @logout="logout" />

    <v-dialog v-model="loginDialog" width="auto">
      <Login @closeDialog="loginDialog = false" @login="isLoggedIn = true" />
    </v-dialog>

    <v-dialog v-model="signUpDialog" width="auto">
      <SignUp @closeDialog="signUpDialog = false" @login="isLoggedIn = true" />
    </v-dialog>
  </v-btn-group>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import UserMenuIcon from '@/components/UserMenuIcon.vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { TOKEN } from '@/utils/constants';

const router = useRouter();
const store = useAppStore();

const loginDialog = ref(false);
const signUpDialog = ref(false);
const isLoggedIn = ref(false);

onBeforeMount(() => {
  const token = localStorage.getItem(TOKEN);
  isLoggedIn.value = !!token;
});

const logout = () => {
  clearSession();
  navigate('/');
};

const clearSession = () => {
  isLoggedIn.value = false;
  store.clearUserData();
  localStorage.clear();
};

const navigate = (path) => {
  router.push({ path });
};
</script>

<style scoped>
.btn-group {
  margin-right: 8px;
}
</style>
