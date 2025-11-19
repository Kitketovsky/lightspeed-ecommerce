<script lang="ts" setup>
import type { StoreCategory } from '../../../lib/types/categories'

import CategoriesGridLayout from './CategoriesGridLayout.vue'
import CategoryCard from './CategoryCard.vue'

defineProps<{
	items: StoreCategory[]
}>()
</script>

<template>
	<CategoriesGridLayout>
		<CategoryCard
			v-for="category in items"
			:key="category.id"
			v-bind="category"
		/>
	</CategoriesGridLayout>
</template>
