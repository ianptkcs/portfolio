import Image from 'next/image';
import React from 'react';
import foto from '@/assets/foto.jpg';
import '@/styles/custom.css';
import InfoBox from '@/components/RPGSheet/InfoBox';
import Stats from '@/components/RPGSheet/Stats';
import Label from '@/components/RPGSheet/Label';

const RPGSheet = () => {
	return (
		<div className='flex flex-col px-4 pt-6 pb-2 gap-4 background-gradient-sheet custom-border text-normal text-xl custom-shadow shadow-keyword'>
			<Label
				htmlFor='sheet'
				className='text-2xl'
				operator=' {'
			>
				<span className='text-keyword'>class </span>
				<span className='text-variables'>DevStudent</span>
			</Label>
			<div
				id='sheet'
				className='flex flex-col gap-4 pl-12'
			>
				<div className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col justify-between'>
						<div className='flex justify-between gap-5'>
							<InfoBox
								label='Name'
								span='Ian Soares'
							/>
							<InfoBox
								label='Age'
								span='18'
								number={true}
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
					<div className='flex flex-col gap-1'>
						<Label htmlFor='photo'>Photo</Label>
						<div
							className='relative overflow-hidden aspect-square custom-border'
							id='photo'
						>
							<Image
								src={foto}
								alt='Foto do Ian Soares'
								fill
								style={{ objectFit: 'cover' }}
								className='rounded-xl custom-position p-2'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-1'>
					<Label
						htmlFor='skills'
						operator=': {'
					>
						Atributes
					</Label>
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
					<span className='text-keyword ml-1'>{'}'}</span>
				</div>
			</div>
			<span className='text-keyword text-2xl -mt-3'>{'}'}</span>
		</div>
	);
};

export default RPGSheet;
