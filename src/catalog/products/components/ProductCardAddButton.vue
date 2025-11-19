<script setup lang="ts">
import UIButton from '../../../lib/components/ui/UIButton.vue'

const emit = defineEmits<{
	'add-to-cart': []
}>()
</script>

<template>
	<UIButton class="w-full" @click="emit('add-to-cart')"> Add to Cart </UIButton>
</template>
