import React from 'react';
import sidebarItemsJSON from '@/data/Sidebar.json';
import { SidebarItem } from '@/interfaces/Sidebar';
import SideLi from '@/components/Side/SideLi';
import { twMerge } from 'tailwind-merge';

interface SideUlProps extends React.HTMLAttributes<HTMLUListElement> {
	className?: string;
}

const SideUl = ({ className }: SideUlProps) => {
	const sidebarItems: SidebarItem[] = sidebarItemsJSON;
	return (
		<ul className={twMerge('flex flex-col gap-2', className)}>
			{sidebarItems.map((item) => (
				<SideLi
					key={item.name}
					item={item}
				/>
			))}
		</ul>
	);
};

export default SideUl;
