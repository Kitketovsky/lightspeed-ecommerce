export interface ApiResponse<T> {
	count: number
	limit: number
	offset: number
	total: number
	items: T
}
