<template>
  <section class="recomendados">
    <h2 class="titulo">PRODUCTOS RECOMENDADOS</h2>
    <div class="linea"></div>

    <div class="slider-wrapper">
      <button class="slider-btn prev" @click="prevSlide" :disabled="inicio === 0">?</button>
      <div class="slider-container">
        <div class="slider" :style="{ transform: `translateX(-${inicio * anchoCard}px)` }">
          <div v-for="shoe in shoes" :key="shoe.nombre" class="card">
            <img :src="shoe.imagenSrc" :alt="shoe.nombre" class="imagen" />
            <p class="nombre">{{ shoe.referencia }}</p>
            <p class="precio">{{ shoe.precio }}</p>
          </div>
        </div>
      </div>
      <button class="slider-btn next" @click="nextSlide" :disabled="inicio + visibleCards >= shoes.length">?</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const imagenes = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default'
})

const shoes = [
    {
      "nombre": "Zapato azul",
      "precio": 5000,
      "referencia": "G40",
      "foto": "1.jpg"
    },
    {
      "nombre": "Zapato rojo",
      "precio": 5000,
      "referencia": "G40",
      "foto": "2.jpg"
    },
    {
      "nombre": "Zapato verde",
      "precio": 5000,
      "referencia": "G40",
      "foto": "3.jpg"
    },
    {
      "nombre": "Zapato gris",
      "precio": 5000,
      "referencia": "G40",
      "foto": "4.jpg"
    },
    {
      "nombre": "Zapato cafe",
      "precio": 5000,
      "referencia": "G40",
      "foto": "5.jpg"
    },
    {
      "nombre": "Zapato miel",
      "precio": 5000,
      "referencia": "G40",
      "foto": "6.jpg"
    },
    {
      "nombre": "Zapato aguamarina",
      "precio": 5000,
      "referencia": "G40",
      "foto": "7.jpg"
    },
    {
      "nombre": "Zapato piel",
      "precio": 5000,
      "referencia": "G40",
      "foto": "8.jpg"
    },
    {
      "nombre": "Zapato perla",
      "precio": 5000,
      "referencia": "G40",
      "foto": "9.jpg"
    },
    {
      "nombre": "Zapato marinado",
      "precio": 5000,
      "referencia": "G40",
      "foto": "10.jpg"
    },
    {
      "nombre": "Zapato azul1",
      "precio": 5000,
      "referencia": "G40",
      "foto": "11.jpg"
    },
    {
      "nombre": "Zapato azul2",
      "precio": 5000,
      "referencia": "G40",
      "foto": "12.jpg"
    },
    {
      "nombre": "Zapato azul3",
      "precio": 5000,
      "referencia": "G40",
      "foto": "13.jpg"
    },
    {
      "nombre": "Zapato azul4",
      "precio": 5000,
      "referencia": "G40",
      "foto": "14.jpg"
    },
    {
      "nombre": "Zapato azul5",
      "precio": 5000,
      "referencia": "G40",
      "foto": "15.jpg"
    },
    {
      "nombre": "Zapato azul6",
      "precio": 5000,
      "referencia": "G40",
      "foto": "16.jpg"
    },
    {
      "nombre": "Zapato azul7",
      "precio": 5000,
      "referencia": "G40",
      "foto": "17.jpg"
    },
    {
      "nombre": "Zapato azul8",
      "precio": 5000,
      "referencia": "G40",
      "foto": "18.jpg"
    },
    {
      "nombre": "Zapato azul9",
      "precio": 5000,
      "referencia": "G40",
      "foto": "19.jpg"
    },
    {
      "nombre": "Zapato azul10",
      "precio": 5000,
      "referencia": "G40",
      "foto": "20.jpg"
    }
  ]
  

const inicio = ref(0)
const visibleCards = 4
const anchoCard = 200 

function nextSlide() {
  if (inicio.value + visibleCards < shoes.length) {
    inicio.value++
  }
}

function prevSlide() {
  if (inicio.value > 0) {
    inicio.value--
  }
}
onBeforeMount (() => {
  shoes.forEach(shoe => {
  const path = `../assets/${shoe.foto}`
  shoe.imagenSrc = imagenes[path]
})
})
</script>

<style scoped>
.recomendados {
  text-align: center;
  padding: 2rem 1rem;
  overflow: hidden;
}

.titulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  text-align: left;
  margin-left: 0px; 
}

.linea {
  height: 2px;
  width: 100%;
  background-color: #555;
  margin: 0 0 1.5rem 1rem;
}

.slider-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

.slider-btn {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 1rem;
  color: #555;
  user-select: none;
}

.slider-btn:disabled {
  color: #ccc;
  cursor: default;
}

.slider-container {
  overflow: hidden;
  width: 90%; 
}

.slider {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.card {
  min-width: 200px;
  max-width: 200px;
  margin: 0 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  background: white;
}

.imagen {
  width: 100%;
  height: 140px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: #f9f9f9; 
}

.nombre {
  font-size: 14px;
  margin: 0.5rem 0;
  color: #333;
}

.miniaturas {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.miniatura {
  width: 22px;
  height: 22px;
  border: 1px solid #aaa;
  border-radius: 3px;
}

.precio {
  color: #800000;
  font-weight: bold;
  font-size: 14px;
}
</style>
