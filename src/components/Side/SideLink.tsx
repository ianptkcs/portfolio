import { SidebarItem } from '@/interfaces/Sidebar';
import { getIcon } from '@/tools/iconMap';
import Link from 'next/link';
import React from 'react';
import SideSpan from './SideSpan';
import useRendering from '@/hooks/useRendering';
import { useSidebar } from '@/context/Sidebar';
import { sideIconMap } from '@/tools/sideIconMap';

interface SideLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	className?: string;
	item: SidebarItem;
}

const SideLink = ({ className, item }: SideLinkProps) => {
	const { isRendered } = useSidebar();
	useRendering();

	return (
		<Link
			href={item.link}
			className={`flex items-center h-fit justify-start px-sidebar ${
				isRendered && 'w-full'
			}`}
		>
			{getIcon<SidebarItem>({
				item,
				iconMap: sideIconMap,
				type: 'side',
				className,
			})}
			<SideSpan item={item}>{item.name}</SideSpan>
		</Link>
	);
};

export default SideLink;
