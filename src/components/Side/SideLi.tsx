import React from 'react';
import { SidebarItem } from '@/interfaces/Sidebar';
import { twMerge } from 'tailwind-merge';
import SideLink from './SideLink';

interface SideLiProps {
	className?: string;
	item: SidebarItem;
}

const SideLi = ({ className, item }: SideLiProps) => {
	return (
		<li
			className={twMerge(
				`flex flex-nowrap items-center gap-4`,
				className
			)}
		>
			<SideLink item={item} />
		</li>
	);
};

export default SideLi;
