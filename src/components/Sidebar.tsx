'use client';

import ItemLabel from '@/interfaces/Items';
import { Avatar } from '@radix-ui/react-avatar';
import React, { useState } from 'react';
import { AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const SidebarItems: ItemLabel[] = [
	{ label: 'Home', value: '/' },
	{ label: 'About', value: '/about' },
	{ label: 'Education', value: '/education' },
	{ label: 'Projects', value: '/projects' },
	{ label: 'Experience', value: '/experience' },
];

export default function Sidebar() {
	let { value } = useParams();
	if (!value) {
		value = '/';
	}

	return (
		<div className="flex fixed top-0 left-0 h-screen">
			<aside className="flex flex-col justify-start items-center pt-12 w-64 bg-gray-300 gap-5">
				<div className="flex flex-col justify-center items-center space-y-4">
					<Avatar>
						<AvatarImage
							src="/eu.jpg"
							alt="Ian Soares"
							className="rounded-full w-48 h-48 border-2 border-black shadow-lg object-cover"
						/>
						<AvatarFallback delayMs={1000}>IS</AvatarFallback>
					</Avatar>
					<div className="flex flex-col itmes-center justify-center text-center gap-2">
						<h1 className="text-foreground text-xl">
							IAN <b>SOARES</b>
						</h1>
						<div className="flex flex-col">
							<span className="text-text-purplePrimary text-lg">
								Fullstack Developer
							</span>
							<span className="text-text-purplePrimary text-lg">
								Private Teacher
							</span>
						</div>
					</div>
				</div>
				<nav>
					<ul className="flex flex-col gap-4">
						{SidebarItems.map((item) => (
							<li
								key={item.value}
								className={`text-primary-300 text-center ${
									item.value === value
										? 'text-text-purpleSecondary font-bold'
										: ''
								}`}
							>
								<Link
									href={item.value}
									className="text-xl hover:underline transition-all duration-300"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<div className="h-screen w-[1px] opacity-75 bg-black"></div>
		</div>
	);
}
