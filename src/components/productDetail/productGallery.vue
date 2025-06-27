<template>
  <div class="gallery">
    <div class="main-image-container">
      <img :src="selectedImage" class="main-image" />
    </div>

    <!-- Línea divisoria -->
    <hr class="divider" />

    <div class="thumbnails">
      <div
        class="thumbnail-container"
        v-for="(img, i) in images"
        :key="i"
        :class="{ active: selectedImage === img }"
        @click="selectedImage = img"
      >
        <img :src="img" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ images: Array })
const selectedImage = ref(props.images[0])

watch(() => props.images, (newImgs) => {
  selectedImage.value = newImgs[0]
})
</script>

<style scoped>
.gallery {
  flex: 1;
  text-align: center;
}

.main-image-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.thumbnail-container {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.thumbnail-container.active {
  border-color: #8b5a5c;
}

.thumbnail-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.divider {
  margin: 30px auto 15px;
  border: none;
  border-top: 1px solid #ccc;
  width: 80%;
}
</style>
