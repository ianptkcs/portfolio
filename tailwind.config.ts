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
			width: {
				'sidebar-no-hover': `${constants.sidebar.width / 4}rem`,
				'sidebar-hover': `${(constants.sidebar.width * 3) / 4}rem`,
			},
			padding: {
				sidebar: `${(constants.sidebar.width * 4 * 5) / 16}px`,
			},
		},
	},
	plugins: [],
};
export default config;
