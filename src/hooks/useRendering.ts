import { useSidebar } from '@/context/Sidebar';
import { useEffect } from 'react';

const useRendering = () => {
	const { isVisible, setIsRendered, isHovered } = useSidebar();

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (!isVisible) {
			timeout = setTimeout(() => {
				setIsRendered(false);
			}, 150);
		} else if (isHovered) {
			setIsRendered(true);
		}
		return () => clearTimeout(timeout);
	}, [isVisible, setIsRendered, isHovered]);
};

export default useRendering;
