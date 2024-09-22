import { BaseCard } from '@/interfaces/BaseCard';

interface CoursesItem extends BaseCard {
	tag: string;
	institution: string;
	date: string;
	skills: string[];
	description?: string[];
	certificate?: Link;
}

interface Link {
	name: string;
	link: string;
}

export default CoursesItem;
