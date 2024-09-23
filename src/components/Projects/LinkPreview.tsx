// src/components/LinkPreview.tsx
import { ProjectsItem } from '@/interfaces/ProjectsItem';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkPreviewProps {
	item: ProjectsItem;
	index: number;
	className?: string;
	children?: React.ReactNode;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
	item,
	className,
	index,
	children,
}) => {
	return (
		<div
			className={twMerge(
				`flex ${
					index % 2 === 1 && 'flex-row-reverse'
				} gap-4 w-4/5 custom-border text-normal text-lg`,
				className
			)}
		>
			<div className='grid grid-cols-2 min-h-[300px] pr-5 gap-4 items-center'>
				<div className='relative h-full overflow-hidden p-2'>
					<Image
						src={`/assets/${item.src}.png`}
						alt={item.src}
						height={64}
						width={64}
						unoptimized
						className='w-auto h-full object-cover rounded-xl'
					/>
				</div>
				{children}
			</div>
		</div>
	);
};

export default LinkPreview;
