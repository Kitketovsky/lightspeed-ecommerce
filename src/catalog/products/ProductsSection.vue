<script setup lang="ts">
import UIDataView from '../../lib/components/ui/UIDataView.vue'

import ProductsError from './components/ProductsError.vue'
import ProductsEmpty from './components/ProductsEmpty.vue'
import ProductsLoading from './components/ProductsLoading.vue'
import ProductsGridLayout from './components/ProductsGridLayout.vue'
import ProductCard from './components/ProductCard.vue'

import { useProducts } from './composables/useProducts'
import { useCartStore } from '../../lib/stores/cart'
import type { StoreProduct } from '../../lib/types/products'

const { data, isLoading, isError, error } = useProducts()

const cartStore = useCartStore()

const handleAddToCart = (product: StoreProduct) => {
	cartStore.addItem(product)
}
</script>

<template>
	<UIDataView
		:data="data"
		:loading="isLoading"
		:error="isError"
		layout="grid"
		heading="Products"
	>
		<template #grid="{ items }">
			<ProductsGridLayout>
				<ProductCard
					v-for="product in items"
					v-bind="product"
					:key="product.id"
					@add-to-cart="handleAddToCart"
				/>
			</ProductsGridLayout>
		</template>

		<template #gridLoading>
			<ProductsLoading />
		</template>

		<template #itemsError>
			<ProductsError :error="error" />
		</template>

		<template #itemsEmpty>
			<ProductsEmpty />
		</template>
	</UIDataView>
</template>
