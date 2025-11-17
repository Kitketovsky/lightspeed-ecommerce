<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import type { StoreProduct } from '../types/products'
import { $api } from '../api'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const error = ref('')
const loading = ref(true)
const product = ref<StoreProduct | null>(null)

onMounted(async () => {
  const productId = Number(route.params.id)

  if (isNaN(productId)) {
    error.value = 'Invalid product ID'
    loading.value = false
    return
  }

  try {
    const response = await $api.products.getProduct({ id: productId })
    product.value = response
  } catch (responseError) {
    error.value = (responseError as Error).message
  }

  loading.value = false
})

const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value)
  }
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Back
      </button>

      <!-- Error State -->
      <div v-if="error" class="text-center py-16">
        <svg
          class="w-16 h-16 text-red-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Product Not Found
        </h2>
        <p class="text-gray-600 mb-6">{{ error }}</p>
        <button
          @click="goBack"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Go Back
        </button>
      </div>

      <!-- Product Details -->
      <div v-if="product" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="grid md:grid-cols-2 gap-8 p-8">
          <!-- Product Image -->
          <div class="space-y-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                v-if="product.imageUrl"
                :src="product.imageUrl"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
              >
                <span class="text-white text-6xl font-bold">{{
                  product.name[0]
                }}</span>
              </div>
            </div>
          </div>

          <!-- Product Info -->
          <div class="flex flex-col">
            <div class="grow">
              <h1 class="text-4xl font-bold text-gray-800 mb-4">
                {{ product.name }}
              </h1>

              <div class="mb-6">
                <span class="text-4xl font-bold text-green-600">
                  {{ product.defaultDisplayedPriceFormatted }}
                </span>
              </div>

              <div class="mb-8">
                <h2 class="text-xl font-semibold text-gray-700 mb-3">
                  Description
                </h2>
                <div
                  v-if="product.description"
                  class="prose prose-gray max-w-none text-gray-600 leading-relaxed"
                  v-html="product.description"
                ></div>
                <p v-else class="text-gray-500 italic">
                  No description available
                </p>
              </div>
            </div>

            <!-- Buy Button -->
            <div class="space-y-4">
              <button
                @click="addToCart"
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 active:scale-95 transform text-lg shadow-md hover:shadow-lg"
              >
                <span class="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for product description HTML */
.prose :deep(p) {
  margin-bottom: 1rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(strong) {
  font-weight: 600;
}

.prose :deep(a) {
  color: #4f46e5;
  text-decoration: underline;
}

.prose :deep(a:hover) {
  color: #4338ca;
}
</style>
