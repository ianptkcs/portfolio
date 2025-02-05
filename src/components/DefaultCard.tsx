import { EducationInterface } from '@/interfaces/Education';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Badge from './Badge';
import { Experience } from '@/interfaces/Experience';

export function DefaultCard({
	item,
	children,
}: {
	item: Experience;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-4 bg-background default-border all sm:p-3 p-2">
			<div className="flex gap-4 w-full">
				<Avatar>
					<AvatarImage
						src={item.src}
						alt={item.institution}
						className={`default-border all no-shadow w-24 h-auto object-cover p-2 ${
							item.src === 'newton.png' && 'dark:invert'
						}`}
					/>
					<AvatarFallback className="default-font-size base text-text-primary font-semibold">
						{item.institution}
					</AvatarFallback>
				</Avatar>
				<div className="flex md:flex-row flex-col gap-2 sm:justify-between w-full">
					<div className="flex flex-col gap-1 text-text-primary default-font-size base">
						<p className="text-text-strong font-bold">
							{item.title}
						</p>
						<p className="italic">{item.institution}</p>
					</div>
					<div className="flex flex-col md:gap-1 text-text-primary default-font-size base md:text-right text-left">
						<p className="text-text-primary default-font-size base">
							{item.date.start && `${item.date.start} -`}{' '}
							{item.date.end ? item.date.end : 'Present'}
						</p>
						<p className="text-text-primary default-font-size base">
							{item.location}
						</p>
					</div>
				</div>
			</div>
			{item.description && (
				<p className="default-font-size base font-semibold text-text-primary text-justify">
					{item.description}
				</p>
			)}
			{children}
			<div className="flex flex-wrap gap-2">
				{item.skills.map((skill) => (
					<Badge text={skill} key={skill} />
				))}
			</div>
		</div>
	);
}
