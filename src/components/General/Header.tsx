import React from 'react';
import Button from '@/components/General/Button';
import { FaUser } from 'react-icons/fa';

const Header = () => {
	return (
		<div className='absolute top-6 right-3 scale-90'>
			<Button icon={FaUser}>Let&rsquo;s talk</Button>
		</div>
	);
};

export default Header;
