import CoursesItem from '@/interfaces/CoursesItem';

export const coursesKeys = (): (keyof CoursesItem)[] => [
	'institution',
	'date',
	'skills',
	'description',
	'certificate',
];
