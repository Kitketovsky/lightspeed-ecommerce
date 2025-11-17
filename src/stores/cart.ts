import { defineStore } from 'pinia'
import type { StoreProduct } from '../types/products'

export interface CartItem {
  product: StoreProduct
  quantity: number
}

interface CartStore {
  items: CartItem[]
}

const CART_STORAGE_KEY = 'ecwid-cart'

export const useCartStore = defineStore('cart', {
  state: (): CartStore => ({
    items: [],
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      )
    },
    isEmpty: (state) => state.items.length === 0,
  },

  actions: {
    loadFromLocalStorage() {
      try {
        const stored = localStorage.getItem(CART_STORAGE_KEY)
        if (stored) {
          this.items = JSON.parse(stored)
        }
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error)
        this.items = []
      }
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items))
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error)
      }
    },

    addItem(product: StoreProduct) {
      const existingItem = this.items.find(
        (item) => item.product.id === product.id,
      )

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          product,
          quantity: 1,
        })
      }

      this.saveToLocalStorage()
    },

    removeItem(productId: number) {
      const index = this.items.findIndex(
        (item) => item.product.id === productId,
      )
      if (index !== -1) {
        this.items.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.product.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
          this.saveToLocalStorage()
        }
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
  },
})
