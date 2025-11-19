<script setup lang="ts">
defineProps<{
	productId: number
	thumbnailUrl?: string
	name: string
}>()
</script>

<template>
	<RouterLink
		class="flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden bg-gray-100"
		:to="{ name: 'product', params: { productId } }"
	>
		<img
			v-if="thumbnailUrl"
			:src="thumbnailUrl"
			:alt="name"
			class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
		/>
		<div
			v-else
			class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
		>
			<span class="px-4 text-center text-2xl font-bold text-white">{{
				name
			}}</span>
		</div>
	</RouterLink>
</template>
