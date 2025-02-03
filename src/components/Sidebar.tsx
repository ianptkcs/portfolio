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
		<aside className="flex fixed top-0 left-sidebar4 w-sidebar h-[90vh] flex-col justify-start items-center pt-12 bg-background-sidebar gap-sidebar8 default-border no-top">
			<div className="flex flex-col justify-center items-center space-y-4">
				<Avatar>
					<AvatarImage
						src="/eu.jpg"
						alt="Ian Soares"
						className="rounded-full w-sidebar34 aspect-square default-border all-no-rounded object-cover"
					/>
					<AvatarFallback delayMs={1000}>IS</AvatarFallback>
				</Avatar>
				<div className="flex flex-col itmes-center justify-center text-center gap-2">
					<h1 className="text-text-primary text-xl">
						IAN <b>SOARES</b>
					</h1>
					<div className="flex flex-col">
						<span className="text-text-strong text-lg font-semibold">
							Fullstack Developer
						</span>
						<span className="text-text-strong text-lg font-semibold">
							Private Teacher
						</span>
					</div>
				</div>
			</div>
			<div className="h-[1px] w-4/5 bg-border shadow-sm shadow-border"></div>
			<nav>
				<ul className="flex flex-col gap-3">
					{SidebarItems.map((item) => (
						<li
							key={item.value}
							className={`text-text-primary text-center ${
								item.value === pathname
									? 'text-text-strong font-bold uppercase'
									: ''
							}`}
						>
							<Link
								href={item.value}
								className={`text-xl hover-underline-animation ${
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
