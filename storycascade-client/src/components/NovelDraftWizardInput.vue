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

const onClickSendMessage = () => {
  if (inputValidation()) return;
  props.sendMessage(inputValue.value);
  inputValue.value = null;
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

onBeforeMount(() => {
  store.hideFooter();
});

onBeforeUnmount(() => {
  store.showFooter();
});
</script>

<style scoped>
.input-area {
  flex-shrink: 0;
}
</style>
