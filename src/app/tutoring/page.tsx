import React from 'react';
import TutoringJSON from '@/data/Tutoring.json';
import ConnectedList from '@/components/ConnectedList';
import { Experience } from '@/interfaces/Experience';

export default function TutoringPage() {
	const tutoringJSON: Experience[] = TutoringJSON;

	return (
		<div className="default-page-div less-padding-top pr-sidebar34">
			<div className="flex flex-col gap-5">
				<h1 className="text-3xl text-text-primary font-bold">
					My tutoring experience
				</h1>
				<ConnectedList items={tutoringJSON} />
			</div>
		</div>
	);
}
