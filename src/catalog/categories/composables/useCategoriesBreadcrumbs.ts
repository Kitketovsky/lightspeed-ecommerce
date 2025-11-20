import { computed, type Ref } from 'vue'

import type { Breadcrumbs } from '../../../lib/components/ui/breadcrumbs/types'
import type { StoreCategory } from '../../../lib/api/categories/categories-types'

export function useCategoriesBreadcrumbs({
	categories,
	currentCategoryId,
}: {
	categories: Ref<StoreCategory[], StoreCategory[]> | Ref<undefined, undefined>
	currentCategoryId: Ref<number, number> | Ref<null, null>
}) {
	const breadcrumbs = computed<Breadcrumbs>(() => {
		const items: Breadcrumbs = [
			{
				id: 'home',
				name: 'Home',
				options: { name: 'home' },
			},
		]

		if (!currentCategoryId.value || !categories.value) {
			return items
		}

		const categoryChain: StoreCategory[] = []

		let currentCategory = categories.value.find(
			(cat) => cat.id === currentCategoryId.value,
		)

		while (currentCategory) {
			categoryChain.unshift(currentCategory)
			currentCategory = currentCategory.parentId
				? categories.value.find((cat) => cat.id === currentCategory!.parentId)
				: undefined
		}

		categoryChain.forEach((category) => {
			items.push({
				id: category.id,
				name: category.name,
				options: {
					name: 'category',
					params: { categoryId: category.id },
				},
			})
		})

		return items
	})

	return {
		breadcrumbs,
	}
}
