import React from 'react';
import Label from '@/components/RPGSheet/Label';

interface InfoBoxProps {
	label: string;
	span: string;
	number?: boolean;
}

const InfoBox = ({ label, span, number = false }: InfoBoxProps) => {
	if (!number) {
		span = `\'${span}\'`;
	}

	return (
		<div className='flex flex-col gap-1 w-full'>
			<Label htmlFor='name'>{label}</Label>
			<div className='p-2 custom-border max-w-[256px] custom-shadow'>
				<span
					className={`${number ? 'text-number' : 'text-string'}`}
					id='name'
				>
					{span}
				</span>
			</div>
		</div>
	);
};

export default InfoBox;
