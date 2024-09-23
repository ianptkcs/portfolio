import { ProjectsItem } from '@/interfaces/ProjectsItem';

export const projectsKeys = (): (keyof ProjectsItem)[] => [
	'resume',
	'period',
	'link',
];
