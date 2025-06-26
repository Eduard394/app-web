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
  margin-left: 40px;
  margin-bottom: 40px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #888888;
  text-align: left;
}
.product-tabs h3 {
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
}
</style>