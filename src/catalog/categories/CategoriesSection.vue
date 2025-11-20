<script setup lang="ts">
import { computed } from 'vue'

import UIDataView from '../../lib/components/ui/UIDataView.vue'
import UIBreadcrumbs from '../../lib/components/ui/breadcrumbs/UIBreadcrumbs.vue'

import { useCategories } from './composables/useCategories'
import { useCategoriesBreadcrumbs } from './composables/useCategoriesBreadcrumbs'

import CategoriesError from './CategoriesError.vue'
import CategoriesLoading from './CategoriesLoading.vue'
import CategoriesGrid from './CategoriesGrid.vue'

const {
	categories,
	filteredCategories,
	isLoading,
	isError,
	error,
	currentCategoryId,
} = useCategories()

const isLeafCategory = computed(
	() =>
		filteredCategories.value &&
		filteredCategories.value.length === 0 &&
		!isLoading.value &&
		!isError.value,
)

const { breadcrumbs } = useCategoriesBreadcrumbs({
	categories,
	currentCategoryId,
})
</script>

<template>
	<UIBreadcrumbs :breadcrumbs="breadcrumbs" />

	<UIDataView
		:data="filteredCategories"
		:loading="isLoading"
		:error="isError"
		:hidden="isLeafCategory"
		layout="grid"
		heading="Categories"
	>
		<template #grid="{ items }">
			<CategoriesGrid :items="items" />
		</template>

		<template #gridLoading>
			<CategoriesLoading />
		</template>

		<template #itemsError>
			<CategoriesError :error="error" />
		</template>
	</UIDataView>
</template>
