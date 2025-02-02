import { Experience } from '@/interfaces/Experience';
import { DefaultCard } from './DefaultCard';

export default function ConnectedList({ items }: { items: Experience[] }) {
	const len = items.length;

	return (
		<div className="flex flex-col">
			{items.map((item, index) => {
				return (
					<div className="flex gap-2 items-center" key={item.title}>
						<div
							className={`w-[1px] ${
								index === 0
									? 'h-1/2 self-end'
									: index === len - 1
									? 'h-1/2 self-start'
									: 'h-full'
							} bg-text-primary -mr-[25px]`}
						></div>
						<div className="p-1 bg-background w-fit h-fit">
							<div className="w-6 h-6 default-border all no-shadow"></div>
						</div>
						<div className={`${index === 0 ? 'mb-2' : 'my-2'}`}>
							<DefaultCard item={item} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
