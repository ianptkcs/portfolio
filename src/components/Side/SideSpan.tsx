import { useSidebar } from '@/context/Sidebar';
import useRendering from '@/hooks/useRendering';
import useVisibility from '@/hooks/useVisibility';
import { BaseLink } from '@/interfaces/BaseLink';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SideSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
	className?: string;
	children?: React.ReactNode;
	item?: BaseLink;
}

const SideSpan = ({ children, className, item }: SideSpanProps) => {
	const { isVisible, isRendered, route } = useSidebar();

	useVisibility();
	useRendering();

	return (
		<span
			className={twMerge(
				`text-xl italic pl-4 ${
					isVisible
						? 'opacity-50 translate-x-0'
						: 'opacity-0 -translate-x-2'
				} ${!isRendered && 'w-0 overflow-hidden'} ${
					item && route === item.link && 'opacity-100'
				} transition-all duration-300 whitespace-nowrap text-sidebar-text`,
				className
			)}
		>
			{children}
		</span>
	);
};

export default SideSpan;
