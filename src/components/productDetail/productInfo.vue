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
      <SizeSelector :sizes="sizes" v-model:selected="tallaSeleccionada" />
      <p>Seleccionada: {{ tallaSeleccionada || 'Ninguna' }}</p>
    </div>

    <div class="cart-fav-container">
      <button class="add-to-cart" @click="addCart">AÑADIR AL CARRITO</button>
      <i class="fas fa-heart heart-icon"
        :style="{ color: isFavorite ? 'red' : 'gray' }"
        @click="isFavorite = !isFavorite">
      </i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorSelector from './colorSelector.vue'
import SizeSelector from './sizeSelector.vue'
import { toast } from 'vue3-toastify'

const isFavorite = ref(false)
const initials = defineProps({
  name: String,
  price: String,
  code: String,
  colors: Array,
  sizes: Array
})
const tallaSeleccionada = ref(null)
const emit = defineEmits(['addProductToCart'])

const addCart = () => {
  if (!tallaSeleccionada.value) {
    toast.warning('Debe seleccionar una talla')
    return
  }
  emit('addProductToCart', { product: initials.name, talla: tallaSeleccionada.value })
}
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
.cart-fav-container {
  display: flex;
  justify-content: space-between; /* ← separa a los extremos */
  align-items: center;
  width: 100%; /* o un ancho específico como 300px */
  max-width: 400px; /* ajusta según el diseño */
  margin-top: 20px;
}

.add-to-cart {
  background-color: #8b5a5c;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.heart-icon {
  font-size: 20px;
  color: gray;
  cursor: pointer;
  margin-right: 60px;
}
</style>