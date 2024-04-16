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
import { ref, watchEffect } from 'vue';
import { useFetch } from '@/util/fetch';
import SocialLoginButtons from '@/components/SocialLoginButtons.vue';

const emit = defineEmits(['closeDialog', 'login']);

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

  // FIXME: fix this piece of code
  watchEffect(() => {
    if (error.value) {
      console.error('Error:', error.value);
      emit('closeDialog');
    }

    if (data.value !== null) {
      emit('login');
      emit('closeDialog');
      console.log('Form submitted with:', data.value);
    }
  });
});
</script>

<style scoped></style>
