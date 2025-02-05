import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';

const inter = Inter({
	variable: '--font-inter',
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
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="sm:pl-sidebar54 flex flex-col sm:flex-row gap-5">
						<div className="fixed sm:top-6 bottom-6 right-6">
							<ThemeToggle />
						</div>
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
