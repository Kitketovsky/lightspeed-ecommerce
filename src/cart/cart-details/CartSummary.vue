<script setup lang="ts">
import UIButton from '../../lib/components/ui/UIButton.vue'

defineProps<{
	totalItems: number
	totalPrice: number
}>()

const emit = defineEmits({
	placeOrder: null,
})

function onPlaceOrder() {
	emit('placeOrder')
}
</script>

<template>
	<div class="rounded-xl bg-white p-6 shadow-md">
		<div class="mb-4 flex items-center justify-between">
			<span class="text-lg text-gray-600">Total Items:</span>
			<span class="text-lg font-semibold">{{ totalItems }}</span>
		</div>

		<div class="mb-6 flex items-center justify-between text-xl font-bold">
			<span>Total Price:</span>
			<span class="text-green-600">${{ totalPrice.toFixed(2) }}</span>
		</div>

		<UIButton @click="onPlaceOrder"> Place Order </UIButton>
	</div>
</template>
