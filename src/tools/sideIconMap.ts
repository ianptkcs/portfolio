import { FaHome, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { FaTimeline, FaCode, FaListCheck } from 'react-icons/fa6';
import { LucideProps } from 'lucide-react';

export const sideIconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	Home: FaHome,
	Timeline: FaTimeline,
	Experience: FaBriefcase,
	Study: FaGraduationCap,
	Projects: FaCode,
	Todo: FaListCheck,
};
