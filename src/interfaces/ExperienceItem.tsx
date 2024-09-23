import { BaseCard } from '@/interfaces/BaseCard';

export interface ExperienceItem extends BaseCard {
	status: string;
	ocupation: string;
	period: Period;
	local: string;
	description: string[];
	skills: string[];
}

export interface Period {
	start: string;
	end?: string;
}
