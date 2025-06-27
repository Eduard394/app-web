<template>
  <div class="card">
    <img :src="item.imagenSrc" :alt="item.nombre" class="imagen-principal" />
    <div class="miniaturas">
      <div
        v-for="(color, i) in colores"
        :key="i"
        class="miniatura"
        :style="{ backgroundColor: color }"
      >
        <img :src="item.imagenSrc" alt="variante" class="miniatura-img" />
      </div>
    </div>
    <p class="nombre">{{ item.nombre }}</p>
    <p class="precio">{{ item.precio }}</p>
    <button class="boton">AGREGAR AL CARRITO</button>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})

const colores = ['#444', '#1e88e5', '#8e24aa', '#f2690a']
</script>

<style scoped>
.card {
  width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.imagen-principal {
  width: 100%;
  height: 140px;
  object-fit: contain;
  background-color: #f9f9f9;
  margin-bottom: 8px;
}

.miniaturas {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 10px;
}

.miniatura {
  width: 26px;
  height: 26px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.miniatura-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  opacity: 0.95;
}

.nombre {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 5px 0;
}

.precio {
  font-size: 15px;
  font-weight: bold;
  color: #773b47;
  margin: 4px 0 12px;
}

.boton {
  background-color: #5c2b3b;
  color: white;
  border: none;
  padding: 10px 0;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  border-radius: 2px;
}
</style>
