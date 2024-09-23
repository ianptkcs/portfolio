import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	className?: string;
	strong?: string;
	type?: string;
	array?: boolean;
	children?: React.ReactNode;
}
const ListItem = ({
	strong,
	type = 'string',
	className,
	array = false,
	children,
}: ListItemProps) => {
	let color = 'text-string';
	if (type === 'function') {
		color = 'text-function';
	} else if (type === 'number') {
		color = 'text-number';
	} else if (type === 'keyword') {
		color = 'text-keyword';
	} else if (type === 'variables') {
		color = 'text-variables italic';
	}

	return (
		<li className={twMerge('list-disc ml-10', className)}>
			<div className={`flex ${array && 'flex-col'} gap-2 items-top`}>
				{strong && (
					<strong className='capitalize whitespace-nowrap'>
						{strong}
						{' = '}
						{array && <span className='text-brackets'>{'['}</span>}
					</strong>
				)}
				<div className={`flex gap-2 items-center ${color}`}>
					{type === 'string' && !array && "'"}
					{children}
					{type === 'string' && !array && "'"}
				</div>
				{array && <span className='text-brackets'>{']'}</span>}
			</div>
		</li>
	);
};

export default ListItem;
