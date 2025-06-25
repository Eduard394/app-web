<template>
  <div class="gallery">
    <img :src="selectedImage" class="main-image" />
    <div class="thumbnails">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        :class="{ active: selectedImage === img }"
        @click="selectedImage = img"
      />
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
.main-image {
  width: 100%;
  max-width: 400px;
  object-fit: contain;
}
.thumbnails {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
.thumbnails img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
  border: 2px solid transparent;
}
.thumbnails img.active {
  border-color: #8b5a5c;
}
</style>