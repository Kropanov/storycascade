<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" :prepend-icon="selectedTheme.icon">{{ selectedTheme.title }}</v-btn>
    </template>

    <v-list>
      <v-list-item
        :title="item.title"
        density="compact"
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        @click="() => themeSwitch(item)"
      >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const selectedTheme = ref({
  title: 'dark',
  icon: 'mdi-weather-night',
});

const items = [
  { title: 'Dark', icon: 'mdi-weather-night', theme: 'dark' },
  { title: 'Light', icon: 'mdi-white-balance-sunny', theme: 'light' },
  { title: 'System', icon: 'mdi-desktop-tower-monitor', theme: 'dark' },
  { title: 'Custom', icon: 'mdi-palette', theme: 'custom' },
];

const themeSwitch = (item) => {
  selectedTheme.value = {
    title: item.title,
    icon: item.icon,
  };
  theme.global.name.value = item.theme;
};
</script>

<style scoped></style>
