<template>
  <div>
    <div>
      <AppBar />
    </div>
    <div>
      <EditorSheet />
    </div>
  </div>
</template>

<script lang="ts">
import EditorSheet from '@/components/EditorSheet.vue';
import AppBar from '@/components/AppBar.vue';

export default {
  components: { AppBar, EditorSheet },
};
</script>

<style lang="scss"></style>
