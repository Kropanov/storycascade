<template>
  <div>
    <AppBar />
    <div class="wrapper">
      <div class="box editor-sidebar">
        <EditorSidebar />
      </div>
      <div class="box editor-sheet">
        <EditorSheet />
      </div>
      <div class="box editor-toolbar">
        <EditorSidebar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EditorSheet from '@/components/EditorSheet.vue';
import AppBar from '@/components/AppBar.vue';
import EditorSidebar from '@/components/EditorSidebar.vue';

export default {
  components: { EditorSidebar, AppBar, EditorSheet },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.box {
  grid-row: 1;
}

.editor-sidebar {
  grid-column: 1;
  justify-self: start;
}

.editor-sheet {
  grid-column: 2;
  justify-self: center;
}

.editor-toolbar {
  grid-column: 3;
  justify-self: end;
}
</style>
