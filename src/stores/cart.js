import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addToCart(product) {
            this.items.push(product)
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        itemCount: (state) => state.items.length
    }
})