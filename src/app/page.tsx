'use client';

import React from 'react';
import contactsJSON from '@/data/Contacts.json';
import { ContactItem } from '@/interfaces/Home';
import { getIcon } from '@/utils/iconMap';
import { contactIconMap } from '@/utils/contactIconMap';
import Link from 'next/link';
import CustomLink from '@/components/General/CustomLink';
import { FaDownload, FaUser } from 'react-icons/fa';
import RPGSheet from '@/components/General/RPGSheet';

const contacts: ContactItem[] = contactsJSON;

const HomePage = () => {
	return (
		<div className='grid grid-cols-5 gap-10'>
			<div className='flex flex-col col-span-2 gap-10 text-normal'>
				<div className='flex flex-col gap-4 mt-24'>
					<span className='text-6xl text-keyword'>Hello!</span>
					<span className='text-4xl'>
						This is{' '}
						<span className='text-string'>
							&apos;Ian Soares&apos;
						</span>
						,
						<br />
						<span>
							I am a{' '}
							<span className='text-variables italic'>
								Fullstack_ Development_Student.
							</span>
						</span>
					</span>
				</div>
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
					<CustomLink
						href={
							contacts.filter((contact) => {
								return contact.name === 'Email';
							})[0].link
						}
					>
						Let&apos;s talk
						<FaUser className='inline ml-2 opacity-80' />
					</CustomLink>
					<CustomLink
						href='/docs/cv.pdf'
						download='Ian_Soares_CV.pdf'
					>
						Get Resume
						<FaDownload className='inline ml-2 opacity-80' />
					</CustomLink>
				</ul>
			</div>
			<div className='col-span-3'>
				<RPGSheet />
			</div>
		</div>
	);
};

export default HomePage;
