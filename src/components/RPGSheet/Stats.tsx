import React from 'react';
import Label from '@/components/RPGSheet/Label';

interface StatsProps {
	label: string;
	value: string;
}

const Stats = ({ label, value }: StatsProps) => {
	return (
		<div className='flex flex-col p-2 w-full text-center custom-border rounded-md'>
			<Label
				htmlFor='name'
				className='not-italic text-wrap border-b-[1px] border-opacity-40 border-home-normal pb-1 px-2'
			>
				{label}
			</Label>
			<div className='text-2xl py-2'>
				<span
					id='name'
					className='text-number'
				>
					{value}
				</span>
			</div>
		</div>
	);
};

export default Stats;
