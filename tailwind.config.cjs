const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1366px',
			xxl: '1920px',
		},
		colors: {
			darkness: '#212A3E',
			shadow: '#394867',
			faint: '#9BA4B5',
			bond: '#e7eaf6',
			light: '#F1F6F9',
			green: '#96C93EC7',
		},
		fontFamily: {
			Raleway: ['Raleway', 'sans'],
			Code: ["Code", "sans-serif"]
		},
		fontWeight: {
			'regular': 400,
			'bold': 700,
		  }
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};
