import { EducationInterface } from '@/interfaces/Education';
import React from 'react';
import EducationJSON from '@/data/Education.json';
import { DefaultCard } from '@/components/DefaultCard';
import { sortByDates } from '@/lib/date';

export default function EducationPage() {
	let educationJSON: EducationInterface[] = EducationJSON;
	educationJSON = sortByDates<EducationInterface>(educationJSON);

	return (
		<>
			{educationJSON.map((education) => (
				<DefaultCard item={education} key={education.institution} />
			))}
		</>
	);
}
