<script setup lang="ts">
import UIButton from '../../../lib/components/ui/UIButton.vue'

const emit = defineEmits({
	addToCart() {
		return true
	},
})
</script>

<template>
	<UIButton class="w-full" @click="emit('addToCart')"> Add to Cart </UIButton>
</template>
