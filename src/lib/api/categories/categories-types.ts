import type { ApiResponse } from '../api-types'

export interface StoreCategory {
	id: number
	name: string
	productCount?: number
	parentId?: number
	imageUrl?: string
}

export type ApiGetCategoriesResponse = ApiResponse<StoreCategory[]>
