<template>
  <div class="input-area">
    <v-text-field
      class="mb-2"
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
import { ref } from 'vue';

const fileInput = ref(null);

const onClickSendMessage = () => {
  console.log('Sent Message!');
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
