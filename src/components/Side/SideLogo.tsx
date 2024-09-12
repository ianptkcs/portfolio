import React from 'react';
import { twMerge } from 'tailwind-merge';
import SideSpan from './SideSpan';

interface SideLogoProps {
	className?: string;
}

const SideLogo = ({ className }: SideLogoProps) => {
	return (
		<div
			className={twMerge(
				'w-full h-fit absolute top-0 mt-6 flex items-baseline text-start font-serif text-sidebar-text',
				className
			)}
		>
			<span className='text-2xl font-extrabold'>I</span>
			<span className={`text-2xl font-extrabold pl-1`}>S</span>
			<SideSpan className='pl-4'>Ian Soares</SideSpan>
		</div>
	);
};

export default SideLogo;
