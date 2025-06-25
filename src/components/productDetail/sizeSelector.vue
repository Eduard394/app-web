<template>
  <div class="size-selector">
    <button v-for="(size, i) in sizes" :key="i" class="size-btn">
      {{ size }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ sizes: Array })
</script>

<style scoped>
.size-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
}
.size-btn {
  padding: 10px 15px;
  background: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
}
.size-btn:hover {
  background: #eaeaea;
}
</style>