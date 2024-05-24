<template>
  <v-container class="chat-container" fluid>
    <NovelDraftWizardChat :messages="messages" />
    <NovelDraftWizardInput />
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
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
}
</style>
