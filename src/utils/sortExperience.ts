// src/utils/sortExperiences.ts
import { ExperienceItem } from '@/interfaces/ExperienceItem';
import { sortAndGroup } from '@/utils/sortAndGroup';
import { parseDateString } from '@/utils/parseDate';

// Define your status priority mapping
const statusPriority: Record<string, number> = {
	present: 1,
	past: 2,
};

export const sortAndGroupExperiences = (experiences: ExperienceItem[]) => {
	return sortAndGroup<ExperienceItem>(experiences, {
		primarySortKeyFn: (item) =>
			statusPriority[item.status] || Number.MAX_SAFE_INTEGER,
		secondarySortKeyFn: (item) =>
			parseDateString(item.period.start).getTime(),
		groupingKeyFn: (item) => item.status,
		sortOrder: 'asc', // Adjust if needed
	});
};
