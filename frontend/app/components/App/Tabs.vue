<script setup lang="ts">
import { motion } from 'motion-v';

interface Tab {
	name: string;
	to: string;
}

const { tabs = [] } = defineProps<{
	tabs?: Tab[];
}>();

const selectedTab = ref(0);

const onTabChange = async (index: number) => {
	selectedTab.value = index;
};
</script>

<template>
	<nav>
		<ul class="flex gap-1 align-center justify-center">
			<li
				v-for="(tab, index) in tabs"
				:key="index"
				:class="{ selected: selectedTab === index }"
				role="tab"
				:aria-selected="selectedTab === index"
				class="relative"
			>
				<motion.div
					v-if="selectedTab === index"
					layout-id="selected-indicator"
					class="absolute inset-0 rounded-full bg-dark/[6%] dark:bg-light/[4%]"
				/>

				<motion.button
					:while-press="{ scale: 0.9 }"
					:while-focus="{ backgroundColor: 'var(--accent-transparent)' }"
					class="text-sm cursor-pointer bg-transparent px-3 py-1"
					@press-start="onTabChange(index)"
				>
					{{ tab.name }}
				</motion.button>
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
