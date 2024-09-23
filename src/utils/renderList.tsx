import ListItem from '@/components/Study/ListItem';
import { List } from 'lucide-react';
import React from 'react';
import { FaDownload, FaLink } from 'react-icons/fa';
import { computePeriod } from './computePeriod';
import { Period } from '@/interfaces/ExperienceItem';

export function renderList<T>(item: T, getAllowedKeys: () => (keyof T)[]) {
	const allowedKeys = getAllowedKeys();

	return allowedKeys.map((key) => {
		const value = item[key];
		if (value === undefined) {
			return null;
		}

		if (
			['certificate', 'link'].includes(String(key)) &&
			typeof value === 'object' &&
			value !== null
		) {
			// Supondo que 'certificate' tenha 'link' e 'name'
			const certificate = value as unknown as {
				link: string;
				name: string;
			};

			// Determina o href baseado no nome
			const href =
				certificate.name === 'Download'
					? `/docs/${certificate.link}.pdf` // Ajuste conforme a estrutura do seu arquivo
					: certificate.link;

			return (
				<ListItem
					key={key as string}
					strong={key as string}
					type='function'
				>
					{certificate.name === 'Download' ? (
						<a
							href={href}
							download
							target='_blank'
							rel='noopener noreferrer'
							className='flex gap-2 items-center hover:underline'
						>
							{certificate.name}
							<FaDownload size={12} />
						</a>
					) : (
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='flex gap-2 items-center hover:underline'
							href={href}
						>
							{certificate.name}
							<FaLink size={12} />
						</a>
					)}
				</ListItem>
			);
		} else if (key === 'description' && typeof value !== null) {
			return (
				<ListItem
					key={key as string}
					strong={key as string}
					array={true}
				>
					<ul>
						{Array.isArray(value) &&
							value.map((description, index) => {
								return (
									<ListItem key={index}>
										{description}
									</ListItem>
								);
							})}
					</ul>
				</ListItem>
			);
		}

		return (
			<ListItem
				key={key as string}
				strong={key as string}
				type={`${
					['ocupation'].includes(String(key))
						? 'keyword'
						: ['period'].includes(String(key))
						? 'variables'
						: 'string'
				}`}
			>
				{typeof value === 'object' && value !== null
					? Array.isArray(value)
						? value.join(', ')
						: key === 'period'
						? computePeriod({ period: value as unknown as Period })
						: JSON.stringify(value)
					: String(value)}
			</ListItem>
		);
	});
}
