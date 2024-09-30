import React from 'react';
import { twMerge } from 'tailwind-merge';
import '@/styles/custom.css';

interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children?: React.ReactNode;
	href: string;
	download?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
	className,
	children,
	href,
	...props
}) => {
	return (
		<a
			href={href}
			className={twMerge(
				`flex gap-2 items-center py-2 px-8 bg-button hover:bg-button-hover rounded-md text-xl font-bold text-normal hover:scale-105 transition-all duration-300 custom-shadow`,
				className
			)}
			{...props}
			download={props.download}
		>
			{children}
		</a>
	);
};

export default CustomLink;
