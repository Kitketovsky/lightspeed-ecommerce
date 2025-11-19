<script setup lang="ts">
import type { StoreProduct } from '../../../lib/types/products'

import ProductCardImage from './ProductCardImage.vue'
import ProductCardTitle from './ProductCardTitle.vue'
import ProductCardPrice from './ProductCardPrice.vue'
import ProductCardAddButton from './ProductCardAddButton.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<StoreProduct>()

const emit = defineEmits<{
	'add-to-cart': [product: StoreProduct]
}>()

const handleAddToCart = () => {
	emit('add-to-cart', props)
}
</script>

<template>
	<div
		class="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
	>
		<ProductCardImage
			:product-id="id"
			:thumbnail-url="thumbnailUrl"
			:name="name"
		/>

		<div class="flex grow flex-col gap-6 p-5">
			<ProductCardTitle :product-id="id" :name="name" />

			<div class="mt-auto space-y-4">
				<ProductCardPrice :price="defaultDisplayedPriceFormatted" />
				<ProductCardAddButton @add-to-cart="handleAddToCart" />
			</div>
		</div>
	</div>
</template>
