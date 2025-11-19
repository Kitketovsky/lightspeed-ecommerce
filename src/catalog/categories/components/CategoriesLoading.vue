<script setup lang="ts">
import CategoriesGridLayout from './CategoriesGridLayout.vue'
import CategorySkeleton from './CategorySkeleton.vue'
</script>

<template>
	<CategoriesGridLayout>
		<CategorySkeleton v-for="i in 2" :key="i" />
	</CategoriesGridLayout>
</template>
