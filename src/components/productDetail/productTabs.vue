<template>
  <div class="product-tabs">
    <h3>DETALLES DE PRODUCTO</h3>
    <p>{{ description }}</p>

    <h3>TECNOLOGÍAS</h3>
    <p>{{ technology }}</p>
  </div>
</template>

<script setup>
defineProps({
  description: String,
  technology: String
})
</script>

<style scoped>
.product-tabs {
  margin-top: 40px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  font-size: 14px;
  color: #444;
}
.product-tabs h3 {
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
}
</style>