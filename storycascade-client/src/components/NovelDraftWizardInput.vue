<template>
  <div class="input-area">
    <v-text-field
      rounded="lg"
      v-model="inputValue"
      append-inner-icon="mdi-send"
      prepend-inner-icon="mdi-paperclip"
      density="comfortable"
      label="Enter..."
      variant="solo"
      hide-details
      single-line
      @keydown="(e) => handleKeyPressed(e)"
      @click:append-inner="onClickSendMessage"
      @click:prepend-inner="onClickUploadFile"
    ></v-text-field>
    <input style="display: none" type="file" ref="fileInput" @change="onFileSelected" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { useAppStore } from '@/stores/app';

const fileInput = ref(null);
const inputValue = ref(null);

const props = defineProps(['sendMessage']);
const store = useAppStore();

const keys = ['Enter'];

onBeforeMount(() => {
  store.hideFooter();
});

onBeforeUnmount(() => {
  store.showFooter();
});

const handleKeyPressed = (e) => {
  if (keys.includes(e.key)) {
    sendMessage();
  }
};

const sendMessage = () => {
  if (inputValidation()) return;
  props.sendMessage(inputValue.value);
  inputValue.value = null;
};

const onClickSendMessage = () => {
  sendMessage();
};

const inputValidation = () => {
  return inputValue.value === null || inputValue.value === '';
};

const onClickUploadFile = () => {
  fileInput.value.click();
};

const onFileSelected = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log(`Selected file: ${file.name}`);
  }
};
</script>

<style scoped>
.input-area {
  flex-shrink: 0;
}
</style>
