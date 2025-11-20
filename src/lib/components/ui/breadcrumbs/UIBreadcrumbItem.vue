<script setup lang="ts">
import IconArrowRight from '../../icons/IconArrowRight.vue'
import type { Breadcrumb } from './types'

defineProps<{
	breadcrumb: Breadcrumb
	isLast: boolean
}>()
</script>

<template>
	<li class="flex items-center gap-2">
		<RouterLink
			v-if="!isLast"
			:to="breadcrumb.options"
			class="text-gray-600 transition-colors hover:text-indigo-600"
		>
			{{ breadcrumb.name }}
		</RouterLink>

		<span v-else class="font-semibold text-gray-800">
			{{ breadcrumb.name }}
		</span>

		<IconArrowRight v-if="!isLast" />
	</li>
</template>
