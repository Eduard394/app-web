<template>
  <div class="size-selector">
    <button
      v-for="(size, i) in sizes"
      :key="i"
      class="size-btn"
      :class="{ 
        disabled: !size.disponible, 
        active: selected === size.talla 
      }"
      :disabled="!size.disponible"
      @click="selectSize(size.talla)"
    >
      {{ size.talla }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  sizes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:selected'])

const selected = ref(null)

function selectSize(talla) {
  selected.value = talla
  emit('update:selected', talla)
}
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
  font-size: 14px;
  min-width: 60px;
  text-align: center;
  border-radius: 4px;
  transition: background 0.3s;
}

.size-btn:hover:not(.disabled) {
  background: #eaeaea;
}

/* Talla seleccionada */
.size-btn.active {
  background: #8b5a5c;
  color: white;
  border-color: #8b5a5c;
}

/* Talla deshabilitada */
.size-btn.disabled {
  background: #e0e0e0;
  color: #999;
  border-color: #ccc;
  cursor: not-allowed;
}
</style>
