// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({

	modules: [
		'@nuxtjs/color-mode',
		'./modules/nuxt-theme-transition',
		'@nuxt/image',
		'@nuxtjs/device',
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
		'@nuxt/eslint',
	],
	devtools: { enabled: true },

	colorMode: {
		preference: 'system',
		fallback: 'light',
		classSuffix: '',
	},

	alias: {
		'~': fileURLToPath(new URL('./', import.meta.url)),
	},
	compatibilityDate: '2025-07-15',

	vite: {
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit', 'motion-v'],
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: true,
			},
		},
	},

	i18n: {
		defaultLocale: 'en',
	},

	icon: {
		serverBundle: {
			collections: ['ion'],
		},
	},

	tailwindcss: {
		exposeConfig: true,
		config: {
			theme: {
				extend: {
					colors: {
						dark: '#151516',
						light: '#ffffff',
						gray: '#f5f5f5',
						darkGray: '#696969',
					},
				},
			},
		},
	},

	themeTransition: {
		variant: 'spread',
		duration: '1s',
	},
});
