import Image from 'next/image';
import React from 'react';
import foto from '@/assets/foto.jpg';
import '@/styles/custom.css';
import InfoBox from '@/components/RPGSheet/InfoBox';
import Stats from '@/components/RPGSheet/Stats';

const RPGSheet = () => {
	return (
		<div className='flex flex-col p-5 gap-4 bg-rpgsheet-background border-[1px] border-opacity-40 border-home-normal rounded-xl  text-home-normal text-xl'>
			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col gap-4'>
					<div className='flex justify-between gap-10'>
						<InfoBox
							label='Name'
							span='Ian Soares'
						/>
						<InfoBox
							label='Age'
							span='18'
						/>
					</div>
					<InfoBox
						label='Class & Level'
						span='Developer - Student'
					/>
					<InfoBox
						label='Background'
						span='Technologial Institute of Aeronautics (ITA)'
					/>
				</div>
				<div className='relative overflow-hidden aspect-w-1 aspect-h-1'>
					<div className='absolute inset-0'>
						<Image
							src={foto}
							alt='Foto do Ian Soares'
							layout='fill'
							objectFit='cover'
							className='rounded-xl custom-position border-[1px] border-opacity-30 border-home-normal p-2'
						/>
					</div>
				</div>
			</div>
			<label
				htmlFor='skills'
				className='font-bold italic ml-1 capitalize'
			>
				Atributes
			</label>
			<div
				id='skills'
				className='flex gap-5'
			>
				<Stats
					label='Hard Working'
					value='MAX'
				/>
				<Stats
					label='Self Learning'
					value='MAX'
				/>
				<Stats
					label='Problem Solving'
					value='MAX'
				/>
				<Stats
					label='Critical Thinking'
					value='MAX'
				/>
			</div>
		</div>
	);
};

export default RPGSheet;
