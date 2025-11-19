<script setup lang="ts">
defineProps<{
	productId: number
	name: string
}>()
</script>

<template>
	<RouterLink :to="{ name: 'product', params: { productId } }">
		<h3
			class="line-clamp-2 cursor-pointer text-lg font-semibold text-gray-800 transition-colors hover:text-indigo-600"
		>
			{{ name }}
		</h3>
	</RouterLink>
</template>
