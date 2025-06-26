import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addToCart(product, size) {
            const exist = this.items.find(
                item => item.product === product && item.talla === size
            )
            if (exist) {
                exist.count++
            } else {
                this.items.push({ product, size, count: 1 })
            }
        }
    },
    getters: {
        totalItems: (state) => {
            return state.items.reduce((acc, item) => acc + item.count, 0)
        }
    }
})
