<script setup lang="ts">
import IconMinus from '../../lib/components/icons/IconMinus.vue'
import IconPlus from '../../lib/components/icons/IconPlus.vue'

defineProps<{
	quantity: number
}>()

const emit = defineEmits<{
	increment: []
	decrement: []
}>()
</script>

<template>
	<div class="flex items-center gap-3">
		<button
			@click="emit('decrement')"
			class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
			:disabled="quantity <= 1"
		>
			<IconMinus />
		</button>
		<span class="w-8 text-center text-lg font-semibold">{{ quantity }}</span>
		<button
			@click="emit('increment')"
			class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
		>
			<IconPlus />
		</button>
	</div>
</template>
