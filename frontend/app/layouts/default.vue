<template>
  <div
    class="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10"
  >
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-light text-dark dark:bg-dark dark:text-light;
}
</style>
