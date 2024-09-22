'use client';

import { useGeneral } from '@/context/General';
import React, { useEffect, useState } from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const OthersLayout = ({ children }: LayoutProps) => {
	const { route } = useGeneral();
	const [newRoute, setNewRoute] = useState(route.replace('/', ''));

	useEffect(() => {
		window.scrollTo(0, 0);
		setNewRoute(route.replace('/', '') + 'Page');
	}, [route]);

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-10'>
				<div className='text-4xl'>
					<span className='text-keyword'>const </span>
					<span className='text-function capitalize'>{newRoute}</span>
					<span className='text-keyword'> = </span>
					<span className='text-brackets'>()</span>
					<span className='text-keyword'>{' =>'}</span>
					<span className='text-brackets'> {'{'}</span>
				</div>
				<div className='ml-10'>{children}</div>
				<span className='text-brackets text-4xl'>
					{'}'}
					<span className='text-normal'>;</span>
				</span>
				<span className='text-keyword text-4xl mb-24'>
					export default{' '}
					<span className='text-normal capitalize'>{newRoute};</span>
				</span>
			</div>
		</div>
	);
};

export default OthersLayout;
