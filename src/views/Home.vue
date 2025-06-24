<template>
  <div>
    <router-link to="/about">Ir a About</router-link>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <detailProduct msg="Vite + Vue" />
  <complete-your-look/>
  <suggest-product/>
  <Footer />
</template>

<script setup>
    import HelloWorld from '../components/Header.vue'
    import detailProduct from '../components/DetailProduct.vue'
    import SuggestProduct from '../components/SuggestProduct.vue'
    import Footer from '../components/Footer.vue'
    import CompleteYourLook from '../components/CompleteYourLook.vue'
</script>