<script lang="ts" setup>
import ProductsGridLayout from './ProductsGridLayout.vue'
import ProductCard from './ProductCard.vue'

import type { StoreProduct } from '../../../lib/types/products'

defineProps<{
	items: StoreProduct[]
}>()
</script>

<template>
	<ProductsGridLayout>
		<ProductCard v-for="product in items" :key="product.id" v-bind="product" />
	</ProductsGridLayout>
</template>
