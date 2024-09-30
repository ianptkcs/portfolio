// src/utils/sortProjectss.ts
import { ProjectsItem } from '@/interfaces/ProjectsItem';
import { sortAndGroup } from '@/utils/sortAndGroup';
import { parseDateString } from '@/utils/parseDate';

// Define your status priority mapping
const statusPriority: Record<string, number> = {
	completed: 1,
	ongoing: 2,
};

export const sortAndGroupProjects = (projects: ProjectsItem[]) => {
	return sortAndGroup<ProjectsItem>(projects, {
		primarySortKeyFn: (item) =>
			statusPriority[item.status] || Number.MAX_SAFE_INTEGER,
		secondarySortKeyFn: (item) =>
			parseDateString(item.period.end).getTime(),
		groupingKeyFn: (item) => item.status,
		sortOrder: 'desc', // Adjust if needed
	});
};
