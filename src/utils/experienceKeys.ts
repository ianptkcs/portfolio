import { ExperienceItem } from '@/interfaces/ExperienceItem';

export const experienceKeys = (): (keyof ExperienceItem)[] => [
	'ocupation',
	'period',
	'local',
	'description',
	'skills',
];
