<script lang="ts" setup>
import { useAsyncState } from '@vueuse/core'
import { useRoute, type LocationQueryValue } from 'vue-router'
import { $api } from '../../../api'
import StoreSection from '../../../components/StoreSection.vue'
import ProductCard from './ProductCard.vue'

const route = useRoute()

const { state: products } = useAsyncState(
  $api.products
    .getProducts({
      categoryId: (route.query.category as LocationQueryValue) ?? null,
    })
    .then((v) => {
      console.log('products fetched')
      return v.items
    }),
  [],
)
</script>

<template>
  <StoreSection v-if="products.length" heading="Products">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>

    <div v-if="!products.length" class="text-center py-12 text-gray-500">
      <p class="text-xl">No items found in this category</p>
    </div>
  </StoreSection>
</template>
