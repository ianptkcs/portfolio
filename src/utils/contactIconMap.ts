import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaEnvelope,
	FaWhatsapp,
} from 'react-icons/fa';
import { LucideProps } from 'lucide-react';

export const contactIconMap: {
	[key: string]: React.FC<LucideProps>;
} = {
	GitHub: FaGithub,
	LinkedIn: FaLinkedin,
	Instagram: FaInstagram,
	Email: FaEnvelope,
	WhatsApp: FaWhatsapp,
};
