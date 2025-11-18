<script setup lang="ts">
const emit = defineEmits({
	click: null,
})

function onButtonClick() {
	emit('click')
}
</script>

<template>
	<button
		class="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 active:scale-95"
		@click="onButtonClick"
	>
		<slot />
	</button>
</template>
