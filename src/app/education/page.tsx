import { EducationInterface } from '@/interfaces/Education';
import React from 'react';
import EducationJSON from '@/data/Education.json';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Badge from '@/components/Badge';

export default function EducationPage() {
	const educationJSON: EducationInterface[] = EducationJSON;
	educationJSON.reverse();

	return (
		<div className="flex flex-col gap-4 default-page-div less-padding-top pr-sidebar34">
			{educationJSON.map((education) => (
				<EducationCard
					education={education}
					key={education.institution}
				/>
			))}
		</div>
	);
}

function EducationCard({ education }: { education: EducationInterface }) {
	return (
		<div className="flex flex-col gap-4 bg-background default-border all p-3">
			<div className="flex justify-between">
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage
							src={education.src}
							alt={education.institution}
							className="default-border all no-shadow h-20 aspect-auto object-cover p-2"
						/>
						<AvatarFallback>{education.institution}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-1 text-text-primary text-lg">
						<p className="text-text-strong font-bold">
							{education.title}
						</p>
						<p className="italic">{education.institution}</p>
					</div>
				</div>
				<div className="flex flex-col gap-1 text-text-primary text-lg text-right">
					<p className="text-text-primary text-lg">
						{education.date.start} -{' '}
						{education.date.end || 'Present'}
					</p>
					<p className="text-text-primary text-lg">
						{education.location}
					</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-2">
				{education.skills.map((skill) => (
					<Badge text={skill} key={skill} />
				))}
			</div>
		</div>
	);
}
