import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CodeTagProps {
	tag: string;
	className?: string;
	hasChildren?: boolean;
	children: React.ReactNode;
}

const CodeTag = ({
	tag,
	children,
	hasChildren = true,
	className,
}: CodeTagProps) => {
	return (
		<div className={twMerge('flex flex-col gap-8', className)}>
			<div className='flex gap-[1px]'>
				<span className='text-normal'>{'<'}</span>
				<span className='text-variables capitalize'>{tag}</span>
				{hasChildren && <span className='text-normal'>{'>'}</span>}
			</div>
			<div className='ml-10'>{children}</div>
			<div className='flex gap-[1px]'>
				{hasChildren ? (
					<>
						<span className='text-normal'>{'</'}</span>
						<span className='text-variables capitalize'>{tag}</span>
						<span className='text-normal'>{'>'}</span>
					</>
				) : (
					<span className='text-normal'>{'/>'}</span>
				)}
			</div>
		</div>
	);
};

export default CodeTag;
