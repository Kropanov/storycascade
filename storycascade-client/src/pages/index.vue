<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col lg="10" xl="8">
        <NovelSearchField />
        <NovelList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import NovelSearchField from '@/components/NovelSearchField.vue';
import NovelList from '@/components/NovelList.vue';
</script>

<style scoped>
.container {
  margin-top: 300px;
}
</style>
