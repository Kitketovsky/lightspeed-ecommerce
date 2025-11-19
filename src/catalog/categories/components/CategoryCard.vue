<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { StoreCategory } from '../../../lib/types/categories'

defineProps<StoreCategory>()

defineOptions({
	inheritAttrs: false,
})
</script>

<template>
	<RouterLink :to="{ name: 'category', params: { categoryId: id } }">
		<div
			class="relative flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
		>
			<img
				v-if="imageUrl"
				class="absolute inset-0 h-full w-full object-cover"
				:src="imageUrl"
				:alt="`${name} category`"
				loading="lazy"
			/>

			<h3 class="z-10 text-2xl font-semibold text-white transition-all">
				{{ name }}
			</h3>
		</div>
	</RouterLink>
</template>
