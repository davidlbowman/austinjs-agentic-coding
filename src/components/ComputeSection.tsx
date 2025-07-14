import {
	Cpu,
	DollarSign,
	Gauge,
	Infinity as InfinityIcon,
	TrendingDown,
} from "lucide-react";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const computeImpact = [
	{
		computePower: 10,
		contextCapacity: 1000,
		responseTime: "50ms",
		cost: "$0.001",
		quality: "Basic completions only",
		example: "Simple code snippets, no complex reasoning",
	},
	{
		computePower: 25,
		contextCapacity: 8000,
		responseTime: "200ms",
		cost: "$0.01",
		quality: "Standard development tasks",
		example: "Function generation, basic refactoring",
	},
	{
		computePower: 50,
		contextCapacity: 32000,
		responseTime: "800ms",
		cost: "$0.05",
		quality: "Complex code understanding",
		example: "Multi-file refactoring, architectural suggestions",
	},
	{
		computePower: 75,
		contextCapacity: 128000,
		responseTime: "2s",
		cost: "$0.20",
		quality: "Deep project analysis",
		example: "Full module understanding, dependency tracking",
	},
	{
		computePower: 100,
		contextCapacity: 1000000,
		responseTime: "10s",
		cost: "$2.00",
		quality: "Enterprise-scale reasoning",
		example: "Entire codebase analysis, system-wide optimizations",
	},
];

export function ComputeSection() {
	const [computeLevel, setComputeLevel] = useState(50);

	const getComputeStats = (level: number) => {
		const closest = computeImpact.reduce((prev, curr) => {
			return Math.abs(curr.computePower - level) <
				Math.abs(prev.computePower - level)
				? curr
				: prev;
		});

		const contextCapacity = Math.round(
			Math.exp((level / 100) * Math.log(1000000)),
		);

		return { ...closest, contextCapacity };
	};

	const stats = getComputeStats(computeLevel);

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">Compute in AI Coding Tools</h2>

				<div className="max-w-5xl mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>The Compute-Context Trade-off</CardTitle>
							<CardDescription>
								See how compute power limits context size and capabilities
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-8">
							<div className="space-y-4">
								<div className="flex justify-between text-sm">
									<span>Compute Power</span>
									<span className="font-mono">{computeLevel}%</span>
								</div>
								<Slider
									defaultValue={[50]}
									max={100}
									min={10}
									step={5}
									onValueChange={(value) => setComputeLevel(value[0])}
									className="w-full"
								/>
								<div className="flex justify-between text-xs text-muted-foreground">
									<span>Minimal (fast & cheap)</span>
									<span>Maximum (slow & expensive)</span>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="flex flex-col h-full">
									<div className="space-y-3 flex-1">
										<div className="flex items-center justify-between p-3 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg">
											<div className="flex items-center gap-2">
												<Cpu className="h-4 w-4 text-purple-500 dark:text-purple-400" />
												<span className="text-sm font-medium">
													Context Capacity
												</span>
											</div>
											<span className="font-mono text-sm font-bold">
												{stats.contextCapacity.toLocaleString()} tokens
											</span>
										</div>

										<div className="flex items-center justify-between p-3 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg">
											<div className="flex items-center gap-2">
												<Gauge className="h-4 w-4 text-purple-500 dark:text-purple-400" />
												<span className="text-sm font-medium">
													Response Time
												</span>
											</div>
											<span className="font-mono text-sm font-bold">
												{stats.responseTime}
											</span>
										</div>

										<div className="flex items-center justify-between p-3 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg">
											<div className="flex items-center gap-2">
												<DollarSign className="h-4 w-4 text-purple-500 dark:text-purple-400" />
												<span className="text-sm font-medium">
													Cost per Request
												</span>
											</div>
											<span className="font-mono text-sm font-bold">
												{stats.cost}
											</span>
										</div>
									</div>

									<div className="p-4 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg mt-4">
										<div className="flex items-center gap-2 mb-2">
											<TrendingDown className="h-4 w-4 text-purple-600 dark:text-purple-400" />
											<span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
												Trade-off Alert
											</span>
										</div>
										<p className="text-sm text-muted-foreground">
											{computeLevel < 50
												? "Limited compute severely restricts context size, forcing AI to work with incomplete information"
												: "Higher compute costs exponentially more but enables larger context processing"}
										</p>
									</div>
								</div>

								<div className="flex flex-col h-full">
									<div className="p-4 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg space-y-2 flex-1">
										<h4 className="font-semibold">AI Capability Level</h4>
										<p className="text-sm font-medium">{stats.quality}</p>
										<p className="text-sm text-muted-foreground">
											{stats.example}
										</p>
									</div>

									<div className="mt-4">
										<div className="text-sm font-medium mb-2">
											Effective Context Window
										</div>
										<div className="h-24 bg-purple-50/50 dark:bg-purple-900/10 rounded-lg relative overflow-hidden">
											<div
												className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-600/5 transition-all duration-500"
												style={{
													width: `${(stats.contextCapacity / 1000000) * 100}%`,
												}}
											/>
											<div className="relative z-10 h-full flex items-center justify-center">
												<span className="text-xs font-mono text-muted-foreground">
													{stats.contextCapacity < 100000
														? "Small codebase"
														: stats.contextCapacity < 500000
															? "Medium project"
															: "Large system"}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="pt-6 border-t space-y-4">
								<p>
									Compute refers to the processing power required to run AI
									models, encompassing both local machine resources (e.g., your
									device's CPU/GPU for on-device inference) and remote APIs
									(e.g., cloud-based services for heavy lifting).
								</p>
								<p>
									It determines how quickly and complexly AI can process inputs,
									generate outputs, and handle tasks like reasoning or
									optimization.{" "}
									<span className="font-semibold">
										Limitations in compute create bottlenecks
									</span>
									: on local machines, insufficient hardware leads to slow
									response times or inability to run large models, while API
									calls introduce latency, costs, and dependency on external
									servers.
								</p>
								<p>
									In the{" "}
									<span className="text-accent-purple">
										"context and compute game,"
									</span>{" "}
									finite compute restricts scalability—
									<span className="font-semibold">
										if we had infinite compute, AI could process vast contexts
										instantaneously
									</span>
									, enabling real-time, hyper-complex engineering solutions.
									Tools that optimize compute (e.g., via efficient algorithms or
									edge computing) are essential to mitigate these constraints.
								</p>
							</div>

							<div className="p-4 bg-purple-100/70 dark:bg-purple-900/20 rounded-lg">
								<div className="flex items-start gap-3">
									<InfinityIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
									<div className="space-y-2">
										<p className="text-purple-900 dark:text-purple-100">
											With infinite compute, context limitations disappear
										</p>
										<p className="text-sm text-muted-foreground">
											Models could process entire codebases, all documentation,
											every dependency, and historical changes
											simultaneously—making perfect architectural decisions and
											implementations possible.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
