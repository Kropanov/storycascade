<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon :icon="item.icon" :size="24" />
    </a>

    <div class="text-caption text-disabled" style="position: absolute; right: 16px">
      &copy; {{ new Date().getFullYear() }} <span class="d-none d-sm-inline-block">Kropanov</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://github.com/Kropanov/storycascade/blob/main/LICENSE.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        BSD 2-Clause License
      </a>
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: 'GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/Kropanov/storycascade',
  },
  {
    title: 'Vuetify Discord',
    icon: `mdi-discord`,
    href: 'https://community.vuetifyjs.com/',
  },
];
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
