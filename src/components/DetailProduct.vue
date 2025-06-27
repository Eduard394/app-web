<template>
  <div v-if="product">
    <h2 class="subtittle-detail">
      HUSHPUPPIES/CALZADO/{{ product.nombre }}
    </h2>

    <div class="product-detail">
      <ProductGallery :images="product.images" />
      <ProductInfo
        :name="product.nombre"
        :price="product.precio"
        :code="product.referencia"
        :colors="product.colors"
        :sizes="product.sizes"
        @addProductToCart="handleAddTocart"
      />
    </div>

    <ProductTabs
      :description="product.description"
      :technology="product.technology"
    />
  </div>
</template>

<script setup>
// Importaciones
import ProductGallery from './productDetail/productGallery.vue'
import ProductInfo from './productDetail/productInfo.vue'
import ProductTabs from './productDetail/productTabs.vue'
import { useCartStore } from '@/stores/cart'
import { toast } from 'vue3-toastify'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const handleAddTocart = (itemProduct) => {
  cartStore.addToCart(itemProduct)
  toast.success('Producto agregado')
}
</script>

<style scoped>
.product-detail {
  display: flex;
  gap: 40px;
  padding: 40px 20px;
}
.subtittle-detail {
  color: gray;
  margin-left: 40px;
}
</style>
