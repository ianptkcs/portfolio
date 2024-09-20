import { useGeneral } from '@/context/General';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useNavigation = () => {
	const { setRoute } = useGeneral();
	const pathname = usePathname(); // Hook correto para acessar a URL atual

	useEffect(() => {
		// Atualiza a rota sempre que o pathname mudar
		setRoute(pathname);
	}, [pathname, setRoute]);

	return null;
};

export default useNavigation;
