// src/utils/computePeriod.ts
import { parseDateString } from '@/utils/parseDate';
import { differenceInMonths } from 'date-fns';

interface Period {
	start?: string;
	end?: string;
}

interface ComputePeriodProps {
	period: Period;
}

const isYYYY = (dateString: string): boolean => {
	const regex = /^\d{4}$/;
	return regex.test(dateString);
};

export const computePeriod = ({ period }: ComputePeriodProps): string => {
	const { start, end } = period;
	const startDate = start ? parseDateString(start) : new Date(); // Use current date if 'start' is not provided
	const endDate = end ? parseDateString(end) : new Date(); // Use current date if 'end' is not provided

	const totalMonths = differenceInMonths(endDate, startDate);

	const years = Math.floor(totalMonths / 12);
	const months = (totalMonths % 12) + 1;

	let durationParts = [];
	if (years > 0) {
		durationParts.push(`${years} year${years > 1 ? 's' : ''}`);
	}
	if (months > 0) {
		durationParts.push(`${months} month${months > 1 ? 's' : ''}`);
	}
	if (durationParts.length === 0) {
		if (isYYYY(String(end))) durationParts.push('less than a year');
		else durationParts.push('less than a month');
	}

	const durationString = durationParts.join(' ');

	const periodString = `${start ? `${start} - ` : ''}${
		end ? end : 'Present'
	}, ${durationString}`;

	return periodString;
};
