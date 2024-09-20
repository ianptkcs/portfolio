import React from 'react';
import { EducationItem } from '@/interfaces/EducationItem';
import educationJSON from '@/data/Education.json';
import Education from '@/components/Study/Education';

const educationItems: EducationItem[] = educationJSON;

const StudyPage = () => {
	return (
		<div className='flex flex-col gap-4 pl-8'>
			<h2 className='text-comment text-xl'>
				{'/* '}Some of my most relevant study{' */'}
			</h2>
			<h3 className='text-normal text-xl'>Education</h3>
			<ul>
				{educationItems.map((item) => (
					<Education
						key={item.name}
						education={item}
					/>
				))}
			</ul>
		</div>
	);
};

export default StudyPage;
