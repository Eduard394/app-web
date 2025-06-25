<template>
  <div class="info">
    <h2 class="name">{{ name }}</h2>
    <div class="price">{{ price }}</div>
    <div class="code">Cod. de producto {{ code }}</div>

    <div class="section">
      <label>COLOR</label>
      <ColorSelector :colors="colors" />
    </div>

    <div class="section">
      <label>TALLA</label>
      <SizeSelector :sizes="sizes" />
    </div>

    <button class="add-to-cart">AÑADIR AL CARRITO</button>
  </div>
</template>

<script setup>
import ColorSelector from './ColorSelector.vue'
import SizeSelector from './SizeSelector.vue'

defineProps({
  name: String,
  price: String,
  code: String,
  colors: Array,
  sizes: Array
})
</script>

<style scoped>
.info {
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.name {
  font-weight: bold;
  text-transform: uppercase;
}
.price {
  font-size: 18px;
  color: #8b5a5c;
  font-weight: bold;
}
.code {
  font-size: 12px;
  color: #999;
}
.section {
  margin-top: 10px;
}
.add-to-cart {
  margin-top: 20px;
  background-color: #8b5a5c;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>