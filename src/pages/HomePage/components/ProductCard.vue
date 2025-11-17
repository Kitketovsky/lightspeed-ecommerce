<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../stores/cart'
import type { StoreProduct } from '../../../types/products'

const props = defineProps<StoreProduct>()

const router = useRouter()
const cartStore = useCartStore()

defineOptions({ inheritAttrs: false })

const navigateToProduct = (productId: number) => {
  router.push({ name: 'product', params: { id: productId } })
}

const addToCart = () => {
  cartStore.addItem(props)
}
</script>

<template>
  <div
    class="bg-white flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div
      class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
      @click="navigateToProduct(id)"
    >
      <img
        v-if="thumbnailUrl"
        :src="thumbnailUrl"
        :alt="name"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
      >
        <span class="text-white text-2xl font-bold px-4 text-center">{{
          name
        }}</span>
      </div>
    </div>

    <div class="p-5 grow flex flex-col gap-6">
      <h3
        class="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors cursor-pointer line-clamp-2"
        @click="navigateToProduct(id)"
      >
        {{ name }}
      </h3>

      <div class="space-y-4 mt-auto">
        <p class="text-2xl font-bold text-green-600">
          {{ defaultDisplayedPriceFormatted }}
        </p>
        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 active:scale-95 transform"
          @click="addToCart"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>
