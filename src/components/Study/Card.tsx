import React from 'react';
import '@/styles/custom.css';
import Image from 'next/image';
import { BaseCard } from '@/interfaces/BaseCard';

interface CardProps<T> {
	item: T;
	children: React.ReactNode;
}

const Card = <T extends BaseCard>({ item, children }: CardProps<T>) => {
	return (
		<div className='flex flex-col p-3 gap-4 w-[500px] custom-border text-normal text-lg'>
			<div className='flex justify-between h-[64px] pr-5 px-1 gap-4 items-center w-full custom-border-bottom'>
				<div className='relative h-full'>
					<Image
						src={`/assets/${item.src}.png`}
						alt={item.src}
						height={64}
						width={64}
						unoptimized
						className='rounded-xl w-auto h-full object-cover'
					/>
				</div>
				<span className='text-lg text-end font-bold w-fit'>
					{item.name}
				</span>
			</div>
			<ul className='flex flex-col gap-1'>{children}</ul>
		</div>
	);
};

export default Card;
