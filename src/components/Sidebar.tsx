'use client';

import ItemLabel from '@/interfaces/Items';
import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';
import { AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItems: ItemLabel[] = [
	{ label: 'Home', value: '/' },
	{ label: 'About', value: '/about' },
	{ label: 'Tutoring', value: '/tutoring' },
	{ label: 'Programming', value: '/programming' },
	{ label: 'Projects', value: '/projects' },
	{ label: 'Education', value: '/education' },
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="flex flex-col sm:fixed top-0 sm:left-sidebar4 left-0 w-full sm:w-sidebar h-sidebar8 sm:h-[90vh] justify-start items-center sm:pt-12 pt-4 pb-2 bg-background-sidebar sm:gap-sidebar8 gap-2 default-border no-top">
			<div className="flex sm:flex-col flex-row justify-center items-center gap-4">
				<Avatar>
					<AvatarImage
						src="/eu.jpg"
						alt="Ian Soares"
						className="rounded-full sm:w-sidebar34 w-sidebar4 aspect-square default-border all-no-rounded object-cover"
					/>
					<AvatarFallback delayMs={1000}>IS</AvatarFallback>
				</Avatar>
				<div className="flex sm:flex-col flex-row text-wrap items-center justify-center text-center sm:gap-2 gap-6">
					<h1 className="text-text-primary default-font-size xl">
						IAN <b>SOARES</b>
					</h1>
					<div className="flex flex-col">
						<span className="text-text-strong default-font-size lg font-semibold">
							Fullstack Developer
						</span>
						<span className="text-text-strong default-font-size lg font-semibold">
							Private Teacher
						</span>
					</div>
				</div>
			</div>
			<div className="sm:h-[1px] sm:w-4/5 h-4/5 w-[1px] bg-border shadow-sm shadow-border"></div>
			<nav>
				<ul className="flex sm:flex-col flex-row justify-center flex-wrap sm:space-y-3 space-x-3">
					{SidebarItems.map((item) => (
						<li
							key={item.value}
							className={`default-font-size xl text-text-primary text-center ${
								item.value === pathname
									? 'text-text-strong font-bold uppercase'
									: ''
							}`}
						>
							<Link
								href={item.value}
								className={`default-font-size xl hover-underline-animation ${
									item.value === pathname &&
									'after:bg-text-strong'
								}`}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
