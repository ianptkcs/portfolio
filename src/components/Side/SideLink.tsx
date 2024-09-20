import { SidebarItem } from '@/interfaces/Sidebar';
import { getIcon } from '@/tools/iconMap';
import Link from 'next/link';
import React from 'react';
import SideSpan from './SideSpan';
import useRendering from '@/hooks/useRendering';
import { useSidebar } from '@/context/Sidebar';
import { sideIconMap } from '@/tools/sideIconMap';
import { useGeneral } from '@/context/General';

interface SideLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	className?: string;
	item: SidebarItem;
	isHoveredLi: boolean;
}

const SideLink = ({ className, item, isHoveredLi }: SideLinkProps) => {
	const { route } = useGeneral();
	const { isRendered } = useSidebar();
	useRendering();

	return (
		<Link
			href={item.link}
			className={`flex items-center h-full justify-start px-sidebar py-2 ${
				item && route === item.link
					? 'opacity-100'
					: isHoveredLi
					? 'opacity-75'
					: 'opacity-50'
			} ${isRendered && 'w-full'}`}
		>
			{getIcon<SidebarItem>({
				item,
				iconMap: sideIconMap,
				type: 'side',
				className,
			})}
			<SideSpan>{item.name}</SideSpan>
		</Link>
	);
};

export default SideLink;
