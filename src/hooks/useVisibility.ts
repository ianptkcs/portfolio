import { useSidebar } from '@/context/Sidebar';
import { useEffect } from 'react';

const useVisibility = () => {
	const { isHovered, setIsVisible } = useSidebar();
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (!isHovered) {
			setIsVisible(false);
		} else {
			timeout = setTimeout(() => {
				setIsVisible(true);
			}, 150);
		}
		return () => clearTimeout(timeout);
	}, [isHovered, setIsVisible]);
};

export default useVisibility;
