'use client';

import { SidebarProvider } from '@/context/Sidebar';
import React from 'react';
import SideLogo from '@/components/Side/SideLogo';
import SideUl from '@/components/Side/SideUl';
import SideAside from '@/components/Side/SideAside';

const Sidebar = () => {
	return (
		<SidebarProvider>
			<SideAside>
				<SideLogo />
				<SideUl />
			</SideAside>
		</SidebarProvider>
	);
};

export default Sidebar;
