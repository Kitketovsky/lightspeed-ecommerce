<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4"
  >
    <div class="text-center max-w-2xl mx-auto">
      <!-- Animated 404 -->
      <div class="mb-8 relative">
        <h1
          class="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 animate-pulse"
        >
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-32 h-32 bg-indigo-100 rounded-full animate-ping opacity-20"
          ></div>
        </div>
      </div>

      <!-- Icon -->
      <div class="mb-8">
        <svg
          class="w-32 h-32 mx-auto text-indigo-600 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Message -->
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p class="text-lg text-gray-600 mb-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p class="text-gray-500">Don't worry, let's get you back on track!</p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="goHome"
          class="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
        >
          <span class="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Go Home
          </span>
        </button>

        <button
          @click="goBack"
          class="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border-2 border-gray-200 w-full sm:w-auto"
        >
          <span class="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Go Back
          </span>
        </button>
      </div>

      <!-- Decorative Elements -->
      <div class="mt-16 text-sm text-gray-400">
        <p>Error Code: 404 - Page Not Found</p>
      </div>
    </div>

    <!-- Floating Shapes Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
