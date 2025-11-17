<script setup lang="ts">
import { useProductStore } from '../../stores/products'
import { useRouter } from 'vue-router'

import CategoriesSection from './components/CategoriesSection.vue'
import ProductsSection from './components/ProductsSection.vue'

const router = useRouter()
const store = useProductStore()

const goBackToAllCategories = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex items-center gap-4 mb-8">
        <h1 class="text-4xl font-bold text-gray-800">
          {{ store.currentCategory ? store.currentCategory.name : 'Store' }}
        </h1>

        <button
          v-if="store.currentCategoryId"
          @click="goBackToAllCategories"
          class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-lg transition-colors shadow-sm"
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
          Back to All Categories
        </button>
      </div>

      <!-- TODO: do I need to offload fetching and storing information on state management or on components? -->
      <CategoriesSection />
      <ProductsSection />
    </div>
  </div>
</template>
