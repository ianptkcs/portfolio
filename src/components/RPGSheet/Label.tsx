import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
	children: React.ReactNode;
	className?: string;
	operator?: string;
}

const Label = ({
	children,
	className,
	operator = ':',
	...props
}: LabelProps) => {
	return (
		<label
			className={twMerge('ml-1 items-baseline', className)}
			{...props}
		>
			{children}
			<span className='text-keyword'>{operator}</span>
		</label>
	);
};

export default Label;
