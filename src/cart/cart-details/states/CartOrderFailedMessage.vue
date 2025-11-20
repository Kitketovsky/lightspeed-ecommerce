<script setup lang="ts">
import { RouterLink } from 'vue-router'
import UIButton from '../../../lib/components/ui/UIButton.vue'
</script>

<template>
	<div>
		<div
			class="mb-8 rounded-lg border-2 border-red-500 bg-red-50 p-8 text-center"
		>
			<h2 class="mb-2 text-3xl font-bold text-red-700">Order Failed</h2>
			<p class="text-lg text-red-600">
				Unfortunately, your order could not be processed. Please try again.
			</p>
		</div>

		<div class="flex items-center justify-center gap-4">
			<RouterLink :to="{ name: 'cart' }">
				<UIButton class="max-w-sm">Back to Cart</UIButton>
			</RouterLink>
			<RouterLink :to="{ name: 'home' }">
				<UIButton class="max-w-sm">Home</UIButton>
			</RouterLink>
		</div>
	</div>
</template>
