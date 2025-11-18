import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { $api } from '../api'
import { useQuery } from '@tanstack/vue-query'

export const useCategoriesStore = defineStore('categories', () => {
  const route = useRoute()

  const currentCategoryId = computed(() =>
    route.params.categoryId ? Number(route.params.categoryId) : null,
  )

  const { data, isLoading, isSuccess } = useQuery({
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
    categories: filteredCategories,
    isLoading,
    isSuccess,
    currentCategoryId,
  }
})
