import constants from '@/styles/constants';
import { House } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { LucideProps } from 'lucide-react';

const iconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	Home: House,
};

interface IconMapProps {
	iconName: string;
	className?: string;
}

export function getIcon({
	iconName,
	className,
}: IconMapProps): JSX.Element | null {
	const IconComponent = iconMap[iconName] || iconMap['Home'];
	return (
		<IconComponent
			className={twMerge('text-sidebar-icon', className)}
			color={constants.sidebar.icon}
			size={30}
		/>
	);
}
