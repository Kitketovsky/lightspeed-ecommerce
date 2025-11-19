<script setup lang="ts">
import { computed } from 'vue'

import CategoriesError from './components/CategoriesError.vue'
import CategoriesLoading from './components/CategoriesLoading.vue'
import CategoriesGrid from './components/CategoriesGrid.vue'

import UIDataView from '../../lib/components/ui/UIDataView.vue'

import { useCategories } from './composables/useCategories'
import UIBreadcrumbs from '../../lib/components/ui/breadcrumbs/UIBreadcrumbs.vue'
import { useCategoriesBreadcrumbs } from './composables/useCategoriesBreadcrumbs'

const { filteredCategories, isLoading, isError, error } = useCategories()

const isLeafCategory = computed(
	() =>
		filteredCategories.value &&
		filteredCategories.value.length === 0 &&
		!isLoading.value &&
		!isError.value,
)

const { breadcrumbs } = useCategoriesBreadcrumbs()
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
