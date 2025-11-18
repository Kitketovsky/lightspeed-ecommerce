import type { http as HttpType } from './http'
import type {
  ApiGetProductResponse,
  ApiGetProductsResponse,
} from '../types/products'

export default (http: typeof HttpType) => ({
  async getProducts({
    categoryId,
  }: { categoryId?: string | number | null } = {}) {
    const query = {
      responseFields:
        // defaultCategoryId,categoryIds
        'items(id,name,description,imageUrl,thumbnailUrl,price,defaultDisplayedPriceFormatted)',
      includeProductsFromSubcategories: true,
      ...(categoryId && { category: categoryId }),
    }

    return await http<ApiGetProductsResponse>('/products', {
      query,
    })
  },

  async getProduct({ id }: { id: number }) {
    return await http<ApiGetProductResponse>(`/products/${id}`)
  },
})
