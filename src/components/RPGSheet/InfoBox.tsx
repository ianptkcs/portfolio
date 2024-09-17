import React from 'react';

interface InfoBoxProps {
	label: string;
	span: string;
}

const InfoBox = ({ label, span }: InfoBoxProps) => {
	return (
		<div className='flex flex-col gap-1 w-full'>
			<label
				htmlFor='name'
				className='font-bold italic ml-1 capitalize'
			>
				{label}
			</label>
			<div className='p-2 pr-4 border-[1px] border-opacity-40 border-home-normal rounded-md max-w-[256px]'>
				<span id='name'>{span}</span>
			</div>
		</div>
	);
};

export default InfoBox;
