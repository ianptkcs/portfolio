import React from 'react';
import Label from '@/components/RPGSheet/Label';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface PropertyProps {
	label: string;
	span: string;
	type: string;
	isMethodProperty?: boolean;
	isLink?: boolean;
	className?: string;
}

const Property = ({
	label,
	span,
	type,
	isMethodProperty,
	isLink,
	className,
}: PropertyProps) => {
	let color: string = '';
	switch (type) {
		case 'string':
			color = 'text-string';
			break;
		case 'number':
			color = 'text-number';
			break;
		case 'variables':
			color = 'text-variables italic';
			break;
	}

	let array: string = '';
	if (span.includes('[]')) {
		span = span.replace('[]', '');
		array = '[]';
	}

	return (
		<div className={twMerge('flex gap-2', className)}>
			<Label
				htmlFor='span'
				isMethodProperty={isMethodProperty}
				labelNode={<span>{label}</span>}
			>
				{' '}
				<span
					className={`text-xl ${color}`}
					id='span'
				>
					{isLink ? (
						<Link href={`/${span.toLowerCase()}`}>{span}</Link>
					) : (
						span
					)}
					{array && (
						<span className='text-brackets not-italic'>
							{array}
						</span>
					)}
				</span>
				<span>{isMethodProperty ? ',' : ';'}</span>
				{isLink && <span className='text-brackets not-italic'></span>}
			</Label>
		</div>
	);
};

export default Property;
