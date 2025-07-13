import { Bot, Code, TrendingUp, Users } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const marketData = [
	{ year: "2024", value: "$28B", label: "Current market size" },
	{ year: "2029", value: "$127B", label: "Projected market size" },
	{ year: "2025", value: "25%", label: "Enterprises deploying AI agents" },
];

export function AgenticCodingSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Agentic Coding: Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					{/* Introduction */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Bot className="h-5 w-5" />
								Autonomous AI Agents
							</CardTitle>
							<CardDescription>
								Beyond simple code generation to full engineering workflows
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Agentic coding refers to systems where autonomous AI agents
								handle tasks independently or collaboratively, often powered by
								large language models (LLMs) that execute code-based reasoning.
							</p>
							<p>
								These agents go beyond simple code generation; they simulate
								end-to-end engineering workflows, such as planning, coding,
								testing, and iterating. Tools like Devin exemplify this by
								acting as virtual software engineers capable of managing full
								projects through modular, goal-oriented behaviors.
							</p>
						</CardContent>
					</Card>

					{/* Market Growth */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<TrendingUp className="h-5 w-5" />
								Rapid Market Growth
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-3 gap-4 text-center">
								{marketData.map((item) => (
									<div key={item.year} className="space-y-2">
										<div className="text-2xl font-bold text-accent-purple">
											{item.value}
										</div>
										<div className="text-sm text-muted-foreground">
											{item.label}
										</div>
										<div className="text-xs font-medium">{item.year}</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Context Expansion */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Code className="h-5 w-5" />
								Context Distribution
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Agentic coding expands context by distributing it across
								multiple agents working in parallel—for instance, one agent for
								code writing, another for testing, and a third for
								optimization—allowing the system to handle more complex problems
								without hitting single-model token limits.
							</p>
							<p>
								This parallelism requires greater token generation to maintain
								synchronization and shared knowledge, increasing demands to
								prevent inconsistencies. While it overcomes some context
								limitations by modularizing tasks, it can complicate management,
								as agents must coordinate to avoid lost details or conflicting
								outputs.
							</p>
						</CardContent>
					</Card>

					{/* Compute Requirements */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Users className="h-5 w-5" />
								Compute Intensification
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Regarding compute, agentic coding intensifies requirements due
								to parallel processing and real-time coordination, potentially
								straining local machines with high resource usage or escalating
								API costs for cloud-based agents.
							</p>
							<p>
								It demands efficient compute distribution to "survive" the
								expanded scope, such as through optimized orchestration, but can
								lead to bottlenecks if not managed well.
							</p>
							<p className="text-sm mt-4">
								In the broader "context and compute game," agentic approaches
								push toward infinite-like capabilities but highlight trade-offs:
								more agents mean richer context but higher compute costs and
								potential for errors if not orchestrated well.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
