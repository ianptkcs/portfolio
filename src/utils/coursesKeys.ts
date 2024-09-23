import CoursesItem from '@/interfaces/CoursesItem';

export const coursesKeys = (): (keyof CoursesItem)[] => [
	'institution',
	'period',
	'skills',
	'description',
	'certificate',
];
