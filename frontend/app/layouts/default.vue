<template>
  <div class="w-full max-w-3xl mx-auto flex flex-col items-center">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-light dark:bg-dark dark:text-light;
}
</style>
