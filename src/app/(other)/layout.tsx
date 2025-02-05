'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function OtherLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const titles = {
		'/about': 'More about me',
		'/projects': 'Some of my projects',
		'/education': 'My education',
		'/tutoring': 'My tutoring experience',
		'/programming': 'My programming experience',
	};

	const pathname = usePathname() as keyof typeof titles;

	return (
		<div className="default-page-div less-padding-top less-gap">
			<p className="default-font-size xl2 text-text-primary font-bold">
				{titles[pathname]}:
			</p>
			{children}
		</div>
	);
}
