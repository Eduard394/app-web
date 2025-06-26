<template>
  <section>
    <h2 class="seccion">COMPLETA TU LOOK</h2>
    <div class="contenedor">
      <ProductCard v-for="shoe in shoes" :key="shoe.id" :item="shoe" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from './CardCompleteYourLook.vue'
import { onBeforeMount } from 'vue'
const imagenes = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default'
})

const shoes = [
    {
      "nombre": "Zapato verde",
      "precio": 5000,
      "referencia": "G40",
      "foto": "11.jpg"
    },
    {
      "nombre": "Zapato gris",
      "precio": 5000,
      "referencia": "G40",
      "foto": "8.jpg"
    },
    {
      "nombre": "Zapato azul7",
      "precio": 5000,
      "referencia": "G40",
      "foto": "19.jpg"
    },
    {
        "nombre": "Zapato aguamarina",
        "precio": 5000,
        "referencia": "G40",
        "foto": "18.jpg"
    }
  ]
  onBeforeMount (() => {
  shoes.forEach(shoe => {
  const match = Object.entries(imagenes).find(([key]) =>
    key.endsWith(`/${shoe.foto}`)
  )
  shoe.imagenSrc = match ? match[1] : ''
})
})
</script>
<style scoped>
.seccion {
  margin-left: 40px;
  font-weight: bold;
  font-size: 15px;
  background-color: #eee;
  padding: 0.5rem 1rem;
  text-align: left;
  margin-bottom: 1rem;
}

.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;       /* centra los items dentro */
  gap: 1.5rem;
  max-width: 100%;             /* o el ancho que prefieras */
  margin: 0 auto;                /* centra el contenedor */
  padding: 1rem;
}
</style>
