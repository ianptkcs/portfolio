// src/utils/sortAndGroup.ts
export function sortAndGroup<T>(
	items: T[],
	options: {
		primarySortKeyFn: (item: T) => number | string | Date;
		secondarySortKeyFn?: (item: T) => number | string | Date;
		groupingKeyFn: (item: T) => string;
		sortOrder?: 'asc' | 'desc';
	}
): Record<string, T[]> {
	const {
		primarySortKeyFn,
		secondarySortKeyFn,
		groupingKeyFn,
		sortOrder = 'asc',
	} = options;

	// Clone the items to avoid mutating the original array
	const itemsCopy = [...items];

	// Sorting logic
	itemsCopy.sort((a, b) => {
		const primaryA = primarySortKeyFn(a);
		const primaryB = primarySortKeyFn(b);

		let comparison = compareValues(primaryA, primaryB, sortOrder);

		if (comparison === 0 && secondarySortKeyFn) {
			const secondaryA = secondarySortKeyFn(a);
			const secondaryB = secondarySortKeyFn(b);
			comparison = compareValues(secondaryA, secondaryB, sortOrder);
		}

		return comparison;
	});

	// Grouping logic
	return itemsCopy.reduce<Record<string, T[]>>((acc, item) => {
		const groupKey = groupingKeyFn(item);
		if (!acc[groupKey]) {
			acc[groupKey] = [];
		}
		acc[groupKey].push(item);
		return acc;
	}, {});
}

// Helper function to compare values
function compareValues(
	a: number | string | Date,
	b: number | string | Date,
	sortOrder: 'asc' | 'desc'
): number {
	let result: number;

	if (typeof a === 'number' && typeof b === 'number') {
		result = a - b;
	} else if (a instanceof Date && b instanceof Date) {
		result = a.getTime() - b.getTime();
	} else {
		result = String(a).localeCompare(String(b));
	}

	return sortOrder === 'asc' ? result : -result;
}
