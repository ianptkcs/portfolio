import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				text: {
					primary: 'hsl(var(--text-primary))',
					strong: 'hsl(var(--text-strong))',
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					sidebar: 'hsl(var(--background-sidebar))',
					button: 'hsl(var(--background-button))',
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			width: {
				sidebar: 'var(--sidebar-width)',
				sidebar34: 'calc(var(--sidebar-width) * 3 / 4)',
				sidebar4: 'calc(var(--sidebar-width) / 4)',
			},
			height: {
				sidebar: 'var(--sidebar-height)',
				sidebar4: 'calc(var(--sidebar-height) / 4)',
				sidebar8: 'calc(var(--sidebar-height) / 8)',
			},
			inset: {
				sidebar4: 'calc(var(--sidebar-width) / 4)',
			},
			padding: {
				sidebar6: 'calc(var(--sidebar-width) / 6)',
				sidebar4: 'calc(var(--sidebar-width) / 4)',
				sidebar34: 'calc(var(--sidebar-width) * 3 / 4)',
				sidebar2: 'calc(var(--sidebar-width) / 2)',
				sidebar54: 'calc(var(--sidebar-width) * 5 / 4)',
				sidebar32: 'calc(var(--sidebar-width) * 3 / 2)',
			},
			gap: {
				sidebar4: 'calc(var(--sidebar-width) / 4)',
				sidebar8: 'calc(var(--sidebar-width) / 8)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
