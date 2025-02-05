export default function Badge({ text }: { text: string }) {
	return (
		<span className="text-text-primary default-font-size base sm:px-2 px-1 default-border all no-shadow cursor-default">
			{text}
		</span>
	);
}
