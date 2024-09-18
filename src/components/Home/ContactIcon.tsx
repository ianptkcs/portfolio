import constants from '@/styles/constants';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { ContactItem } from '@/interfaces/Home';
import { BaseIcon } from '@/interfaces/BaseIcon';

interface ContactIconProps extends BaseIcon<ContactItem> {}

const ContactIcon = ({ icon, className }: ContactIconProps): ReactElement => {
	const IconComponent = icon;

	return (
		<IconComponent
			className={twMerge(
				`text-sidebar-icon transition-all duration-300 hover:scale-110`,
				className
			)}
			color={constants.sidebar.icon}
			size={32}
		/>
	);
};

export default ContactIcon;
