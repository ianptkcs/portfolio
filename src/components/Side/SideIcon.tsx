import constants from '@/styles/constants';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { SidebarItem } from '@/interfaces/Sidebar';
import { BaseIcon } from '@/interfaces/BaseIcon';

interface SideIconProps extends BaseIcon<SidebarItem> {}

const SideIcon = ({ icon, className }: SideIconProps): ReactElement => {
	const IconComponent = icon;

	return (
		<IconComponent
			className={twMerge(
				`text-sidebar-icon transition-all duration-300`,
				className
			)}
			color={constants.sidebar.icon}
			size={(constants.sidebar.width * 4 * 3) / 8}
		/>
	);
};

export default SideIcon;
