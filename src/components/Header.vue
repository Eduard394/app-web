<template>
<body>
    <div class="sale-banner">
        HOT SALE -30% EN SANDALIAS
    </div>

    <nav class="top-nav">
        <div class="top-nav-content">
            <a href="#" class="initial">DIRECTORIO DE TIENDAS</a>
            <a href="#">SERVICIO AL CLIENTE</a>
            <a href="#">MI CUENTA</a>
        </div>
    </nav>

    <header class="main-header">
        <div class="header-content">
            <div class="logo-section">
                <div class="">
                  <img :src="logo" alt="Logo" class="logo-img" />
                </div>
                <div class="logo-text">
                    Hush Puppies<span class="registered"></span>
                </div>
            </div>

            <div class="right-section">
                <div class="search-container">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="BUSCAR">
                        <button class="search-btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="free-shipping">
                    ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000 
                </div>

                <a href="#" class="cart-link">
                    <span class="cart-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </span>
                    CARRITO
                    <span class="cart-count">{{ cart.totalItems }}</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
        <div class="nav-content">
            <a href="#" class="nav-link">HOMBRE</a>
            <a href="#" class="nav-link">MUJER</a>
            <a href="#" class="nav-link">BLOG</a>
            <a href="#" class="nav-link">HISTORIA</a>
            <a href="#" class="nav-link">TIENDAS</a>
        </div>
    </nav>
</body>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
import logo from '../assets/12.jpg'

import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
        }

        /* Sale Banner */
        .sale-banner {
            background-color: #8B5A5C;
            color: white;
            text-align: center;
            padding: 12px 0;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        /* Top Navigation Links */
        .top-nav {
            background-color: #acacac;
            padding: 8px 0;
        }

        .top-nav-content {
            max-width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 20px;
            gap: 20px;
        }
        .header-content,
        .nav-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            width: 100%;
            }


        .top-nav a {
            color: #666;
            text-decoration: none;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            transition: color 0.3s ease;
        }

        .top-nav a:hover {
            color: #8B5A5C;
        }

        /* Main Header */
        .main-header {
            background-color: white;
            padding: 20px 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start; /* <--- cambia de center a flex-start */
        }

        /* Logo Section */
        .logo-section {
            display: flex;
            align-items: center;
        }

        .logo-img {
            width: 100px;
            margin-right: 12px
        }

        .logo-text {
            font-size: 28px;
            color: #666;
            font-weight: 300;
        }

        .logo-text .registered {
            font-size: 14px;
            vertical-align: super;
        }

        /* Right Section */
        .right-section {
            display: flex;
            flex-direction: column; /* ? esto lo cambia de fila a columna */
            align-items: center;    /* centra horizontalmente los elementos */
            gap: 15px;              /* espacio vertical entre ellos */
        }

        /* Search Bar */
        .search-container {
            position: relative;
        }

        .search-bar {
            display: flex;
            align-items: center;
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 0;
            transition: border-color 0.3s ease;
        }

        .search-bar:focus-within {
            border-color: #8B5A5C;
        }

        .search-input {
            background: none;
            border: none;
            padding: 12px 20px;
            font-size: 14px;
            width: 250px;
            outline: none;
            color: #666;
        }

        .search-input::placeholder {
            color: #999;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .search-btn {
            background: none;
            border: none;
            padding: 12px 15px;
            cursor: pointer;
            color: #666;
            font-size: 16px;
            transition: color 0.3s ease;
        }

        .search-btn:hover {
            color: #8B5A5C;
        }

        /* Free Shipping Text */
        .free-shipping {
            font-size: 12px;
            color: #666;
            max-width: 200px;
            line-height: 1.3;
        }

        /* Cart */
        .cart-link {
            display: flex;
            align-items: center;
            color: #666;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.3s ease;
            gap: 8px;
        }

        .cart-link:hover {
            color: #8B5A5C;
        }

        .cart-icon {
            font-size: 18px;
        }

        .cart-count {
            background-color: #8B5A5C;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        }

        /* Bottom Navigation */
        .bottom-nav {
            background-color: white;
            border-bottom: 1px solid #e0e0e0;
            padding: 0;
        }

        .nav-content {
            max-width: 100%;
            margin: 0 auto;
            display: flex;
            padding: 0 20px;
        }

        .nav-link {
            color: #666;
            text-decoration: none;
            padding: 18px 25px;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;
        }

        .nav-link:hover {
            color: #8B5A5C;
            border-bottom-color: #8B5A5C;
        }

        .nav-link.active {
            color: #8B5A5C;
            border-bottom-color: #8B5A5C;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 20px;
                padding: 15px;
            }

            .right-section {
                flex-direction: column;
                gap: 15px;
                width: 100%;
            }

            .search-input {
                width: 200px;
            }

            .free-shipping {
                text-align: center;
                max-width: none;
            }

            .nav-content {
                flex-wrap: wrap;
                justify-content: center;
                padding: 0 10px;
            }

            .nav-link {
                padding: 15px 15px;
                font-size: 13px;
            }

            .top-nav-content {
                justify-content: center;
                flex-wrap: wrap;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .logo-text {
                font-size: 24px;
            }

            .search-input {
                width: 150px;
            }

            .sale-banner {
                font-size: 14px;
                padding: 10px 0;
            }
        }
</style>
