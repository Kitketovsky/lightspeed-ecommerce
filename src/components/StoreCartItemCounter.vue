<script lang="ts" setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
	<span
		v-if="cartStore.totalItems > 0"
		class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
	>
		{{ cartStore.totalItems }}
	</span>
</template>
