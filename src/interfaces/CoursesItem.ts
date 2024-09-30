import { BaseCard } from '@/interfaces/BaseCard';

interface CoursesItem extends BaseCard {
	tag: string;
	institution: string;
	period: Period;
	skills: string[];
	description?: string[];
	certificate?: Link;
}

interface Period {
	start?: string;
	end: string;
}

interface Link {
	name: string;
	link: string;
}

export default CoursesItem;
