import { Experience } from '@/interfaces/Experience';
import { SimpleDate } from '@/interfaces/Utils';

export function sortByDates<T extends { date?: SimpleDate }>(
	elements: T[]
): T[] {
	return elements.sort((a, b) => {
		const parseDate = (dateStr: string | undefined): Date | null => {
			if (!dateStr) return null;
			const [month, year] = dateStr.split(' ');
			const monthIndex = new Date(`1 ${month} ${year}`).getMonth();
			return new Date(Number(year), monthIndex);
		};

		const dateA = parseDate(a.date?.start) || parseDate(a.date?.end);
		const dateB = parseDate(b.date?.start) || parseDate(b.date?.end);

		if (!dateA && !dateB) return 0;
		if (!dateA) return 1;
		if (!dateB) return -1;

		return dateB.getTime() - dateA.getTime();
	});
}
