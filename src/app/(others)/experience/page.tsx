import React, { useMemo } from 'react';
import { ExperienceItem } from '@/interfaces/ExperienceItem';
import experienceJSON from '@/data/Experience.json';
import CodeTag from '@/components/General/CodeTag';
import { sortAndGroupExperiences } from '@/utils/sortExperience';
import Attribute from '@/components/Study/Attribute';
import { renderList } from '@/utils/renderList';
import Card from '@/components/Study/Card';
import { experienceKeys } from '@/utils/experienceKeys';

const experienceItems: ExperienceItem[] = experienceJSON;

const ExperiencePage = () => {
	const experiencesGrouped = sortAndGroupExperiences(experienceItems);

	const statusPriority: Record<string, number> = {
		present: 1,
		past: 2,
	};

	const orderedStatuses = useMemo(() => {
		return Object.keys(experiencesGrouped).sort((a, b) => {
			const priorityA = statusPriority[a] || Number.MAX_SAFE_INTEGER;
			const priorityB = statusPriority[b] || Number.MAX_SAFE_INTEGER;
			return priorityA - priorityB;
		});
	}, [experiencesGrouped]);

	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-comment text-xl'>
				{'/* '}Some of my most relevant experience{' */'}
			</h2>
			<CodeTag
				tag='Present'
				hasChildren={false}
				className='text-xl'
			>
				<ul className='flex flex-col gap-10'>
					{orderedStatuses.map(
						(status) =>
							experiencesGrouped[status] && (
								<Attribute
									key={status}
									text={status}
								>
									<ul className='flex flex-wrap gap-10'>
										{experiencesGrouped[status].map(
											(item) => (
												<Card<ExperienceItem>
													key={item.name}
													item={item}
												>
													<ul>
														{renderList<ExperienceItem>(
															item,
															experienceKeys
														)}
													</ul>
												</Card>
											)
										)}
									</ul>
								</Attribute>
							)
					)}
				</ul>
			</CodeTag>
		</div>
	);
};

export default ExperiencePage;
