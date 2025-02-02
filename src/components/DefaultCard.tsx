import { EducationInterface } from '@/interfaces/Education';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Badge from './Badge';
import { Experience } from '@/interfaces/Experience';

export function DefaultCard({ item }: { item: Experience }) {
	return (
		<div className="flex flex-col gap-4 bg-background default-border all p-3">
			<div className="flex justify-between">
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage
							src={item.src}
							alt={item.institution}
							className="default-border all no-shadow h-20 aspect-auto object-cover p-2"
						/>
						<AvatarFallback>{item.institution}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-1 text-text-primary text-lg">
						<p className="text-text-strong font-bold">
							{item.title}
						</p>
						<p className="italic">{item.institution}</p>
					</div>
				</div>
				<div className="flex flex-col gap-1 text-text-primary text-lg text-right">
					<p className="text-text-primary text-lg">
						{item.date.start} - {item.date.end || 'Present'}
					</p>
					<p className="text-text-primary text-lg">{item.location}</p>
				</div>
			</div>
			{item.description && (
				<p className="text-lg font-semibold text-text-primary">
					{item.description}
				</p>
			)}
			<div className="flex flex-wrap gap-2">
				{item.skills.map((skill) => (
					<Badge text={skill} key={skill} />
				))}
			</div>
		</div>
	);
}
