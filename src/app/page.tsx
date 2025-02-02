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

interface ContactItemInterface {
	icon: React.ElementType;
	text: string;
	url: string;
}

const IconSize = 36;

const Contacts: ContactItemInterface[] = [
	{
		icon: Github,
		text: 'GitHub',
		url: 'https://github.com/ianptkcs',
	},
	{
		icon: Linkedin,
		text: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ianptkcs/',
	},
	{
		icon: Phone,
		text: 'Phone',
		url: 'https://wa.me/5531998490641',
	},
	{
		icon: Mail,
		text: 'Email',
		url: 'mailto:ianptkcs@gmail.com',
	},
	{
		icon: Instagram,
		text: 'Instagram',
		url: 'https://www.instagram.com/ianptkcs/',
	},
];

const CV: ContactItemInterface = {
	icon: FileText,
	text: 'Download CV',
	url: '/cv.pdf',
};

export default function HomePage() {
	return (
		<>
			<div className="default-page-div pr-sidebar54">
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl font-bold text-text-strong">
						Hello!
					</h1>
					<p className="text-4xl text-text-primary w-10/12 leading-snug">
						I'm Ian Soares, a <b>self taught</b>{' '}
						<b className="text-text-strong">Fullstack Developer</b>{' '}
						and a{' '}
						<b className="text-text-strong">Private Teacher</b>.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold text-text-primary">
						Contact me:
					</p>
					<ul className="flex flex-wrap gap-5">
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
					<p className="text-lg font-bold text-text-primary">
						Download CV:
					</p>
					<div className="w-fit">
						<ContactItem contactItem={CV} />
					</div>
				</div>
			</div>
			<div className="fixed flex flex-col gap-2 h-[90vh] w-sidebar bottom-0 right-sidebar4 default-border no-bottom p-3 pt-10 bg-background-sidebar mt-[10vh]">
				<img
					src="/eu-dnv.jpg"
					alt="eu-dnv"
					className="object-cover default-border all"
				/>
				<p className="text-text-primary text-lg">
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

	return (
		<li
			className="flex items-center gap-5"
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
					size={IconSize}
					className={`text-text-primary ${
						isHovered && 'text-white'
					} transition-all duration-300 ease-in-out`}
				/>
				<p
					className={`text-lg font-semibold text-text-primary ${
						isHovered && 'text-white'
					} transition-all duration-300 ease-in-out`}
				>
					{contactItem.text}
				</p>
			</Link>
		</li>
	);
}
