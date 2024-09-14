import React from 'react';

const HomePage = () => {
	return (
		<div className='grid grid-cols-2'>
			<div className='flex flex-col gap-10 text-home-normal'>
				<span className='text-6xl font-mono'>Hello!</span>
				<span className='text-4xl text-home-normal font-mono'>
					This is{' '}
					<strong className='text-home-hello'>Ian Soares,</strong>
					<br />
					<span>
						I am a{' '}
						<strong className='text-home-role'>
							Fullstack Development Student
						</strong>
					</span>
				</span>
			</div>
			<div></div>
		</div>
	);
};

export default HomePage;
