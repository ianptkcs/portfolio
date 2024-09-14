import { SidebarItem } from '@/interfaces/Sidebar';
import { getIcon } from '@/tools/Side/iconMap';
import Link from 'next/link';
import React from 'react';
import SideSpan from './SideSpan';
import useRendering from '@/hooks/useRendering';
import { useSidebar } from '@/context/Sidebar';

interface SideLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	className?: string;
	item: SidebarItem;
}

const SideLink = ({ className, item }: SideLinkProps) => {
	const { isRendered } = useSidebar();
	useRendering();

	return (
		<Link
			href={item.href}
			className={`flex items-center gap-2 px-4 ${isRendered && 'w-full'}`}
		>
			{getIcon({ item, className })}
			<SideSpan>{item.name}</SideSpan>
		</Link>
	);
};

export default SideLink;
