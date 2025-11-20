<script setup lang="ts">
import { RouterLink } from 'vue-router'
import UIButton from '../../../lib/components/ui/UIButton.vue'
</script>

<template>
	<div>
		<div
			class="mb-8 rounded-lg border-2 border-green-500 bg-green-50 p-8 text-center"
		>
			<h2 class="mb-2 text-3xl font-bold text-green-700">Congratulations!</h2>
			<p class="text-lg text-green-600">
				Your order has been placed successfully!
			</p>
		</div>

		<div class="flex items-center justify-center">
			<RouterLink :to="{ name: 'home' }">
				<UIButton class="max-w-sm">Home</UIButton>
			</RouterLink>
		</div>
	</div>
</template>
