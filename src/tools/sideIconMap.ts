import { FaHome, FaDumbbell, FaGraduationCap } from 'react-icons/fa';
import { FaTimeline, FaCode, FaListCheck } from 'react-icons/fa6';
import { LucideProps } from 'lucide-react';

export const sideIconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	Home: FaHome,
	Timeline: FaTimeline,
	Skills: FaDumbbell,
	Education: FaGraduationCap,
	Projects: FaCode,
	Todo: FaListCheck,
};
