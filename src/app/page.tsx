'use client';

import {
	FileText,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Phone,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import ContactsJSON from '@/data/Contacts.json';
import { ContactItemInterface } from '@/interfaces/Contacts';

const iconMap: { [key: string]: React.ElementType } = {
	Github,
	Linkedin,
	Mail,
	Instagram,
	Phone,
};

const Contacts: ContactItemInterface[] = ContactsJSON.map((contact) => ({
	...contact,
	icon: iconMap[contact.icon] || FileText,
}));

const CV: ContactItemInterface = {
	icon: FileText,
	text: 'Download CV',
	url: '/cv.pdf',
};

export default function HomePage() {
	return (
		<>
			<div className="default-page-div more-padding-right">
				<div className="flex flex-col sm:gap-4 gap-2">
					<h1 className="default-font-size xl4 font-bold text-text-strong">
						Hello!
					</h1>
					<p className="default-font-size xl3 text-text-primary w-10/12 leading-snug">
						I'm Ian Soares, a <b>self taught</b>{' '}
						<b className="text-text-strong">Fullstack Developer</b>{' '}
						and a{' '}
						<b className="text-text-strong">Private Teacher</b>.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<p className="default-font-size base font-bold text-text-primary">
						Contact me:
					</p>
					<ul className="flex flex-wrap sm:gap-5 gap-3">
						{Contacts.map((contact) => {
							return (
								<ContactItem
									contactItem={contact}
									key={contact.text}
								/>
							);
						})}
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<p className="default-font-size base font-bold text-text-primary">
						Download CV:
					</p>
					<div className="w-fit">
						<ContactItem contactItem={CV} />
					</div>
				</div>
			</div>
			<div className="fixed lg:flex hidden flex-col gap-2 h-[90vh] w-sidebar bottom-0 right-sidebar4 default-border no-bottom p-3 pt-10 bg-background-sidebar mt-[10vh]">
				<img
					src="/eu-dnv.jpg"
					alt="eu-dnv"
					className="object-cover default-border all"
				/>
				<p className="text-sm lg:text-lg text-text-primary">
					Obs.:{' '}
					<i>
						No, I did not ate it ALL alone, had a litle, litle help!
						@_dekaju_
					</i>
				</p>
			</div>
		</>
	);
}

function ContactItem({
	contactItem,
	...rest
}: {
	contactItem: ContactItemInterface;
} & React.HTMLAttributes<HTMLLIElement>) {
	const [isHovered, setIsHovered] = useState(false);
	const [iconSize, setIconSize] = useState(
		typeof window !== 'undefined' && window.innerWidth < 1024 ? 24 : 36
	);

	React.useEffect(() => {
		const handleResize = () => {
			setIconSize(window.innerWidth < 1024 ? 24 : 36);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<li
			className="flex items-center sm:gap-5 gap-3"
			{...rest}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link
				className={`flex items-center gap-3 p-3 default-border all transition-all duration-300 ease-in-out ${
					isHovered && 'bg-background-button scale-105'
				}`}
				href={contactItem.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<contactItem.icon
					size={iconSize}
					className={`text-text-primary ${
						isHovered && 'text-white'
					} transition-all duration-300 ease-in-out`}
				/>
				<p
					className={`default-font-size base font-semibold text-text-primary ${
						isHovered && 'text-white'
					} transition-all duration-300 ease-in-out`}
				>
					{contactItem.text}
				</p>
			</Link>
		</li>
	);
}
