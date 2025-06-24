<template>
  <div class="card">
    <img :src="item.imagenSrc" :alt="item.nombre" class="imagen" />

    <div class="variantes">
      <img
        v-for="(color, i) in item.variantes"
        :key="i"
        :src="color"
        alt="variante"
        class="miniatura"
      />
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
</script>

<style scoped>
.card {
  width: 300px;
  min-height: auto;
  background-color: white;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: center;
}

.imagen {
  width: 100%;
  height: 140px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.variantes {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 0.5rem;
}

.miniatura {
  width: 22px;
  height: 22px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.nombre {
  font-size: 14px;
  font-weight: 500;
  min-height: 32px;
}

.precio {
  font-size: 14px;
  color: #800000;
  font-weight: bold;
}

.boton {
  margin-top: 0.5rem;
  background-color: #5c2b3b;
  color: white;
  border: none;
  padding: 10px;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
}
</style>
