import { BaseCard } from '@/interfaces/BaseCard';

interface EducationItem extends BaseCard {
	degree: string;
	location: string;
	date: string;
}

export default EducationItem;
