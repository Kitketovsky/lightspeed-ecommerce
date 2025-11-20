<script setup lang="ts">
import ProductsGridLayout from './ProductsGridLayout.vue'
import ProductSkeleton from './ProductSkeleton.vue'
</script>

<template>
	<ProductsGridLayout>
		<ProductSkeleton v-for="i in 8" :key="i" />
	</ProductsGridLayout>
</template>
