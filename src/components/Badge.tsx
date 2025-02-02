export default function Badge({ text }: { text: string }) {
	return (
		<span className="text-text-primary text-md px-2 default-border all no-shadow cursor-default">
			{text}
		</span>
	);
}
