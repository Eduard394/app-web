<template>
  <div class="bg-white rounded-xl shadow p-4 w-full max-w-xs">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded mb-2" />
    <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
    <p class="text-gray-500 text-sm mb-1">Categoría: {{ product.category }}</p>
    <p class="text-green-600 font-bold text-base mb-2">\${{ product.price.toFixed(2) }}</p>
    <button @click="$emit('add-to-cart', product)"
            class="w-full py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Agregar al carrito
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>
