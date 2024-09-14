import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SidebarContextType {
	isHovered: boolean;
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	isRendered: boolean;
	setIsRendered: React.Dispatch<React.SetStateAction<boolean>>;
	route: string;
	setRoute: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider');
	}
	return context;
};

interface SidebarProviderProps {
	children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
	children,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isRendered, setIsRendered] = useState(false);
	const [route, setRoute] = useState('/');

	return (
		<SidebarContext.Provider
			value={{
				isHovered,
				setIsHovered,
				isVisible,
				setIsVisible,
				isRendered,
				setIsRendered,
				route,
				setRoute,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};
