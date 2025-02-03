import React from 'react';
import TutoringJSON from '@/data/Tutoring.json';
import ConnectedList from '@/components/ConnectedList';
import { Experience } from '@/interfaces/Experience';
import { sortByDates } from '@/lib/date';

export default function TutoringPage() {
	let tutoringJSON: Experience[] = TutoringJSON;
	tutoringJSON = sortByDates<Experience>(tutoringJSON);

	return <ConnectedList items={tutoringJSON} />;
}
