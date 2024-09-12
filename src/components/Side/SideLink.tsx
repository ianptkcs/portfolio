import { SidebarItem } from '@/interfaces/Sidebar';
import { getIcon } from '@/tools/Side/iconMap';
import Link from 'next/link';
import React from 'react';
import SideSpan from './SideSpan';

interface SideLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	className?: string;
	item: SidebarItem;
}

const SideLink = ({ className, item }: SideLinkProps) => {
	return (
		<Link
			href={item.href}
			className='flex gap-2'
		>
			{getIcon({ iconName: item.name, className })}
			<SideSpan className='text-sidebar-text'>{item.name}</SideSpan>
		</Link>
	);
};

export default SideLink;
