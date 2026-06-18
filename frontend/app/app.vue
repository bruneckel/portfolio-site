<script setup>
const { isDark } = useResolvedColorMode();
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
