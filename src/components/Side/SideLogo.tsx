import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SideLogoProps {
	className?: string;
	isHovered: boolean;
}

const SideLogo = ({ className, isHovered }: SideLogoProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isRendered, setIsRendered] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isHovered) {
			timeout = setTimeout(() => {
				setIsVisible(true);
			}, 100);
		} else {
			setIsVisible(false);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [isHovered]);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isHovered) {
			setIsRendered(true);
		} else {
			timeout = setTimeout(() => {
				setIsRendered(false);
			}, 250);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [isHovered]);

	return (
		<div
			className={twMerge(
				'w-full h-fit flex items-baseline text-start justify-start font-serif',
				className
			)}
		>
			<span className='text-2xl font-extrabold'>I</span>
			<span
				className={`text-xl italic ${
					!isVisible ? 'opacity-0' : 'opacity-100'
				} ${!isRendered ? 'w-0' : 'w-8'} transition-all duration-300`}
			>
				an
			</span>
			<span className={`text-2xl font-extrabold pl-1`}>S</span>
			<span
				className={`text-xl italic ${
					!isVisible ? 'opacity-0' : 'opacity-100'
				} ${!isRendered ? 'w-0' : 'w-8'} transition-all duration-300`}
			>
				oares
			</span>
		</div>
	);
};

export default SideLogo;
