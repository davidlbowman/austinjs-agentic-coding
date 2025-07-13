import { AlertTriangle, TrendingDown, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
	{
		icon: Users,
		value: "90%",
		label: "Engineering teams using AI coding tools",
		positive: true,
	},
	{
		icon: TrendingUp,
		value: "78%",
		label: "Organizations using or planning AI",
		positive: true,
	},
	{
		icon: TrendingUp,
		value: "25-30%",
		label: "Productivity gains reported by some",
		positive: true,
	},
	{
		icon: TrendingDown,
		value: "+19%",
		label: "Completion time increase in complex projects",
		positive: false,
	},
];

export function CurrentStateSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Current State of AI in Software Engineering
				</h2>

				<div className="max-w-5xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Left side - description */}
						<div className="space-y-4">
							<p className="text-lg">
								In 2025, AI is deeply integrated into software engineering,
								having evolved from basic assistance to handling complex tasks
								like code generation and optimization, boosting productivity in
								many teams.
							</p>
							<p>
								However, recent studies reveal a nuanced picture: while some
								report up to 25-30% productivity gains, others find AI can
								increase completion times by 19% in complex projects.
							</p>
							<p>
								Core limitations like finite context windows and computational
								constraints mean we're far from "infinite" capabilities,
								requiring smart tool choices to maximize effectiveness.
							</p>
							<div className="flex items-start gap-2 p-4 rounded-lg bg-purple-100/70 dark:bg-purple-900/20">
								<AlertTriangle className="h-5 w-5 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5" />
								<p className="text-sm">
									Challenges such as tool reliability, ethical concerns, and
									skill erosion persist, demanding careful oversight.
								</p>
							</div>
						</div>

						{/* Right side - Stats cards */}
						<div className="space-y-3">
							{statsData.map((stat) => (
								<Card key={stat.label}>
									<CardContent>
										<div className="flex items-center gap-4">
											<stat.icon
												className={`h-5 w-5 flex-shrink-0 ${
													stat.positive
														? "text-purple-500 dark:text-purple-400"
														: "text-purple-500/70 dark:text-purple-400/70"
												}`}
											/>
											<div className="flex-1 min-w-0">
												<p className="text-sm truncate">{stat.label}</p>
											</div>
											<div className="text-xl font-bold">{stat.value}</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
