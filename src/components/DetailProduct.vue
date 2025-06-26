<template>
<div >
    <h2 class="subtittle-detail">HUSHPUPPIES/CALZADO/{{product.nombre }}</h2>
</div>
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

  <ProductTabs :description="product.description" :technology="product.technology" />
  <!-- <div>
    <h2>Productos recomendados</h2>
    <div v-if="recomendados.length > 0">
      <div v-for="p in recomendados" :key="p.id" class="producto">
        <h3>{{ p.nombre }}</h3>
        <img :src="`/src/assets/${p.foto}`" width="120" />
        <p>{{ p.precio }}</p>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import ProductGallery from './productDetail/productGallery.vue'
import ProductInfo from './productDetail/productInfo.vue'
import ProductTabs from './productDetail/productTabs.vue'
import { useProductsStore } from '@/stores/products'
import { useSizesStore } from '@/stores/sizes'

import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
import { toast } from 'vue3-toastify'

const productsStore = useProductsStore()
const sizesStore = useSizesStore()
const recomendados = ref([])
const sizesOfStore = ref([])
recomendados.value = productsStore.productsSuggest(4)
sizesOfStore.value = sizesStore.getSizes
const productRandom = productsStore.randomProduct
const imagenes = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default'
})

const product = {
  nombre: 'Zapatilla Hombre ePelikan',
  precio: '$30.500',
  referencia: 'zap-00511',
  images: [
  ],
  colors: [], 
  sizes: [],
  description: '',
  technology: ''
}
// const product = {}


onBeforeMount(async () => {
    await sizesStore.loadSizes()
    await productsStore.loadProducts()
})

const paths = Object.values(imagenes)
const imagesRandom = [...paths]
  .sort(() => 0.5 - Math.random())
  .slice(0, 3)

product.colors = ['#4a4a4a','#f2690a']
product.sizes = sizesOfStore.value
product.sizes = [
  { talla: '5', disponible: true },
  { talla: '5.5', disponible: false },
  { talla: '6', disponible: true },
  { talla: '6.5', disponible: true },
  { talla: '7', disponible: false },
  { talla: '7.5', disponible: true },
  { talla: '8', disponible: true },
  { talla: '8.5', disponible: false },
  { talla: '9', disponible: true },
  { talla: '9.5', disponible: false }
]
product.images = imagesRandom
product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra id nec dolor. Praesent sodales augue ligula, ut euismod tortor lacinia non. Etiam tristique quam quis rutru m aliquam. Vestibulum ut placerat orci .  Etiam consequat accumsan suscipit. Praesent fermentum orci et, vitae dignissim turpis faucibus ac. Aenean dictum feugiat metus, id maximus mauris consectetur ac."
product.technology = "Quisque tellus odio, varius consequat interdum at, molestie viverra lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum tellus arcu et lorem."
console.log(recomendados)
console.log(sizesOfStore.value)
console.log("Legrada...............")
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
.subtittle-detail{
    color: gray;
    margin-left: 40px;
}
</style>
