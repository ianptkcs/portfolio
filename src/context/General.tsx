'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GeneralContextType {
	route: string;
	setRoute: React.Dispatch<React.SetStateAction<string>>;
}

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const useGeneral = () => {
	const context = useContext(GeneralContext);
	if (!context) {
		throw new Error('useGeneral must be used within a GeneralProvider');
	}
	return context;
};

interface GeneralProviderProps {
	children: ReactNode;
}

export const GeneralProvider: React.FC<GeneralProviderProps> = ({
	children,
}) => {
	const [route, setRoute] = useState('/');

	return (
		<GeneralContext.Provider
			value={{
				route,
				setRoute,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
};
