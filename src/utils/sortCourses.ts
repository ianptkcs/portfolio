// src/utils/sortCourses.ts
import CoursesItem from '@/interfaces/CoursesItem';
import { sortAndGroup } from '@/utils/sortAndGroup';
import { parseDateString } from '@/utils/parseDate';

// Define your tag priority mapping
const tagPriority: Record<string, number> = {
	'Web Development': 1,
	'Programming Logic': 2,
	General: 3,
};

export const sortAndGroupCourses = (courses: CoursesItem[]) => {
	return sortAndGroup<CoursesItem>(courses, {
		primarySortKeyFn: (item) =>
			tagPriority[item.tag] || Number.MAX_SAFE_INTEGER,
		secondarySortKeyFn: (item) =>
			parseDateString(item.period.end).getTime(),
		groupingKeyFn: (item) => item.tag,
		sortOrder: 'asc', // Adjust if needed
	});
};
