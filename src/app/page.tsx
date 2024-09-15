'use client';

import React from 'react';
import contactsJSON from '@/data/Contacts.json';
import { ContactItem } from '@/interfaces/Home';
import { getIcon } from '@/tools/iconMap';
import { contactIconMap } from '@/tools/contactIconMap';

const contacts: ContactItem[] = contactsJSON;

const HomePage = () => {
	return (
		<div className='grid grid-cols-2'>
			<div className='flex flex-col gap-10 text-home-normal'>
				<span className='text-6xl font-mono'>Hello!</span>
				<span className='text-4xl text-home-normal font-mono'>
					This is{' '}
					<strong className='text-home-hello'>Ian Soares,</strong>
					<br />
					<span>
						I am a{' '}
						<strong className='text-home-role'>
							Fullstack Development Student
						</strong>
					</span>
				</span>
				<ul className='flex gap-2'>
					{contacts.map((item) => (
						<li key={item.name}>
							{getIcon<ContactItem>({
								item,
								iconMap: contactIconMap,
								type: 'contact',
							})}
							{item.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
