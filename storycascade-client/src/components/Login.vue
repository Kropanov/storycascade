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
import { defineEmits } from 'vue';
import { useField, useForm } from 'vee-validate';

const emit = defineEmits(['closeDialog', 'login']);

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return 'Must be a valid e-mail.';
    },
    password(value) {
      if (value?.length >= 1) return true;

      return 'Must contain a value.';
    },
  },
});

const email = useField('email');
const password = useField('password');

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  console.log(values);
  emit('closeDialog');
  // for testing
  emit('login');
});
</script>

<style scoped></style>
