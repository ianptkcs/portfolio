import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'My Portfolio',
	description: 'Fullstack developer and private teacher portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<div className="fixed sm:top-4 bottom-4 right-4 bg-gray-800">
						<ThemeToggle />
					</div>
					<main className="sm:pl-sidebar54 flex flex-col sm:flex-row gap-5">
						<Sidebar />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
