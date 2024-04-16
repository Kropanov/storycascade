<template>
  <div class="btn-group">
    <v-btn v-for="item in data" :key="item" variant="outlined" size="small" :icon="item.icon"></v-btn>
  </div>
</template>

<script setup>
const data = [{ icon: 'mdi-google' }, { icon: 'mdi-github' }, { icon: 'mdi-facebook' }, { icon: 'mdi-twitter' }];
</script>

<style scoped>
.btn-group {
  display: flex;
  justify-content: center;
  margin: 15px 0 15px 0;

  button {
    margin: 0 2px 0 2px;
  }
}
</style>
