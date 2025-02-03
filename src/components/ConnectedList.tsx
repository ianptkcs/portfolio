import { Experience } from '@/interfaces/Experience';
import { DefaultCard } from './DefaultCard';
import { sortByDates } from '@/lib/date';

export default function ConnectedList({ items }: { items: Experience[] }) {
	const len = items.length;
	items = sortByDates(items);

	return (
		<div className="flex flex-col">
			{items.map((item, index) => {
				return (
					<ConnectedItem
						item={item}
						index={index}
						len={len}
						key={index}
					/>
				);
			})}
		</div>
	);
}

function ConnectedItem({
	item,
	index,
	len,
}: {
	item: Experience;
	index: number;
	len: number;
}) {
	return (
		<div className="flex gap-2 items-center relative" key={item.title}>
			<div
				className={`w-[2px] ${
					index === 0
						? 'h-1/2 self-end'
						: index === len - 1
						? 'h-1/2 self-start'
						: 'h-full'
				} bg-text-primary absolute left-[19px] shadow-sm shadow-text-primary opacity-50`}
			></div>{' '}
			<div className="p-2 bg-background w-fit h-fit z-10">
				<div className="w-6 h-6 default-border all"></div>
			</div>
			<div className={`${index === 0 ? 'mb-2' : 'my-2'}`}>
				<DefaultCard item={item} />
			</div>
		</div>
	);
}
