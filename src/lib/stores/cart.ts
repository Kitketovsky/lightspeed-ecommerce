import { defineStore } from 'pinia'
import type { StoreProduct } from '../api/products/products-types'

export interface CartItem {
	product: StoreProduct
	quantity: number
}

export type Cart = CartItem[]

export const useCartStore = defineStore('cart', {
	state() {
		return {
			cart: [] as Cart,
		}
	},

	getters: {
		totalItems: (state) =>
			state.cart.reduce((total, curr) => total + curr.quantity, 0),

		totalPrice: (state) =>
			state.cart.reduce(
				(total, curr) => total + curr.product.price * curr.quantity,
				0,
			),

		isCartEmpty: (state) => state.cart.length === 0,
	},

	actions: {
		addItem(product: StoreProduct) {
			const existingItem = this.cart.find(
				(item) => item.product.id === product.id,
			)

			if (existingItem) {
				existingItem.quantity++
			} else {
				this.cart.push({
					product,
					quantity: 1,
				})
			}
		},

		removeItem(productId: number) {
			const index = this.cart.findIndex((item) => item.product.id === productId)

			if (index !== -1) {
				this.cart.splice(index, 1)
			}
		},

		updateQuantity(productId: number, quantity: number) {
			const item = this.cart.find((item) => item.product.id === productId)

			if (item) {
				if (quantity <= 0) {
					this.removeItem(productId)
				} else {
					item.quantity = quantity
				}
			}
		},

		clearCart() {
			this.cart = []
		},
	},
})
