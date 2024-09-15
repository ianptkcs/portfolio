import constants from '@/styles/constants';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSidebar } from '@/context/Sidebar';
import { SidebarItem } from '@/interfaces/Sidebar';
import { BaseIcon } from '@/interfaces/BaseIcon';

interface SideIconProps extends BaseIcon<SidebarItem> {}

const SideIcon = ({ icon, className, item }: SideIconProps): ReactElement => {
	const IconComponent = icon;
	const { route } = useSidebar();

	return (
		<IconComponent
			className={twMerge(
				`text-sidebar-icon ${
					route === item.link ? 'opacity-100' : 'opacity-50'
				} transition-all duration-300`,
				className
			)}
			color={constants.sidebar.icon}
			size={(constants.sidebar.width * 4 * 3) / 8}
		/>
	);
};

export default SideIcon;
