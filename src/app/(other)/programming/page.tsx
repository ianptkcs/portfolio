import { Experience } from '@/interfaces/Experience';
import ProgrammingJSON from '@/data/Programming.json';
import React from 'react';
import ConnectedList from '@/components/ConnectedList';
import { sortByDates } from '@/lib/date';

export default function ProgrammingPage() {
	let programmingJSON: Experience[] = ProgrammingJSON;
	programmingJSON = sortByDates<Experience>(programmingJSON);

	return <ConnectedList items={programmingJSON}></ConnectedList>;
}
