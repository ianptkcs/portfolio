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
				'sidebar-text': constants.sidebar.text,
				'sidebar-icon': constants.sidebar.icon,
				'sidebar-hover-item': constants.sidebar.hoverItem,
				'global-background': constants.global.background,
				'home-hello': constants.home.hello,
				'home-normal': constants.home.normal,
				'home-role': constants.home.role,
			},
		},
	},
	plugins: [],
};
export default config;
