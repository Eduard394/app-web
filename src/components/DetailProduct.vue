<script setup>
import { ref, reactive  } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
import logo from '../assets/12.jpg'

const producto = reactive({
  name: 'Audífonos Inalámbricos',
  price: 49.99,
  description: 'Sonido de alta fidelidad con cancelación de ruido.',
  image: 'https://via.placeholder.com/400x300',
  stock: 12
})

</script>

<template>
<div>
   <!-- <div class="product-section">
        <div class="product-images">
            <img :src="selectedImage" alt="Zapatilla Hombre Pelikan" class="main-image">
            <div class="thumbnail-images">
                <img v-for="(image, index) in productImages" 
                        :key="index"
                        :src="image" 
                        :class="['thumbnail', { active: selectedImage === image }]"
                        @click="selectedImage = image">
            </div>
        </div>

        <div class="product-info">
            <h1>ZAPATILLA HOMBRE PELIKAN</h1>
            <div class="price">${{ product.price.toLocaleString() }}</div>
            <div class="product-code">Cod. de producto: {{ product.code }}</div>

            <div class="options">
                <div class="option-group">
                    <label class="option-label">COLOR</label>
                    <div class="color-options">
                        <div v-for="color in product.colors" 
                                :key="color.name"
                                :class="['color-option', { active: selectedColor === color.name }]"
                                :style="{ backgroundImage: `url(${color.image})` }"
                                @click="selectedColor = color.name">
                        </div>
                    </div>
                </div>

                <div class="option-group">
                    <label class="option-label">TALLA</label>
                    <div class="size-options">
                        <div v-for="size in product.sizes" 
                                :key="size"
                                :class="['size-option', { active: selectedSize === size }]"
                                @click="selectedSize = size">
                            {{ size }}
                        </div>
                    </div>
                    <a href="#" class="size-guide">GUÍA DE TALLAS</a>
                </div>
            </div>

            <div class="add-to-cart">
                <button class="btn-add-cart" @click="addToCart">AÑADIR AL CARRITO</button>
                <button class="wishlist-btn" @click="toggleWishlist">
                    {{ isWishlisted ? '??' : '??' }}
                </button>
            </div>
        </div>
    </div>-->
    <div class="product-details">
        <div class="details-section">
            <h3>DETALLES DE PRODUCTO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra id nec dolor. Praesent sodales augue ligula, ut euismod tortor lacinia non. Etiam tristique quam quis rutrum aliquam. Vestibulum ut placerat orci. Etiam consequat accumsan suscipit. Praesent fermentum orci et, vitae dignissim turpis faucibus ac. Aenean dictum feugiat metus, id maximus mauris consectetur ac.</p>
        </div>

        <div class="details-section">
            <h3>TECNOLOGÍAS</h3>
            <p>Quisque tellus odio, varius consequat interdum at, molestie viverra lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum tellus arcu et lorem.</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
