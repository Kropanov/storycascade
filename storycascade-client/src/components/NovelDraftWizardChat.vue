<template>
  <div ref="chatArea" class="chat-area">
    <v-card
      class="card ma-2"
      color="background"
      v-for="message in props.messages"
      :key="message.id"
      :text="message.text"
      :subtitle="message.user ? 'You' : `Ancient Wizard`"
      :prepend-icon="message.user ? 'mdi-face-man' : 'mdi-wizard-hat'"
    >
    </v-card>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

const props = defineProps(['messages']);
const chatArea = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  if (chatArea.value) {
    chatArea.value.scrollTop = chatArea.value.scrollHeight;
  }
};

watch(
  () => props.messages,
  () => {
    scrollToBottom();
  },
  { deep: true },
);
</script>

<style scoped>
.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.card {
  box-shadow: none;
}
</style>
