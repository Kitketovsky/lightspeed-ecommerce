import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { $api } from '../../../lib/api'
import { $route } from '../../../lib/router/router'

export function useProducts() {
	const currentCategoryId = computed(() =>
		$route.value.params.categoryId
			? Number($route.value.params.categoryId)
			: null,
	)

	const queryKey = computed(() => ['products', currentCategoryId])

	const { data, isLoading, isError, error } = useQuery({
		queryKey,
		queryFn: () =>
			$api.products.getProducts({
				categoryId: currentCategoryId.value,
			}),
		select: (data) => data.items,
	})

	return { data, isLoading, isError, error }
}
