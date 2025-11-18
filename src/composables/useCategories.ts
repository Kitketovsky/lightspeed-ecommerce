import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { $api } from '../api'

export function useCategories() {
  const route = useRoute()

  const currentCategoryId = computed(() =>
    route.params.categoryId ? Number(route.params.categoryId) : null,
  )

  const { data, isLoading, isError } = useQuery({
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

  return { filteredCategories, isLoading, isError }
}
