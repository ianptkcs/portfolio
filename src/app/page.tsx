'use client';

import React from 'react';
import contactsJSON from '@/data/Contacts.json';
import { ContactItem } from '@/interfaces/Home';
import { getIcon } from '@/tools/iconMap';
import { contactIconMap } from '@/tools/contactIconMap';
import Link from 'next/link';
import Button from '@/components/General/Button';
import { FaDownload, FaUser } from 'react-icons/fa';
import RPGSheet from '@/components/General/RPGSheet';

const contacts: ContactItem[] = contactsJSON;

const HomePage = () => {
	return (
		<div className='grid grid-cols-5 mt-24 gap-10'>
			<div className='flex flex-col col-span-2 gap-10 text-home-normal'>
				<span className='text-6xl font-mono'>Hello!</span>
				<span className='text-4xl text-home-normal font-mono'>
					This is{' '}
					<strong className='text-home-hello'>Ian Soares,</strong>
					<br />
					<span>
						I am a{' '}
						<strong className='text-home-role'>
							Fullstack Development Student.
						</strong>
					</span>
				</span>
				<ul className='flex gap-10'>
					{/* Mudar para between quando aumentar o numero de contatos */}
					{contacts.map((item) => (
						<li key={item.name}>
							<Link href={item.link}>
								{getIcon<ContactItem>({
									item,
									iconMap: contactIconMap,
									type: 'contact',
								})}
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex gap-10'>
					<Button icon={FaUser}>Let&apos;s talk</Button>
					<Button icon={FaDownload}>Get Resume</Button>
				</ul>
			</div>
			<div className='col-span-3'>
				<RPGSheet />
			</div>
		</div>
	);
};

export default HomePage;
