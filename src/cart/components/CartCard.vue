<script lang="ts" setup>
import type { CartItem } from '../../lib/stores/cart'

import CartCardImage from './CartCardImage.vue'
import CartCardInfo from './CartCardInfo.vue'
import CartCardQuantityControls from './CartCardQuantityControls.vue'
import CartCardRemoveButton from './CartCardRemoveButton.vue'

const { product, quantity } = defineProps<CartItem>()

const emit = defineEmits<{
	remove: [productId: number]
	'update-quantity': [productId: number, quantity: number]
}>()

const handleIncrement = () => {
	emit('update-quantity', product.id, quantity + 1)
}

const handleDecrement = () => {
	emit('update-quantity', product.id, quantity - 1)
}

const handleRemove = () => {
	emit('remove', product.id)
}
</script>

<template>
	<div
		class="flex items-center gap-4 border-b border-b-gray-200 p-6 transition-colors last:border-b-0 hover:bg-gray-50"
	>
		<CartCardImage :image-url="product.imageUrl" :name="product.name" />

		<CartCardInfo
			:name="product.name"
			:price="product.defaultDisplayedPriceFormatted"
		/>

		<CartCardQuantityControls
			:quantity="quantity"
			@increment="handleIncrement"
			@decrement="handleDecrement"
		/>

		<CartCardRemoveButton @remove="handleRemove" />
	</div>
</template>
