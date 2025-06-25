import { defineStore } from 'pinia'
import zapatosJson from '@/data/zapato.json'

export const useProductosStore = defineStore('productos', {
    state: () => ({
        productos: []
    }),
    actions: {
        cargarProductos() {
            this.productos = zapatosJson
        }
    },
    getters: {
        productosCount: (state) => state.productos.length
    }
})
