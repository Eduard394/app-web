import { defineStore } from 'pinia'
import sizesJson from '@/data/sizes.json'

export const useSizesStore = defineStore('sizes', {
    state: () => ({
        sizes: []
    }),
    actions: {
        loadSizes() {
            this.sizes = sizesJson
        }
    },
    getters: {
        getSizes() {
            console.log("en store de sizes")
            return this.sizes
        }
    }
})
