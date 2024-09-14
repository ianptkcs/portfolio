import { useSidebar } from '@/context/Sidebar';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useNavigation = () => {
	const { setRoute } = useSidebar();
	const pathname = usePathname(); // Hook correto para acessar a URL atual

	useEffect(() => {
		// Atualiza a rota sempre que o pathname mudar
		setRoute(pathname);
	}, [pathname, setRoute]);

	return null;
};

export default useNavigation;
