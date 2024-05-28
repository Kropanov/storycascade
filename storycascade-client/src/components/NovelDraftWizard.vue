<template>
  <v-container class="chat-container" fluid>
    <NovelDraftWizardChat :messages="messages" />
    <NovelDraftWizardInput :sendMessage="(val) => sendMessage(val)" />
  </v-container>
</template>

<script setup>
import NovelDraftWizardInput from '@/components/NovelDraftWizardInput.vue';
import NovelDraftWizardChat from '@/components/NovelDraftWizardChat.vue';
import { ref } from 'vue';

const messages = ref([
  { id: 1, text: 'hi!' },
  { id: 2, text: 'how are you?' },
  { id: 3, text: 'Yep?' },
]);

const sendMessage = (value) => {
  const date = new Date().toISOString();
  const id = Date.parse(date);
  messages.value.push({ id, text: value });
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
}
</style>
