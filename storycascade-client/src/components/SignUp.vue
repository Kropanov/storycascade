<template>
  <v-card width="450" prepend-icon="mdi-account" title="Create a new account">
    <form class="mt-3 pl-2 pr-2" @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
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

      <v-divider></v-divider>

      <v-btn-group variant="elevated" class="mb-2 mt-2 w-100">
        <v-btn @click="handleReset"> clear </v-btn>
        <v-btn class="ms-auto" type="submit" size="small"> Create An Account </v-btn>
      </v-btn-group>
    </form>
  </v-card>
</template>

<script setup>
import { defineEmits } from 'vue';
import { useField, useForm } from 'vee-validate';

const emit = defineEmits(['closeDialog']);

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return 'Name needs to be at least 2 characters.';
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return 'Must be a valid e-mail.';
    },
    password(value) {
      if (value?.length >= 1) return true;

      return 'Must contain a value.';
    },
    repeatPassword(value) {
      if (!value) return 'Must contain a value.';

      if (value === password.value.value) return true;

      return 'Must match the password';
    },
  },
});

const name = useField('name');
const email = useField('email');
const password = useField('password');
const repeatPassword = useField('repeatPassword');

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  console.log(values);
  emit('closeDialog');
});
</script>

<style scoped></style>
