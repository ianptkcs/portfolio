'use client';

import React, { useEffect, useState } from 'react';
import { useSidebar } from '@/context/Sidebar';

interface SideAsideProps {
	children: React.ReactNode;
}

const SideAside = ({ children }: SideAsideProps) => {
	const { isHovered, setIsHovered } = useSidebar();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isHovered) {
			setIsOpen(true);
		} else {
			setTimeout(() => {
				setIsOpen(false);
			}, 150);
		}
	}, [isHovered]);

	const toggleSidebar = (hover: boolean) => {
		const timeout: NodeJS.Timeout = setTimeout(() => {
			setIsHovered(hover);
		}, 150);
		return () => clearTimeout(timeout);
	};

	return (
		<aside
			className={`fixed top-0 left-0 flex h-full flex-col gap-6 px-4 py-4 transition-all duration-300 ${
				isOpen ? 'w-64' : 'w-16'
			} bg-sidebar-background justify-center`}
			onMouseEnter={() => toggleSidebar(true)}
			onMouseLeave={() => toggleSidebar(false)}
		>
			{children}
		</aside>
	);
};

export default SideAside;
