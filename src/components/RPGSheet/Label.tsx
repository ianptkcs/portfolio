import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends Omit<React.HTMLProps<HTMLLabelElement>, 'label'> {
	labelNode?: React.ReactNode;
	children?: React.ReactNode;
	isMethod?: string;
	isMethodProperty?: boolean;
	className?: string;
	operator?: string;
	thisProp?: boolean;
}

const Label = ({
	labelNode: label,
	children,
	className,
	isMethod,
	isMethodProperty = false,
	operator = ' =',
	thisProp,
	...props
}: LabelProps) => {
	if (isMethodProperty && operator === ' {') {
		operator = ' = {';
	}

	return (
		<label
			className={twMerge('ml-1 items-baseline text-xl', className)}
			{...props}
		>
			{thisProp && (
				<span className='text-variables opacity-60'>this</span>
			)}
			{thisProp && <span className='opacity-60'>.</span>}
			{label}
			<span className='text-keyword opacity-60'>{operator}</span>
			{isMethod && (
				<span className='text-keyword opacity-60'>
					<span className='text-variables italic'>
						{' ' + isMethod}
					</span>
					{' {'}
				</span>
			)}{' '}
			{children}
			{(operator.includes('{') || isMethod) && (
				<>
					<span className='text-keyword opacity-60'>{'}'}</span>
					<span className='opacity-60'>;</span>
				</>
			)}
		</label>
	);
};

export default Label;
