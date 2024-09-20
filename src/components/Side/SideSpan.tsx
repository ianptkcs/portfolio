import { useSidebar } from '@/context/Sidebar';
import useRendering from '@/hooks/useRendering';
import useVisibility from '@/hooks/useVisibility';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SideSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
	className?: string;
	children?: React.ReactNode;
}

const SideSpan = ({ children, className }: SideSpanProps) => {
	const { isVisible, isRendered } = useSidebar();

	useVisibility();
	useRendering();

	return (
		<span
			className={twMerge(
				`text-xl pl-4 ${
					isVisible ? 'translate-x-0' : '-translate-x-1 opacity-0'
				} ${
					!isRendered && 'w-0 overflow-hidden'
				} transition-all duration-300 whitespace-nowrap text-sidebar-text`,
				className
			)}
		>
			{children}
		</span>
	);
};

export default SideSpan;
