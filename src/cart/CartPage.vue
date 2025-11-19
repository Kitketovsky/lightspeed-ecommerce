<script setup lang="ts">
import { useCartStore } from '../lib/stores/cart'

import CartEmpty from './components/CartEmpty.vue'
import CartSummary from './components/CartSummary.vue'
import UIDataView from '../lib/components/ui/UIDataView.vue'
import CartCard from './components/CartCard.vue'

const cartStore = useCartStore()

const handleRemove = (productId: number) => {
	cartStore.removeItem(productId)
}

const handleUpdateQuantity = (productId: number, quantity: number) => {
	cartStore.updateQuantity(productId, quantity)
}
</script>

<template>
	<UIDataView :data="cartStore.cart" heading="Shopping Cart">
		<template #list="{ items }">
			<div class="overflow-hidden rounded-xl bg-white shadow-md">
				<CartCard
					v-for="item in items"
					:key="item.product.id"
					v-bind="item"
					@remove="handleRemove"
					@update-quantity="handleUpdateQuantity"
				/>
			</div>
		</template>

		<template #itemsEmpty>
			<CartEmpty />
		</template>

		<template #footer>
			<CartSummary
				:total-items="cartStore.totalItems"
				:total-price="cartStore.totalPrice"
			/>
		</template>
	</UIDataView>
</template>
