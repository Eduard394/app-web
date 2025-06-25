<template>
<div>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
  <div class="product-detail">
    <ProductGallery :images="product.images" />
    <ProductInfo
      :name="product.name"
      :price="product.price"
      :code="product.code"
      :colors="product.colors"
      :sizes="product.sizes"
    />
  </div>

  <ProductTabs :description="product.description" :technology="product.technology" />
</template>

<script setup>
import ProductGallery from './productDetail/productGallery.vue'
import ProductInfo from './productDetail/productInfo.vue'
import ProductTabs from './productDetail/productTabs.vue'

const product = {
  name: 'Zapatilla Hombre Pelikan',
  price: '$00.000',
  code: 'zap-005',
  images: [
    '/assets/pelikan1.png',
    '/assets/pelikan2.png',
    '/assets/pelikan3.png'
  ],
  colors: ['#4a4a4a'],
  sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
  description: 'Lorem ipsum dolor sit amet...',
  technology: 'Quisque tellus odio...'
}
const product1 = {
    nombre: "Zapato miel",
    precio: 5000,
    referencia: "G40",
    foto: "6.jpg"
}
</script>

<style scoped>
.product-detail {
  display: flex;
  gap: 40px;
  padding: 40px 20px;
}
</style>
