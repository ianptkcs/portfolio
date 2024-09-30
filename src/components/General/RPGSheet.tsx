import Image from 'next/image';
import React from 'react';
import '@/styles/custom.css';
import Label from '@/components/RPGSheet/Label';
import Property from '@/components/RPGSheet/Property';
import Method from '@/components/RPGSheet/Method';
import sidebarItemsJSON from '@/data/Sidebar.json';
import { SidebarItem } from '@/interfaces/Sidebar';

const RPGSheet = () => {
	const sidebarItems: SidebarItem[] = sidebarItemsJSON;
	return (
		<div className='flex flex-col px-4 pt-6 pb-2 gap-4 background-gradient-sheet custom-border text-normal text-xl custom-shadow shadow-keyword'>
			<Label
				htmlFor='sheet'
				className='text-2xl'
				operator=' {'
				labelNode={
					<>
						<span className='text-keyword'>class </span>
						<span className='text-variables'>DevStudent</span>
					</>
				}
			>
				<div
					id='sheet'
					className='flex flex-col gap-6 pl-5'
				>
					<div className='grid grid-cols-2 gap-4'>
						<ul className='flex flex-col'>
							<Property
								label='name'
								span='Ian Soares'
								type='string'
							/>
							<Property
								label='age'
								span='18'
								type='number'
							/>
							<Property
								label='attributes'
								span='Attribute[]'
								type='variables'
								operator=': '
							/>
							<Property
								label='pages'
								span='Page[]'
								type='variables'
								operator=': '
							/>
							<Method label='attributes'>
								<ul className='flex flex-col pl-4'>
									<Label
										thisProp={true}
										labelNode={<span>attributes</span>}
										operator=' {'
									>
										<div className='flex flex-col pl-4'>
											<Property
												label='hardWorking'
												span='true'
												isMethodProperty={true}
												type='number'
												className='opacity-100'
											/>
											<Property
												label='selfLearning'
												span='true'
												isMethodProperty={true}
												type='number'
												className='opacity-100'
											/>
											<Property
												label='problemSolving'
												span='true'
												isMethodProperty={true}
												type='number'
												className='opacity-100'
											/>
										</div>
									</Label>
								</ul>
							</Method>
							<Method label='pages'>
								<ul className='flex flex-col pl-4'>
									<span className='text-comment opacity-60'>
										{'/* '}Click to navigate
										{' */'}
									</span>
									<Label
										thisProp={true}
										labelNode={<span>pages</span>}
										operator=' {'
									>
										<div className='flex flex-col pl-4'>
											{sidebarItems
												.slice(1)
												.map((item) => (
													<Property
														key={item.name}
														label={item.name.toLowerCase()}
														isMethodProperty={true}
														span={item.name}
														type='variables'
														isLink={true}
													/>
												))}
										</div>
									</Label>
								</ul>
							</Method>
						</ul>
						<div className='flex flex-col gap-1'>
							<Label
								htmlFor='photo'
								labelNode={<span>photo</span>}
							></Label>
							<div className='relative overflow-hidden w-full h-full custom-border'>
								<Image
									src='/assets/foto.jpg'
									alt='Foto do Ian Soares'
									fill
									style={{ objectFit: 'cover' }}
									className='rounded-xl custom-position p-2'
								/>
							</div>
						</div>
					</div>
				</div>
			</Label>
		</div>
	);
};

export default RPGSheet;
