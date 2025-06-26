import { defineStore } from 'pinia'
import zapatosJson from '@/data/zapato.json'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: []
    }),
    actions: {
        loadProducts() {
            this.products = zapatosJson
        }
    },
    getters: {
        productsCount: (state) => state.products.length,
        randomProduct: (state) => {
            if (state.products.length === 0) return null
            const index = Math.floor(Math.random() * state.products.length)
            return state.products[index]
        },
        productsSuggest: (state) => {
            return (n = 4) => {
                const copia = [...state.products]
                const randoms = []

                while (randoms.length < n && copia.length > 0) {
                    const index = Math.floor(Math.random() * copia.length)
                    randoms.push(copia.splice(index, 1)[0])
                }

                return randoms
            }
        }
    }
})
