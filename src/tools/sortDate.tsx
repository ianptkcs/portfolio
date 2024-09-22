// src/utils/sortAndGroupCourses.ts
import CoursesItem from '@/interfaces/CoursesItem';
import CoursesTags from '@/enums/CoursesTags';
import { parse, isValid } from 'date-fns';

/**
 * Mapeamento de prioridade para as tags usando o enum CoursesTags.
 * Menor número indica maior prioridade.
 */
const tagPriority: Record<CoursesTags, number> = {
	[CoursesTags.webDevelopment]: 1,
	[CoursesTags.programmingLogic]: 2,
	[CoursesTags.general]: 3,
};

/**
 * Função para converter uma string de data para um objeto Date.
 * @param dateStr - String da data no formato "Month Year" (e.g., "January 2020")
 * @returns Objeto Date correspondente.
 */
const parseDate = (dateStr: string): Date => {
	const [month, year] = dateStr.split(' ');
	if (!year) {
		// Se não houver ano, retorna uma data mínima
		return new Date(0);
	}

	// Tenta parsear a data usando date-fns
	const parsedDate = parse(`${month} ${year}`, 'LLLL yyyy', new Date());

	if (isValid(parsedDate)) {
		return parsedDate;
	}

	// Se falhar no parsing, retorna dezembro do ano especificado
	return new Date(parseInt(year, 10), 11);
};

/**
 * Função para ordenar e agrupar os cursos.
 * Primeiro por prioridade da tag, depois por data descendente dentro de cada tag.
 * @param courses - Array de CoursesItem a ser ordenado e agrupado.
 * @returns Objeto onde as chaves são as tags e os valores são arrays de CoursesItem.
 */
export const sortAndGroupCourses = (
	courses: CoursesItem[]
): Record<CoursesTags, CoursesItem[]> => {
	// Ordena os cursos primeiro pela prioridade da tag, depois pela data
	const sortedCourses = [...courses].sort((a, b) => {
		const priorityA =
			tagPriority[a.tag as unknown as CoursesTags] ||
			Number.MAX_SAFE_INTEGER;
		const priorityB =
			tagPriority[b.tag as unknown as CoursesTags] ||
			Number.MAX_SAFE_INTEGER;

		if (priorityA !== priorityB) {
			return priorityA - priorityB; // Ordena pela prioridade da tag
		}

		const dateA = parseDate(a.date);
		const dateB = parseDate(b.date);

		return dateB.getTime() - dateA.getTime(); // Ordena por data decrescente
	});

	// Agrupa os cursos por tag
	const grouped = sortedCourses.reduce<Record<CoursesTags, CoursesItem[]>>(
		(acc, course) => {
			const tag = course.tag as unknown as CoursesTags;
			if (!acc[tag]) {
				acc[tag] = [];
			}
			acc[tag].push(course);
			return acc;
		},
		{} as Record<CoursesTags, CoursesItem[]>
	);

	return grouped;
};
