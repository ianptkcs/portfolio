import { SimpleDate } from './Utils';

export interface CardItem {
	title: string;
	institution: string;
	description?: string;
	location: string;
	src?: string;
	date: SimpleDate;
	skills: string[];
}
