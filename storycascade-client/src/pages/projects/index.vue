<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="ma-3" text="Create draft" variant="outlined" size="large"></v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        @click="onClickItem(item.path)"
        :append-icon="item.icon"
        :key="index"
        :value="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  { title: 'Form', icon: 'mdi-ballot', path: 'projects/form' },
  { title: 'Wizard', icon: 'mdi-wizard-hat', path: 'projects/wizard' },
]);

const onClickItem = (path) => {
  router.push({ path });
};
</script>

<style scoped></style>
