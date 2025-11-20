<script setup lang="ts">
import IconCart from '../lib/components/icons/IconCart.vue'
import { $router } from '../lib/router/router'

const continueShopping = () => {
	$router.push('/')
}
</script>

<template>
	<div class="py-16 text-center">
		<IconCart class="mx-auto mb-4 h-24 w-24 text-gray-300!" />

		<span class="mb-8 block text-3xl font-semibold text-gray-700">
			Your cart is empty
		</span>

		<button
			@click="continueShopping"
			class="rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
		>
			Continue Shopping
		</button>
	</div>
</template>
