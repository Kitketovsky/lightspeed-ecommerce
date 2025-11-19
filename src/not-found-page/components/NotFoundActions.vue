<script lang="ts" setup>
import IconHome from '../../lib/components/icons/IconHome.vue'
import IconArrowLeft from '../../lib/components/icons/IconArrowLeft.vue'
import { $router } from '../../lib/router/router'

function goBack() {
	$router.go(-1)
}
</script>

<template>
	<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
		<RouterLink
			:to="{ name: 'home' }"
			class="group relative w-full transform rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
		>
			<span class="flex items-center justify-center gap-2">
				<IconHome />
				Go Home
			</span>
		</RouterLink>

		<button
			@click="goBack"
			class="w-full rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg sm:w-auto"
		>
			<span class="flex items-center justify-center gap-2">
				<IconArrowLeft />
				Go Back
			</span>
		</button>
	</div>
</template>
