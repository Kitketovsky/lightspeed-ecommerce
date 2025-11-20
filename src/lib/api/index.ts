import products from './products/products'
import categories from './categories/categories'

import { http } from './http'

export const $api = {
	products: products(http),
	categories: categories(http),
}
