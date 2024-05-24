<template>
  <div class="chat-area">
    <v-card v-for="message in props.messages" :key="message.id" class="ma-2">
      <v-card-text>{{ message.text }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(['messages']);
</script>

<style scoped>
.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
</style>
