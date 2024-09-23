import EducationItem from '@/interfaces/EducationItem';

export const educationKeys = (): (keyof EducationItem)[] => [
	'degree',
	'location',
	'date',
];
