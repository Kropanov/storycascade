<template>
  <v-card width="450" prepend-icon="mdi-account" title="Create a new account">
    <form class="mt-3 pl-2 pr-2" @submit.prevent="submitForm">
      <v-text-field
        v-model="username.value.value"
        :counter="10"
        :error-messages="username.errorMessage.value"
        label="User name"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Password"
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="repeatPassword.value.value"
        :error-messages="repeatPassword.errorMessage.value"
        label="Confirm password"
        type="password"
      ></v-text-field>

      <SocialLoginButtons />
      <v-divider></v-divider>

      <v-btn-group variant="elevated" class="mb-2 mt-2 w-100">
        <v-btn @click="resetForm"> clear </v-btn>
        <v-btn class="ms-auto" type="submit" size="small"> Create An Account </v-btn>
      </v-btn-group>
    </form>
  </v-card>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { ref, watch } from 'vue';
import { useFetch } from '@/utils/fetch';
import SocialLoginButtons from '@/components/SocialLoginButtons.vue';
import { TOKEN } from '@/utils/constants';
import { useAppStore } from '@/stores/app';

const emit = defineEmits(['closeDialog', 'login']);
const store = useAppStore();
const url = ref('/auth/signup');

const { handleSubmit, resetForm } = useForm({
  validationSchema: {
    username: (value) => (value && value.length >= 2) || 'Name needs to be at least 2 characters.',
    email: (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value) || 'Must be a valid e-mail.',
    password: (value) => (value && value.length > 0) || 'Must contain a value.',
    repeatPassword(value) {
      if (!value) return 'Must contain a value.';
      if (value === password.value.value) return true;
      return 'Must match the password';
    },
  },
});

const username = useField('username');
const email = useField('email');
const password = useField('password');
const repeatPassword = useField('repeatPassword');

const submitForm = handleSubmit((values) => {
  const { data, error } = useFetch(url, { body: JSON.stringify(values), method: 'POST' });

  watch(
    () => error.value,
    () => {
      showError();
    },
  );

  watch(
    () => data.value,
    () => {
      performLoginActions();
      storeUserData();
      saveTokenToLocalStorage();
    },
  );

  const showError = () => {
    console.log(error.value);
  };

  const performLoginActions = () => {
    emit('login');
    emit('closeDialog');
  };

  const storeUserData = () => {
    store.setUserData(data.value);
  };

  const saveTokenToLocalStorage = () => {
    localStorage[TOKEN] = data.value.token;
  };
});
</script>

<style scoped></style>
