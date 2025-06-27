<template>
  <Header msg="Vite + Vue" />
  <ProductDetail :product="productItem" />
  <CompleteYourLook :shoes="shoes" />
  <SuggestProduct/>
  <Footer />
</template>

<script setup>
  import Header from '../components/Header.vue'
  import ProductDetail from '../components/DetailProduct.vue'
  import SuggestProduct from '../components/SuggestProduct.vue'
  import Footer from '../components/Footer.vue'
  import CompleteYourLook from '../components/CompleteYourLook.vue'


  import { ref, onBeforeMount } from 'vue'
  import { useProductsStore } from '@/stores/products'
  import { useSizesStore } from '@/stores/sizes'
  const imagenes = import.meta.glob('../assets/*.jpg', {
    eager: true,
    import: 'default'
  })
  const productsStore = useProductsStore()
  const sizesStore = useSizesStore()

  const completeYourLook = ref([])
  const shoes = ref([])
  const productItem = ref(null)

  onBeforeMount ( async() => {
    await productsStore.loadProducts()
    await sizesStore.loadSizes()
    const random = productsStore.randomProduct
    const sizesTotal = sizesStore.getSizes

    // producto para detalle
    const paths = Object.values(imagenes)
    const imagesRandom = [...paths].sort(() => 0.5 - Math.random()).slice(0, 3)
    productItem.value = {
      nombre: random.nombre,
      precio: random.precio,
      referencia: random.referencia,
      images: imagesRandom,
      colors: ['#4a4a4a', '#f2690a'],
      sizes: sizesTotal,
      description: "Lorem ipsum dolor sit amet...",
      technology: "Quisque tellus odio..."
    }

    // completa tu look
    completeYourLook.value = productsStore.productsSuggest(4)
    shoes.value = completeYourLook.value.map(shoe => {
      const match = Object.entries(imagenes).find(([key]) =>
        key.endsWith(`/${shoe.foto}`)
      )
      return {
        ...shoe,
        imagenSrc: match ? match[1] : ''
      }
    })
  })
</script>