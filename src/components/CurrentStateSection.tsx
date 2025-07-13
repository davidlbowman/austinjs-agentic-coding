import { Clock, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const statsData = [
	{
		icon: Users,
		value: "90%",
		label: "Engineering teams using AI coding tools",
	},
	{
		icon: TrendingUp,
		value: "78%",
		label: "Organizations using or planning AI",
	},
	{
		icon: Clock,
		value: "25-30%",
		label: "Productivity gains reported",
	},
];

const progressData = [
	{
		label: "AI Tool Adoption",
		value: 90,
		displayValue: "90%",
	},
	{
		label: "Organizations Planning AI Implementation",
		value: 78,
		displayValue: "78%",
	},
	{
		label: "Context Window Utilization",
		value: 35,
		displayValue: "Limited",
	},
];

export function CurrentStateSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Current State of AI in Software Engineering
				</h2>

				{/* Stats Grid */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					{statsData.map((stat) => (
						<Card key={stat.label}>
							<CardContent className="p-6">
								<div className="flex items-center justify-between mb-2">
									<stat.icon className="h-5 w-5 text-muted-foreground" />
									<span className="text-3xl font-bold">{stat.value}</span>
								</div>
								<p className="text-sm text-muted-foreground">{stat.label}</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Progress Bars */}
				<div className="space-y-6 mb-12 max-w-2xl mx-auto">
					{progressData.map((item) => (
						<div key={item.label}>
							<div className="flex justify-between mb-2">
								<span className="text-sm font-medium">{item.label}</span>
								<span className="text-sm text-muted-foreground">
									{item.displayValue}
								</span>
							</div>
							<Progress value={item.value} className="h-2" />
						</div>
					))}
				</div>

				{/* Key Insights */}
				<div className="prose prose-lg mx-auto text-center">
					<p>
						In 2025, AI is deeply integrated into software engineering, with
						over 90% of engineering teams using AI coding tools, and 78% of
						organizations either actively using AI or planning to implement it
						within two years. It has evolved from basic assistance to handling
						complex tasks like code generation and optimization, boosting
						productivity in many teams. However, recent studies reveal a nuanced
						picture: while some report up to 25-30% productivity gains, others
						find AI can increase completion times by 19% in complex projects.
						Core limitations like finite context windows and computational
						constraints mean we're far from "infinite" capabilities, requiring
						smart tool choices to maximize effectiveness. Challenges such as
						tool reliability, ethical concerns, and skill erosion persist,
						demanding careful oversight.
					</p>
				</div>
			</div>
		</section>
	);
}
