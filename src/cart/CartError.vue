<script setup lang="ts">
import type { DefaultError } from '@tanstack/vue-query'

defineProps<{
	error: DefaultError | null
}>()
</script>

<template>
	<div v-if="error" class="flex h-56 items-center justify-center text-red-400">
		<span>{{ error.message }}</span>
	</div>
</template>
