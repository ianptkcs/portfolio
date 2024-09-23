// src/utils/dateUtils.ts
import { parse, isValid } from 'date-fns';

export const parseDateString = (dateStr: string): Date => {
	// Define the possible date formats
	const formats = ['MMM yyyy', 'yyyy'];

	let parsedDate: Date | null = null;

	// Try parsing the date string with each format
	for (const format of formats) {
		parsedDate = parse(dateStr, format, new Date());
		if (isValid(parsedDate)) {
			return parsedDate;
		}
	}

	// Handle invalid dates
	return new Date(0);
};
