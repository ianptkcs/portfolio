import ListItem from '@/components/Study/ListItem';
import React from 'react';
import { FaDownload, FaLink } from 'react-icons/fa';

export function renderList<T>(item: T, getAllowedKeys: () => (keyof T)[]) {
	const allowedKeys = getAllowedKeys();

	return allowedKeys.map((key) => {
		const value = item[key];
		if (value === undefined) {
			return null;
		}

		if (
			key === 'certificate' &&
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
					text={certificate.name}
				>
					{certificate.name === 'Download' ? (
						<a
							href={href}
							download
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center'
						>
							<FaDownload size={12} />
						</a>
					) : (
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center'
							href={href}
						>
							<FaLink size={12} />
						</a>
					)}
				</ListItem>
			);
		}

		return (
			<ListItem
				key={key as string}
				strong={key as string}
				text={
					typeof value === 'object' && value !== null
						? Array.isArray(value)
							? value.join(', ')
							: JSON.stringify(value)
						: String(value)
				}
			/>
		);
	});
}
