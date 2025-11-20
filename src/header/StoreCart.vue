<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { useCartStore } from '../lib/stores/cart'

import IconCart from '../lib/components/icons/IconCart.vue'
import UIBadge from '../lib/components/ui/UIBadge.vue'

const CART_STORAGE_KEY = 'ecwid-cart'

const cartStore = useCartStore()

const localCart = useStorage(CART_STORAGE_KEY, cartStore.cart)

onMounted(() => {
	cartStore.cart = localCart.value
})

watch(cartStore.cart, () => {
	localCart.value = cartStore.cart
})
</script>

<template>
	<RouterLink
		to="/cart"
		class="relative rounded-lg p-2 transition-colors hover:bg-gray-100"
		aria-label="Shopping cart"
	>
		<IconCart />

		<UIBadge v-if="cartStore.totalItems">{{ cartStore.totalItems }}</UIBadge>
	</RouterLink>
</template>
