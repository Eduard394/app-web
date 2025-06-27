<template>
  <section>
    <h2 class="seccion">COMPLETA TU LOOK</h2>
    <div class="contenedor">
      <ProductCard v-for="shoe in shoes" :key="shoe.id" :item="shoe" @addProductToCartLook="handleAddTocartLook"/>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './CardCompleteYourLook.vue'
import { toast } from 'vue3-toastify'
import { useCartStore } from '@/stores/cart'

defineProps({
  shoes: {
    type: Array,
    required: true
  }
})
const cartStore = useCartStore()
const handleAddTocartLook = (itemProduct) => {
  cartStore.addToCart(itemProduct)
  toast.success('Producto agregado')
}
</script>

<style scoped>
.seccion {
  margin-left: 30px;
  font-weight: bold;
  font-size: 16px;
  background-color: #eee;
  padding: 8px 1rem;
  text-align: left;
  margin-bottom: 1rem;
}

.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
</style>
