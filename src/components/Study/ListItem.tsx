import React from 'react';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	strong: string;
	text: string;
}

const ListItem = ({ strong, text }: ListItemProps) => {
	return (
		<li className='list-disc ml-10'>
			<strong className='capitalize '>
				{strong}
				{': '}
			</strong>
			{text}
		</li>
	);
};

export default ListItem;
