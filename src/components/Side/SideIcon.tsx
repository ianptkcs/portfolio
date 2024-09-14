import constants from '@/styles/constants';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { LucideProps } from 'lucide-react';
import { useSidebar } from '@/context/Sidebar';
import { SidebarItem } from '@/interfaces/Sidebar';

interface IconMapProps {
	icon: React.FC<LucideProps>;
	className?: string;
	item: SidebarItem;
}

const SideIcon = ({
	icon,
	className,
	item,
}: IconMapProps): JSX.Element | null => {
	const IconComponent = icon;
	const { route } = useSidebar();

	return (
		<IconComponent
			className={twMerge(
				`text-sidebar-icon ${
					route === item.href ? 'opacity-100' : 'opacity-50'
				} transition-all duration-300`,
				className
			)}
			color={constants.sidebar.icon}
			size={32}
		/>
	);
};

export default SideIcon;
