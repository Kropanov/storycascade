<template>
  <div class="sheet" contenteditable="true" />
</template>

<script lang="ts">
export default {
  methods: {},
};
</script>

<style scoped lang="scss">
.sheet {
  text-align: left;
  height: 100%;
  min-height: 816px;
  width: 750px;
  padding: 20px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid rgba(221, 221, 221, 0.8666666667);
  border-top: none;
}
</style>
