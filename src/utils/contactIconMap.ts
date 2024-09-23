import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LucideProps } from 'lucide-react';

export const contactIconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	GitHub: FaGithub,
	LinkedIn: FaLinkedin,
	Instagram: FaInstagram,
};
