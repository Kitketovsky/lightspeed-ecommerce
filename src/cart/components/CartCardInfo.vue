<script setup lang="ts">
defineProps<{
	name: string
	price: string
}>()
</script>

<template>
	<div class="grow">
		<h3 class="mb-1 text-lg font-semibold text-gray-800">
			{{ name }}
		</h3>
		<p class="text-xl font-bold text-green-600">
			{{ price }}
		</p>
	</div>
</template>
