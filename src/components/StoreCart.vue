<script setup lang="ts">
import { Button } from 'primevue'
import { useSyncCart } from '../composables/useSyncCart'
import IconCart from './icons/IconCart.vue'
import StoreCartItemCounter from './StoreCartItemCounter.vue'

useSyncCart()
</script>

<template>
	<Button as-child v-slot="slotProps">
		<RouterLink
			to="/cart"
			class="relative rounded-lg p-2 transition-colors hover:bg-gray-100"
			:class="slotProps"
			aria-label="Shopping cart"
		>
			<IconCart />
			<StoreCartItemCounter />
		</RouterLink>
	</Button>
</template>
