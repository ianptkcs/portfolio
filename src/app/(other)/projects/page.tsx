import { ProjectsInterface } from '@/interfaces/Projects';
import React from 'react';
import ProjectsJSON from '@/data/Projects.json';
import { DefaultCard } from '@/components/DefaultCard';
import Link from 'next/link';
import { sortByDates } from '@/lib/date';

export default function ProjectsPage() {
	let projectsJSON: ProjectsInterface[] = ProjectsJSON;
	projectsJSON = sortByDates<ProjectsInterface>(projectsJSON);

	return (
		<>
			{projectsJSON.map((projects) => (
				<DefaultCard item={projects} key={projects.institution}>
					<Link
						href={projects.link}
						className="default-font-size base text-text-strong italic lg:opacity-80 hover:underline hover:opacity-100 hover:font-semibold transition-all w-fit py-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						{projects.link}
					</Link>
				</DefaultCard>
			))}
		</>
	);
}
