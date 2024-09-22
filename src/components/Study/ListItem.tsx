import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	className?: string;
	strong: string;
	text: string;
	children?: React.ReactNode;
}

const ListItem = ({ strong, text, className, children }: ListItemProps) => {
	return (
		<li className={twMerge('list-disc ml-10', className)}>
			<div className='flex gap-2 items-top'>
				<strong className='capitalize whitespace-nowrap'>
					{strong}
					{' = '}
				</strong>
				<div
					className={`flex gap-2 items-center ${
						children ? 'text-function' : 'text-string'
					}`}
				>
					{!children && "'"}
					{text}
					{children}
					{!children && "'"}
				</div>
			</div>
		</li>
	);
};

export default ListItem;
