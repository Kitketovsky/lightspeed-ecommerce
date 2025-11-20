<script setup lang="ts">
import BreadcrumbItem from './UIBreadcrumbItem.vue'
import type { Breadcrumbs } from './types'

defineProps<{
	breadcrumbs: Breadcrumbs
}>()
</script>

<template>
	<nav v-if="breadcrumbs.length > 1" aria-label="Breadcrumb">
		<ol class="flex flex-wrap items-center gap-2">
			<BreadcrumbItem
				v-for="(breadcrumb, index) in breadcrumbs"
				:key="breadcrumb.id"
				:breadcrumb="breadcrumb"
				:is-last="index === breadcrumbs.length - 1"
			/>
		</ol>
	</nav>
</template>
