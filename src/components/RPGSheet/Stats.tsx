import React from 'react';

interface StatsProps {
	label: string;
	value: string;
}

const Stats = ({ label, value }: StatsProps) => {
	return (
		<div className='flex flex-col p-2 w-full text-center border-[1px] border-opacity-40 border-home-normal rounded-md'>
			<label
				htmlFor='name'
				className='font-bold capitalize text-wrap border-b-[1px] border-opacity-40 border-home-normal pb-1 px-2'
			>
				{label}
			</label>
			<div className='text-2xl py-2'>
				<span id='name'>{value}</span>
			</div>
		</div>
	);
};

export default Stats;
