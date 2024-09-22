import React from 'react';

interface AttributeProps {
	children: React.ReactNode;
	text: string;
}

const Attribute = ({ children, text }: AttributeProps) => {
	return (
		<div className='flex flex-col gap-4'>
			<div className=''>
				<span className='text-function'>{text}</span>
				<span className='text-keyword'>=</span>
				<span className='text-brackets'>{'{'}</span>
			</div>
			{children}
			<span className={'text-brackets'}>{'}'}</span>
		</div>
	);
};

export default Attribute;
