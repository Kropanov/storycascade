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
import { useFetch } from '@/util/fetch';
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['closeDialog', 'login']);
const url = ref('/auth/login');

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

  // FIXME: fix this piece of code
  watchEffect(() => {
    if (error.value) {
      console.error('Error:', error.value);
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
