import { BaseCard } from '@/interfaces/BaseCard';

export interface ProjectsItem extends BaseCard {
	status: string;
	resume: string;
	period: Period;
	link: Link;
}

interface Period {
	start?: string;
	end: string;
}

interface Link {
	name: string;
	link: string;
}
