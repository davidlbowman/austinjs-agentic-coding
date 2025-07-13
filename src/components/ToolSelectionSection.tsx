import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const selectionCriteria = [
	{
		title: "Context Handling",
		description:
			"Favor tools with large windows, efficient token management, and features to expand or compact context (e.g., via lookups). Test how they maintain relevance in large projects without overwhelming compute.",
	},
	{
		title: "Compute Efficiency",
		description:
			"Select options that optimize processing to handle parallelism or complex queries without excessive costs or delays, balancing local and API-based resources.",
	},
	{
		title: "MCP Integration",
		description:
			"Choose MCP-compatible tools for seamless external data access, which contracts context needs and boosts scalability.",
	},
	{
		title: "Agentic Capabilities",
		description:
			"Opt for those supporting multi-agent parallelism to expand context, but ensure they manage token generation effectively to avoid compute bottlenecks.",
	},
	{
		title: "Privacy and Security",
		description:
			"Prioritize on-device or secure processing to protect sensitive context data.",
	},
	{
		title: "Integration and Usability",
		description:
			"Ensure easy workflow fit, with low overhead for context setup.",
	},
	{
		title: "Cost vs. Gains",
		description:
			"Balance subscriptions against productivity boosts (e.g., 25% efficiency), focusing on context/compute ROI.",
	},
	{
		title: "Ethical Fit",
		description:
			"Pick tools that allow verification to counter skill erosion, with transparency on bias in context handling.",
	},
];

export function ToolSelectionSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Choosing AI Tools: Criteria for Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					<Card>
						<CardContent className="pt-6">
							<p className="text-lg">
								Given that AI's primary limitations are{" "}
								<span className="text-accent-purple">context</span> (window size
								and usage efficiency) and{" "}
								<span className="text-accent-purple">compute</span>, tool
								selection should prioritize how well they address these.
							</p>
							<p className="mt-4">
								Your audience, already AI users, can evaluate based on advanced
								needs like agentic support and MCP compatibility. Here's how to
								choose:
							</p>
						</CardContent>
					</Card>

					<div className="grid gap-4">
						{selectionCriteria.map((criterion) => (
							<Card key={criterion.title}>
								<CardHeader className="pb-3">
									<CardTitle className="text-lg flex items-center gap-2">
										<Check className="h-4 w-4 text-green-600 dark:text-green-400" />
										{criterion.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm">{criterion.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
