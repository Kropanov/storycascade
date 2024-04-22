<template>
  <v-menu open-on-hover transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-account" v-bind="props" v-if="login.isLoggedIn"></v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index" @click="item.fn">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const login = defineProps(['isLoggedIn']);
const emit = defineEmits(['logout']);

const items = ref([
  { title: 'Profile', fn: () => navigate('/profile') },
  { title: 'Exit', fn: () => emit('logout') },
]);

const navigate = (path) => {
  router.push({ path });
};
</script>

<style scoped></style>
