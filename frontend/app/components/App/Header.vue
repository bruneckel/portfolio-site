<script setup>
import whiteIsotype from "@/assets/logos/white/isotype.svg";
import blackIsotype from "@/assets/logos/black/isotype.svg";

const { toggle, isDark } = useResolvedColorMode();
</script>

<template>
  <header class="w-full h-auto my-5 p-5">
    <nav
      class="w-auto p-3 flex justify-between items-center border border-black/10 dark:border-white/10 rounded-full"
    >
      <NuxtImg
        :src="!isDark ? blackIsotype : whiteIsotype"
        alt="Logo"
        width="30"
        class="inline-block mr-2"
      />

      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/lab">Lab</NuxtLink></li>
      </ul>

      <button
        @click="toggle"
        class="flex items-center justify-center size-8 ml-4 rounded-full bg-dark dark:bg-light"
      >
        <Icon name="ion:sunny-sharp" v-if="isDark" class="text-dark" />
        <Icon name="ion:moon-sharp" v-else class="text-light" />
      </button>
    </nav>
  </header>
</template>
