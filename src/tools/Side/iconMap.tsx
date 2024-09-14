import {
	House,
	CalendarFold,
	Dumbbell,
	GraduationCap,
	Presentation,
} from 'lucide-react';
import React from 'react';
import { LucideProps } from 'lucide-react';
import SideIcon from '@/components/Side/SideIcon';
import { SidebarItem } from '@/interfaces/Sidebar';

const iconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	Home: House,
	Timeline: CalendarFold,
	Skills: Dumbbell,
	Education: GraduationCap,
	Projects: Presentation,
};

interface IconMapProps {
	item: SidebarItem;
	className?: string;
}

export function getIcon({ item, className }: IconMapProps): JSX.Element | null {
	const IconComponent = iconMap[item.name] || iconMap['Home'];
	return (
		<SideIcon
			icon={IconComponent}
			className={className}
			item={item}
		/>
	);
}
