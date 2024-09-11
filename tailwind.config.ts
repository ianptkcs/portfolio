import type { Config } from 'tailwindcss';
import constants from './src/styles/constants';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'sidebar-background': constants.sidebar.background,
			},
			fontFamily: {
				serif: ['var(--font-noto-serif)'],
			},
		},
	},
	plugins: [],
};
export default config;
