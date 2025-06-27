<template>
  <section class="recomendados">
    <h2 class="titulo">PRODUCTOS RECOMENDADOS</h2>
    <div class="linea"></div>
    <div class="slider-wrapper">
      <button class="slider-btn prev" @click="prevSlide" :disabled="inicio === 0">‹</button>
      <div class="slider-container">
        <div class="slider" :style="{ transform: `translateX(-${inicio * anchoCard}px)` }">
          <div v-for="shoe in shoesWithImages" :key="shoe.nombre" class="card">
            <img :src="shoe.imagenSrc" :alt="shoe.nombre" class="imagen" />

            <div class="miniaturas">
              <img
                v-for="(filtro, idx) in colorFilters"
                :key="idx"
                :src="shoe.imagenSrc"
                :style="{ filter: filtro }"
                class="miniatura"
              />
            </div>

            <p class="nombre">{{ shoe.nombre }}</p>
            <p class="precio">${{ shoe.precio }}</p>
          </div>
        </div>
      </div>
      <button class="slider-btn next" @click="nextSlide" :disabled="inicio + visibleCards >= shoesWithImages.length">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  shoes: {
    type: Array,
    required: true
  }
})

const imagenes = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default'
})

const inicio = ref(0)
const visibleCards = 4
const anchoCard = 220

const shoesWithImages = computed(() => {
  return props.shoes.map(shoe => {
    const path = `../assets/${shoe.foto}`
    return {
      ...shoe,
      imagenSrc: imagenes[path] || ''
    }
  })
})

const colorFilters = [
  'none',
  'hue-rotate(60deg)',
  'hue-rotate(120deg)',
  'hue-rotate(200deg)'
]

function nextSlide() {
  if (inicio.value + visibleCards < shoesWithImages.value.length) {
    inicio.value++
  }
}

function prevSlide() {
  if (inicio.value > 0) {
    inicio.value--
  }
}
</script>

<style scoped>
.recomendados {
  padding: 2rem 1rem;
  overflow: hidden;
}

.titulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  margin-left: 1rem;
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
  justify-content: center;
  position: relative;
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
  width: 200px;
  flex-shrink: 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0.5rem;
  background: white;
  margin: 0 0.5rem;
}

.imagen {
  width: 100%;
  height: 140px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.miniaturas {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin: 0.5rem 0;
}

.miniatura {
  width: 22px;
  height: 22px;
  border-radius: 3px;
  object-fit: cover;
}

.nombre {
  font-size: 14px;
  font-weight: 500;
  min-height: 32px;
  color: #333;
}

.precio {
  color: #800000;
  font-weight: bold;
  font-size: 14px;
}
</style>
