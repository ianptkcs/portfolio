// src/pages/StudyPage.tsx
import React, { useMemo } from 'react';
import EducationItem from '@/interfaces/EducationItem';
import educationJSON from '@/data/Education.json';
import coursesJSON from '@/data/Courses.json';
import Card from '@/components/Study/Card';
import CodeTag from '@/components/General/CodeTag';
import CoursesItem from '@/interfaces/CoursesItem';
import { coursesKeys } from '@/tools/coursesKeys';
import { educationKeys } from '@/tools/educationKeys';
import { renderList } from '@/tools/renderList';
import Attribute from '@/components/Study/Attribute';
import { sortAndGroupCourses } from '@/tools/sortDate';
import CoursesTags from '@/enums/CoursesTags';

const educationItems: EducationItem[] = educationJSON;
const coursesItems: CoursesItem[] = coursesJSON;

const StudyPage = () => {
	// Ordena e agrupa os cursos por tag
	const coursesGrouped = useMemo(() => sortAndGroupCourses(coursesItems), []);

	// Obtém as tags ordenadas com base na prioridade definida no enum
	const orderedTags = useMemo(() => {
		// Extrai as chaves (tags) do objeto agrupado
		const tags = Object.keys(coursesGrouped) as unknown as CoursesTags[];

		// Ordena as tags com base na prioridade do enum
		return tags.sort((a, b) => {
			const priorityA = CoursesTags[a] as unknown as number;
			const priorityB = CoursesTags[b] as unknown as number;
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
			>
				<ul className='flex flex-col gap-10'>
					{orderedTags.map(
						(tag) =>
							coursesGrouped[tag] && (
								<Attribute
									key={tag}
									text={tag.toString()}
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
