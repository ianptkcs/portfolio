import React from 'react';
import '@/styles/custom.css';
import Image from 'next/image';
import { EducationItem } from '@/interfaces/EducationItem';
import ListItem from './ListItem';

interface EducationProps {
	education: EducationItem;
}

const Education = ({ education }: EducationProps) => {
	return (
		<div className='flex flex-col p-3 gap-4 custom-border text-normal'>
			<div className='flex justify-between h-[64px] max-w-[600px] pr-5 px-1 gap-2 items-center w-full border-b-[1px] border-home-normal border-opacity-40 pb-1'>
				<div className='relative h-full'>
					<Image
						src={`/assets/${education.src}.png`}
						alt={education.src}
						height={64}
						width={64}
						unoptimized
						className='rounded-xl p-2 w-auto h-full object-cover'
					/>
				</div>
				<span className='text-lg text-center'>{education.name}</span>
			</div>
			<ul className='flex flex-col gap-1'>
				<ListItem
					strong='degree'
					text={education.degree}
				/>
				<ListItem
					strong='location'
					text={education.location}
				/>
				<ListItem
					strong='conclusion date'
					text={education.date}
				/>
			</ul>
		</div>
	);
};

export default Education;
