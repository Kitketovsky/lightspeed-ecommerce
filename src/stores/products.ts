import { defineStore } from 'pinia'
import type { StoreProduct } from '../types/products'
import type { StoreCategory } from '../types/categories'
import { $api } from '../api'

interface ProductsStore {
  products: StoreProduct[]
  categories: StoreCategory[]
  allCategories: StoreCategory[]
  loading: boolean
  error: string | null
  currentCategoryId: number | null
}

export const useProductStore = defineStore('products', {
  state: (): ProductsStore => ({
    products: [],
    categories: [],
    allCategories: [],
    loading: false,
    error: null,
    currentCategoryId: null,
  }),

  getters: {
    getProductsByCategory: (state) => (categoryId?: number) => {
      if (!categoryId) return state.products
      return state.products.filter(
        (product) =>
          product.defaultCategoryId === categoryId ||
          product.categoryIds?.includes(categoryId),
      )
    },
    currentCategory: (state) => {
      if (!state.currentCategoryId) return null
      return (
        state.allCategories.find((cat) => cat.id === state.currentCategoryId) ||
        null
      )
    },
  },

  actions: {
    async fetchData(categoryId?: number) {
      this.loading = true
      this.error = null
      this.currentCategoryId = categoryId || null

      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          $api.products.getProducts({ categoryId }),
          $api.categories.getCategories(),
        ])

        this.allCategories = categoriesResponse.items
        this.products = productsResponse.items

        // Filter categories: if categoryId is provided, show only subcategories
        // Otherwise show only root categories (no parent)
        if (categoryId) {
          this.categories = this.allCategories.filter(
            (cat) => cat.parentId === categoryId,
          )
        } else {
          this.categories = this.allCategories.filter((cat) => !cat.parentId)
        }
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Unknown error occurred'
      } finally {
        this.loading = false
      }
    },
  },
})
