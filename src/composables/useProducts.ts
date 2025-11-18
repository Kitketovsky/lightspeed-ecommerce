import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { $api } from '../api'
import { useRoute } from 'vue-router'

export function useProducts() {
  const route = useRoute()

  const currentCategoryId = computed(() =>
    route.params.categoryId ? Number(route.params.categoryId) : null,
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
