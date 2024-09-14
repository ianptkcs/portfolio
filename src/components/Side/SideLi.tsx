import React, { useEffect, useState } from 'react';
import { SidebarItem } from '@/interfaces/Sidebar';
import { twMerge } from 'tailwind-merge';
import SideLink from './SideLink';
import { useSidebar } from '@/context/Sidebar';

interface SideLiProps {
	className?: string;
	item: SidebarItem;
}

const SideLi = ({ className, item }: SideLiProps) => {
	const [isHoveredLi, setIsHoveredLi] = useState(false);
	const { isHovered, route } = useSidebar();

	const toggleLiHover = () => {
		setIsHoveredLi(!isHoveredLi);
	};

	useEffect(() => {
		if (!isHovered) setIsHoveredLi(false);
	}, [isHovered]);

	return (
		<li
			className={twMerge(
				`flex flex-nowrap items-center w-full ${
					(isHoveredLi || route === item.href) &&
					'bg-sidebar-hover-item'
				} transition-all duration-300 py-2`,
				className
			)}
			onMouseEnter={toggleLiHover}
			onMouseLeave={toggleLiHover}
		>
			<SideLink item={item} />
		</li>
	);
};

export default SideLi;
