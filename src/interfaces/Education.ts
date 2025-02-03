import { CardItem } from './Default';
import { SimpleDate } from './Utils';

export interface EducationInterface extends CardItem {
	certificate?: Certificate;
}

export interface Certificate {
	src: string;
	type: string;
}
