import type { ApiResponse } from '../api-types'

export interface StoreProduct {
	id: number
	name: string
	description: string
	imageUrl: string
	thumbnailUrl: string
	price: number
	defaultDisplayedPriceFormatted: string
}

export type ApiGetProductsResponse = ApiResponse<StoreProduct[]>

export type ApiGetProductResponse = StoreProduct
