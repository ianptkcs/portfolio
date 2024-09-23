// src/pages/StudyPage.tsx
import React, { useMemo } from 'react';
import EducationItem from '@/interfaces/EducationItem';
import educationJSON from '@/data/Education.json';
import coursesJSON from '@/data/Courses.json';
import Card from '@/components/Study/Card';
import CodeTag from '@/components/General/CodeTag';
import CoursesItem from '@/interfaces/CoursesItem';
import { coursesKeys } from '@/utils/coursesKeys';
import { educationKeys } from '@/utils/educationKeys';
import { renderList } from '@/utils/renderList';
import Attribute from '@/components/Study/Attribute';
import { sortAndGroupCourses } from '@/utils/sortCourses';

const educationItems: EducationItem[] = educationJSON;
const coursesItems: CoursesItem[] = coursesJSON;

const StudyPage = () => {
	// Ordena e agrupa os cursos por tag
	const coursesGrouped = useMemo(
		() => sortAndGroupCourses(coursesItems),
		[coursesItems]
	);

	// Assuming you have the tagPriority mapping
	const tagPriority: Record<string, number> = {
		'Web Development': 1,
		'Programming Logic': 2,
		General: 3,
	};

	// Get the group keys (tags) from the grouped data
	const orderedTags = useMemo(() => {
		return Object.keys(coursesGrouped).sort((a, b) => {
			const priorityA = tagPriority[a] || Number.MAX_SAFE_INTEGER;
			const priorityB = tagPriority[b] || Number.MAX_SAFE_INTEGER;
			return priorityA - priorityB;
		});
	}, [coursesGrouped]);

	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-comment text-xl'>
				{'/* '}Some of my most relevant study{' */'}
			</h2>
			{/* Seção de Educação */}
			<CodeTag
				tag='Education'
				className='text-xl'
			>
				<ul className='flex flex-wrap gap-10'>
					{educationItems.map((item) => (
						<Card<EducationItem>
							key={item.name}
							item={item}
						>
							<ul>
								{renderList<EducationItem>(item, educationKeys)}
							</ul>
						</Card>
					))}
				</ul>
			</CodeTag>
			{/* Seção de Cursos */}
			<CodeTag
				tag='Courses'
				className='text-xl'
				hasChildren={false}
			>
				<ul className='flex flex-col gap-10'>
					{orderedTags.map(
						(tag) =>
							coursesGrouped[tag] && (
								<Attribute
									key={tag}
									text={tag}
								>
									<ul className='flex flex-wrap gap-10'>
										{coursesGrouped[tag].map((item) => (
											<Card<CoursesItem>
												key={item.name}
												item={item}
											>
												<ul>
													{renderList<CoursesItem>(
														item,
														coursesKeys
													)}
												</ul>
											</Card>
										))}
									</ul>
								</Attribute>
							)
					)}
				</ul>
			</CodeTag>
		</div>
	);
};

export default StudyPage;
