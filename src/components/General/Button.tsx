import { LucideProps } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import '@/styles/custom.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon: React.ComponentType<LucideProps>;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	className,
	icon: Icon,
	children,
	...props
}) => {
	return (
		<button
			className={twMerge(
				`flex gap-2 items-center py-2 px-8 bg-button hover:bg-button-hover rounded-md text-xl font-bold text-normal hover:scale-105 transition-all duration-300 custom-shadow`,
				className
			)}
			{...props}
		>
			{children}
			<Icon className='inline ml-2 opacity-80' />
		</button>
	);
};

export default Button;
