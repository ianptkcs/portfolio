import {
	Brain,
	Code,
	Computer,
	GraduationCap,
	Lightbulb,
	LucideIcon,
	Puzzle,
} from 'lucide-react';
import React from 'react';

export default function AboutPage() {
	return (
		<div className="default-page-div less-padding-top pr-sidebar34">
			<div className="flex flex-col gap-5">
				<p className="text-3xl text-text-primary font-bold">
					More about me
				</p>
				<div className="flex flex-col gap-6 text-xl text-text-primary text-justify">
					<ToughtCard Icon={Lightbulb}>
						<span>
							{' '}
							I’m a creative soul who loves dreaming up new
							things. I’m passionate about{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								art
							</span>
							,{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								solving problems
							</span>
							, and{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								puzzles
							</span>
							, which is exactly why I fell head over heels for{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								programming
							</span>
							. It’s the same reason I’m obsessed with{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								RPGs
							</span>
							—I love getting lost in rich worlds, solving
							intricate challenges, and crafting unique stories.
							And don’t even get me started on manga...{' '}
							<i>(yes, it counts as art AND reading!)</i>
						</span>
					</ToughtCard>
					<ToughtCard Icon={Code} right>
						<span>
							There’s something magical about turning ideas into
							reality with code, and that’s what pushed me to
							become a{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								Fullstack Developer
							</span>
							. Being able to bring my ideas to life through code?
							Yeah, that’s my jam.
						</span>
					</ToughtCard>
					<ToughtCard Icon={Brain}>
						<span>
							I’m a firm believer that{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								knowledge
							</span>{' '}
							is power, so I’m always learning something new. But
							I also love sharing what I know—it’s one of my
							favorite things to do. Explaining stuff in a way
							that clicks for people and seeing that{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								"aha!"
							</span>{' '}
							moment is so rewarding. That’s how I ended up
							becoming a private teacher{' '}
							<i>
								(earning some extra money isn't that bad too,
								right?)
							</i>
							. I love helping others understand what I’ve
							learned, and who knows? Maybe one day I’ll even
							lecture at a university!
						</span>
					</ToughtCard>
					<ToughtCard Icon={Puzzle} right>
						<span>
							For me, every{' '}
							<span className="text-text-strong font-bold dark:font-normal">
								challenge
							</span>{' '}
							is just another chance to grow, create something
							awesome, and maybe even inspire someone along the
							way. Life’s a puzzle, and I’m here to solve it—
							<span className="text-text-strong font-bold dark:font-normal">
								One Piece
							</span>{' '}
							(love it!) at a time.{' '}
						</span>
					</ToughtCard>
				</div>
			</div>
		</div>
	);
}

function ToughtCard({
	Icon,
	children,
	right = false,
}: {
	Icon: LucideIcon;
	children: React.ReactNode;
	right?: boolean;
}) {
	return (
		<div
			className={`flex gap-4 items-center default-border all p-4 ${
				right && 'translate-x-20'
			}`}
		>
			<Icon size={48} className="flex-shrink-0" />
			{children}
		</div>
	);
}
