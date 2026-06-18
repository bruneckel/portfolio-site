<script setup lang="ts">
import { motion } from "motion-v";

import whiteIsotype from "@/assets/logos/white/isotype.svg";
import blackIsotype from "@/assets/logos/black/isotype.svg";

const { isAnimating, toggleTheme } = useThemeTransition();
</script>

<template>
  <header class="mt-11 mb-[60px] w-full">
    <motion.nav
      class="flex items-center justify-between rounded-full border border-black/10 px-3 py-2 dark:border-white/10"
      :initial="{ opacity: 0, scale: 0.5 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }"
    >
      <div class="mr-2">
        <NuxtImg
          :src="blackIsotype"
          alt="Logo"
          width="30"
          class="block dark:hidden"
        />

        <NuxtImg
          :src="whiteIsotype"
          alt="Logo"
          width="30"
          class="hidden dark:block"
        />
      </div>

      <AppTabs
        :tabs="[
          { name: 'Home', to: '/' },
          { name: 'Work', to: '/work' },
          { name: 'About', to: '/about' },
        ]"
      />

      <button
        :disabled="isAnimating"
        class="ml-4 flex size-[30px] items-center justify-center rounded-full bg-dark dark:bg-light disabled:pointer-events-none"
        @click="toggleTheme({ origin: originFromEvent($event) })"
      >
        <Icon
          name="ion:moon-sharp"
          size="14"
          class="block text-light dark:hidden"
        />

        <Icon
          name="ion:sunny-sharp"
          size="14"
          class="hidden text-dark dark:block"
        />
      </button>
    </motion.nav>
  </header>
</template>
