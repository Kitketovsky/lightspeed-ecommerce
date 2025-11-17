<script setup lang="ts">
import { RouterLink } from 'vue-router'

import CartIcon from '../components/CartIcon.vue'
</script>

<template>
  <div>
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div
        class="container mx-auto px-4 max-w-7xl py-4 flex items-center justify-between"
      >
        <RouterLink
          to="/"
          class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Store
        </RouterLink>

        <CartIcon />
      </div>
    </header>

    <slot />
  </div>
</template>
