import { BaseLink } from '@/interfaces/BaseLink';
import { LucideProps } from 'lucide-react';

export interface BaseIcon<T> {
	icon: React.FC<LucideProps>;
	className?: string;
	item: T & BaseLink;
}
