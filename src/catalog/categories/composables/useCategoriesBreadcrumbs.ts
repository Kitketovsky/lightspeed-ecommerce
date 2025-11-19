import { computed } from 'vue'
import type { StoreCategory } from '../../../lib/types/categories'
import { useCategories } from './useCategories'
import type { RouterLinkProps } from 'vue-router'

type Breadcrumbs = {
	id: string | number
	name: string
	options: RouterLinkProps['to']
}[]

export function useCategoriesBreadcrumbs() {
	const { categories, currentCategoryId } = useCategories()

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
