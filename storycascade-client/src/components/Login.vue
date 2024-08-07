<template>
  <v-card width="450" prepend-icon="mdi-login" title="Login in system">
    <form class="mt-3 pl-2 pr-2" @submit.prevent="submit">
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

      <SocialLoginButtons />
      <v-divider></v-divider>

      <v-btn-group variant="elevated" class="mb-2 mt-2 w-100">
        <v-btn @click="handleReset"> clear </v-btn>
        <v-btn class="ms-auto" type="submit"> send </v-btn>
      </v-btn-group>
    </form>
  </v-card>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { useFetch } from '@/utils/fetch';
import { ref, watch } from 'vue';
import SocialLoginButtons from '@/components/SocialLoginButtons.vue';
import { useAppStore } from '@/stores/app';
import { TOKEN } from '@/utils/constants';

const store = useAppStore();
const url = ref('/auth/login');
const emit = defineEmits(['closeDialog', 'login']);

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email: (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value) || 'Must be a valid e-mail.',
    password: (value) => (value && value.length > 0) || 'Must contain a value.',
  },
});

const email = useField('email');
const password = useField('password');

const submit = handleSubmit(async (values) => {
  const { data, error } = useFetch(url, { method: 'POST', body: JSON.stringify(values) });

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
