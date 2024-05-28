<template>
  <div ref="chatArea" class="chat-area">
    <v-card
      prepend-icon="mdi-wizard-hat"
      v-for="message in props.messages"
      :key="message.id"
      class="card ma-2"
      color="background"
      subtitle="Ancient Wizard"
      :text="message.text"
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
