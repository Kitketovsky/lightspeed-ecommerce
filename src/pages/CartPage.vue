<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()
const orderPlaced = ref(false)

const removeItem = (productId: number) => {
  cartStore.removeItem(productId)
}

const updateQuantity = (productId: number, quantity: number) => {
  cartStore.updateQuantity(productId, quantity)
}

const placeOrder = () => {
  orderPlaced.value = true
  setTimeout(() => {
    cartStore.clearCart()
    orderPlaced.value = false
    router.push('/')
  }, 3000)
}

const continueShopping = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

      <!-- Order Success Message -->
      <div
        v-if="orderPlaced"
        class="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center mb-8 animate-fade-in"
      >
        <svg
          class="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 class="text-3xl font-bold text-green-700 mb-2">Congratulations!</h2>
        <p class="text-lg text-green-600">
          Your order has been placed successfully!
        </p>
        <p class="text-sm text-gray-600 mt-2">
          Redirecting you to the store...
        </p>
      </div>

      <!-- Empty Cart -->
      <div v-else-if="cartStore.isEmpty" class="text-center py-16">
        <svg
          class="w-24 h-24 text-gray-300 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h2 class="text-2xl font-semibold text-gray-600 mb-4">
          Your cart is empty
        </h2>
        <button
          @click="continueShopping"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Continue Shopping
        </button>
      </div>

      <!-- Cart Items -->
      <div v-else>
        <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div
            v-for="item in cartStore.items"
            :key="item.product.id"
            class="flex items-center gap-4 p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
          >
            <!-- Product Image -->
            <div
              class="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0"
            >
              <img
                v-if="item.product.thumbnailUrl"
                :src="item.product.thumbnailUrl"
                :alt="item.product.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
              >
                <span class="text-white text-xl font-bold">{{
                  item.product.name[0]
                }}</span>
              </div>
            </div>

            <!-- Product Info -->
            <div class="grow">
              <h3 class="text-lg font-semibold text-gray-800 mb-1">
                {{ item.product.name }}
              </h3>
              <p class="text-xl font-bold text-green-600">
                {{ item.product.defaultDisplayedPriceFormatted }}
              </p>
            </div>

            <!-- Quantity Controls -->
            <div class="flex items-center gap-3">
              <button
                @click="updateQuantity(item.product.id, item.quantity - 1)"
                class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                :disabled="item.quantity <= 1"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span class="text-lg font-semibold w-8 text-center">{{
                item.quantity
              }}</span>
              <button
                @click="updateQuantity(item.product.id, item.quantity + 1)"
                class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <!-- Delete Button -->
            <button
              @click="removeItem(item.product.id)"
              class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Remove item"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg text-gray-600">Total Items:</span>
            <span class="text-lg font-semibold">{{
              cartStore.totalItems
            }}</span>
          </div>
          <div class="flex justify-between items-center mb-6 text-xl font-bold">
            <span>Total Price:</span>
            <span class="text-green-600"
              >${{ cartStore.totalPrice.toFixed(2) }}</span
            >
          </div>
          <button
            @click="placeOrder"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
