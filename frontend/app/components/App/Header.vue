<script setup>
import { motion } from "motion-v";

import whiteIsotype from "@/assets/logos/white/isotype.svg";
import blackIsotype from "@/assets/logos/black/isotype.svg";

const { toggle, isDark } = useResolvedColorMode();
</script>

<template>
  <header class="w-full mt-11 mb-[60px]">
    <motion.nav
      class="w-auto px-3 py-2 flex justify-between items-center border border-black/10 dark:border-white/10 rounded-full"
      :initial="{ opacity: 0, scale: 0.5 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }"
    >
      <NuxtImg
        :src="!isDark ? blackIsotype : whiteIsotype"
        alt="Logo"
        width="30"
        class="inline-block mr-2"
      />

      <AppTabs
        :tabs="[
          { name: 'Home', to: '/' },
          { name: 'Work', to: '/work' },
          { name: 'About', to: '/about' },
        ]"
      />

      <button
        @click="toggle"
        class="flex items-center justify-center size-[30px] ml-4 rounded-full bg-dark dark:bg-light"
      >
        <Icon
          size="14"
          name="ion:sunny-sharp"
          v-if="isDark"
          class="text-dark"
        />
        <Icon size="14" name="ion:moon-sharp" v-else class="text-light" />
      </button>
    </motion.nav>
  </header>
</template>
