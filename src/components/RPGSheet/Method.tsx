import React from 'react';
import Label from './Label';

interface MethodProps {
	label: string;
	operator?: string;
	children: React.ReactNode;
}

const Method = ({ label, children, operator = ':' }: MethodProps) => {
	return (
		<div className='flex gap-2'>
			<Label
				htmlFor='span'
				labelNode={
					<>
						<span className='text-function opacity-60'>
							{label}
						</span>
						<span className='text-keyword opacity-60'>()</span>
					</>
				}
				isMethod='void'
				operator={operator}
			>
				{children}
			</Label>
		</div>
	);
};

export default Method;
