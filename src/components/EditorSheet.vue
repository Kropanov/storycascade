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
  min-height: 85vh;
  width: 750px;
  padding: 20px;
  outline: none;
  margin: 20px auto auto;
  box-sizing: border-box;
  border: 1px solid rgba(221, 221, 221, 0.8666666667);
}
</style>
