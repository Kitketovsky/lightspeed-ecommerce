import type { http as HttpType } from '../http'
import type { ApiGetCategoriesResponse } from './categories-types'

export default (http: typeof HttpType) => ({
	async getCategories() {
		return await http<ApiGetCategoriesResponse>('/categories', {
			query: {
				responseFields: 'items(id,name,productCount,parentId,imageUrl)',
				withSubcategories: true,
			},
		})
	},
})
