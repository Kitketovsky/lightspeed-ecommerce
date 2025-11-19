<script setup lang="ts">
import IconCart from '../../lib/components/icons/IconCart.vue'

const emit = defineEmits<{
	remove: []
}>()
</script>

<template>
	<button
		@click="emit('remove')"
		class="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50"
		aria-label="Remove item"
	>
		<IconCart />
	</button>
</template>
