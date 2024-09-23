'use client';

import React from 'react';
import { LucideProps } from 'lucide-react';
import { BaseLink } from '@/interfaces/BaseLink';
import SideIcon from '@/components/Side/SideIcon';
import ContactIcon from '@/components/Home/ContactIcon';

interface IconMapProps<T> {
	item: T & BaseLink;
	iconMap: {
		[key: string]: React.FC<LucideProps>;
	};
	type: string;
	className?: string;
}

export function getIcon<T>({
	item,
	iconMap,
	type,
	className,
}: IconMapProps<T>): JSX.Element | null {
	const iconComponent = iconMap[item.name] || iconMap['Home'];
	switch (type) {
		case 'side':
			return (
				<SideIcon
					icon={iconComponent}
					item={item}
					className={className}
				/>
			);
		case 'contact':
			return (
				<ContactIcon
					icon={iconComponent}
					item={item}
					className={className}
				/>
			);
		default:
			return null;
	}
}
