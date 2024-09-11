'use client';

import React, { useEffect, useState } from 'react';
import SideLogo from '@/components/Side/SideLogo';
import SideUl from '@/components/Side/SideUl';

const Sidebar = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isHovered) {
			setIsOpen(true);
		} else {
			setTimeout(() => {
				setIsOpen(false);
			}, 200);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [isHovered]);

	return (
		<aside
			className={`fixed top-0 left-0 flex h-full flex-col gap-6 py-4 px-4 transition-all duration-300 ${
				isOpen ? 'w-64' : 'w-16'
			} bg-sidebar-background`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<SideLogo isHovered={isHovered} />
			<SideUl />
		</aside>
	);
};

export default Sidebar;
