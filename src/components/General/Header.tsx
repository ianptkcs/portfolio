import React from 'react';
import CustomLink from '@/components/General/CustomLink';
import { FaUser } from 'react-icons/fa';
import { ContactItem } from '@/interfaces/Home';
import contactsJSON from '@/data/Contacts.json';

const contatcs: ContactItem[] = contactsJSON;

const Header = () => {
	return (
		<div className='absolute top-6 right-3 scale-90'>
			<CustomLink
				href={
					contatcs.filter((contact) => {
						return contact.name === 'Email';
					})[0].link
				}
			>
				Let&rsquo;s talk
				<FaUser className='inline ml-2 opacity-80' />
			</CustomLink>
		</div>
	);
};

export default Header;
