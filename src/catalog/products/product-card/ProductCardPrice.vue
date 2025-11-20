<script setup lang="ts">
defineProps<{
	price: string
}>()
</script>

<template>
	<p class="text-2xl font-bold text-green-600">
		{{ price }}
	</p>
</template>
