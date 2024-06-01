<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" :prepend-icon="selectedTheme.icon">{{ selectedTheme.title }}</v-btn>
    </template>

    <v-list>
      <v-list-item
        :title="item.title"
        density="compact"
        v-for="(item, index) in themes"
        :key="index"
        :value="index"
        @click="() => switchTheme(item)"
      >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useTheme } from 'vuetify';
import { THEME, THEME_TITLE } from '@/utils/constants';

const theme = useTheme();

const selectedTheme = ref({
  title: 'dark',
  icon: 'mdi-weather-night',
});

const themes = [
  { title: 'Dark', icon: 'mdi-weather-night', theme: 'dark' },
  { title: 'Light', icon: 'mdi-white-balance-sunny', theme: 'light' },
  { title: 'Custom', icon: 'mdi-palette', theme: 'custom' },
];

onBeforeMount(() => {
  appendSystemTheme();
  defineSelectedTheme();
});

const appendSystemTheme = () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const theme = prefersDarkScheme.matches ? 'dark' : 'light';
  themes.push({ title: 'System', icon: 'mdi-desktop-tower-monitor', theme });
};

const defineSelectedTheme = () => {
  const theme = localStorage.getItem(THEME);
  const title = localStorage.getItem(THEME_TITLE);
  themes.map((item) => {
    if (item.theme === theme && item.title === title) {
      setSelectedTheme(item);
    }
  });
};

const setSelectedTheme = (item) => {
  selectedTheme.value = {
    title: item.title,
    icon: item.icon,
  };
};

const switchTheme = (item) => {
  setSelectedTheme(item);
  theme.global.name.value = item.theme;
  localStorage.setItem(THEME, item.theme);
  localStorage.setItem(THEME_TITLE, item.title);
};
</script>

<style scoped></style>
