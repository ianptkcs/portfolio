import React, { useMemo } from 'react';
import LinkPreview from '@/components/Projects/LinkPreview';
import { ProjectsItem } from '@/interfaces/ProjectsItem';
import projectsJSON from '@/data/Projects.json';
import CodeTag from '@/components/General/CodeTag';
import { sortAndGroupProjects } from '@/utils/sortProjects';
import { renderList } from '@/utils/renderList';
import { projectsKeys } from '@/utils/projectsKeys';
import Attribute from '@/components/Study/Attribute';

const projectsItems: ProjectsItem[] = projectsJSON;

const ProjectsPage = () => {
	const projectsGrouped = useMemo(
		() => sortAndGroupProjects(projectsItems),
		[projectsItems]
	);

	// Assuming you have the statusPriority mapping
	const statusPriority: Record<string, number> = {
		completed: 1,
		ongoing: 2,
	};

	// Get the group keys (statuss) from the grouped data
	const orderedStatuses = useMemo(() => {
		return Object.keys(projectsGrouped).sort((a, b) => {
			const priorityA = statusPriority[a] || Number.MAX_SAFE_INTEGER;
			const priorityB = statusPriority[b] || Number.MAX_SAFE_INTEGER;
			return priorityA - priorityB;
		});
	}, [projectsGrouped]);

	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-comment text-xl'>
				{'/* '}Some of my most relevant projects{' */'}
			</h2>
			<CodeTag
				tag='Projects'
				className='text-xl'
				hasChildren={false}
			>
				<ul className='flex flex-wrap gap-10'>
					{orderedStatuses.map(
						(status) =>
							projectsGrouped[status] && (
								<Attribute
									key={status}
									text={status}
								>
									<ul className='flex flex-wrap gap-10'>
										{projectsGrouped[status].map(
											(item, index) => (
												<li
													key={item.name}
													className={`flex flex-wrap ${
														index % 2 === 0
															? 'justify-start'
															: 'justify-end'
													}`}
												>
													<LinkPreview
														key={item.name}
														item={item}
														index={index}
													>
														<ul>
															{renderList<ProjectsItem>(
																item,
																projectsKeys
															)}
														</ul>
													</LinkPreview>
												</li>
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

export default ProjectsPage;
