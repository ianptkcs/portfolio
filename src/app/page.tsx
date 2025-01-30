import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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

export default function HomePage() {
	return (
		<div className="flex px-20 gap-20">
			<div className="flex flex-col h-full w-full pt-28 pb-10 gap-10">
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl font-bold text-foreground">
						Hello!
					</h1>
					<p className="text-4xl">
						I'm Ian Soares, a Fullstack Developer and a Private
						Teacher.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-lg font-semibold">Contact me:</p>
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
					<p className="text-lg font-bold">More about me:</p>
					<p className="text-lg">
						I’m a creative soul who loves dreaming up new things.
						I’m passionate about art, solving problems, and puzzles,
						which is why I fell in love with programming. I believe
						knowledge is power, so I’m always learning. I love
						sharing what I know and contributing however I can.
						Every challenge is a chance to grow and create something
						awesome!
					</p>
				</div>
			</div>
			<img
				src="/eu-dnv.jpg"
				alt="eu-dnv"
				className="h-[90vh] rounded-lg border-2 border-black shadow-lg object-cover p-1"
			/>
		</div>
	);
}

function ContactItem({
	contactItem,
	...rest
}: {
	contactItem: ContactItemInterface;
} & React.HTMLAttributes<HTMLLIElement>) {
	return (
		<li className="flex items-center gap-5" {...rest}>
			<Link
				className="flex items-center gap-2 p-2 rounded-lg border-2 border-black shadow-lg hover:bg-primary-300 hover:text-text-purplePrimary hover:scale-105 transition-all duration-300 ease-in-out  "
				href={contactItem.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<contactItem.icon size={IconSize} />
				<p className="text-lg">{contactItem.text}</p>
			</Link>
		</li>
	);
}
