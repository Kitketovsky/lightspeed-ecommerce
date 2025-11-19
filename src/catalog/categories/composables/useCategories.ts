import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import { $api } from '../../../lib/api'
import { $route } from '../../../lib/router/router'

export function useCategories() {
	const currentCategoryId = computed(() =>
		$route.value.params.categoryId
			? Number($route.value.params.categoryId)
			: null,
	)

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['categories'],
		queryFn: $api.categories.getCategories,
		select: (data) => data.items,
	})

	const filteredCategories = computed(() => {
		const rootCategories = data.value?.filter((category) => !category.parentId)

		if (!currentCategoryId.value) return rootCategories

		const filteredCategories = data.value?.filter(
			(category) => category.parentId === currentCategoryId.value,
		)

		return filteredCategories
	})

	return {
		categories: data,
		currentCategoryId,
		filteredCategories,
		isLoading,
		isError,
		error,
	}
}
