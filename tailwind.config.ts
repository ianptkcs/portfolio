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
				normal: constants.global.normal,
				string: constants.global.string,
				keyword: constants.global.keyword,
				number: constants.global.number,
				function: constants.global.function,
				variables: constants.global.variables,
				operator: constants.global.operator,
				button: constants.global.button,
				brackets: constants.global.brackets,
				comment: constants.global.comment,
				'button-hover': constants.global.buttonHover,
				'sidebar-background': constants.sidebar.background,
				'sidebar-text': constants.global.keyword,
				'sidebar-icon': constants.global.keyword,
				'sidebar-hover-item': constants.sidebar.hoverItem,
				'global-background': constants.global.background,
				'rpgsheet-background': constants.rpgsheet.background,
			},
			width: {
				'sidebar-no-hover': `${constants.sidebar.width / 4}rem`,
				'sidebar-hover': `${(constants.sidebar.width * 3) / 4}rem`,
			},
			padding: {
				sidebar: `${(constants.sidebar.width * 4 * 5) / 16}px`,
			},
			listStyleType: {
				square: 'square',
			},
		},
	},
	plugins: [],
};
export default config;
