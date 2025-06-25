<template>
  <div class="color-selector">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color-box"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({ colors: Array })
</script>

<style scoped>
.color-selector {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}
.color-box {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
}
</style>