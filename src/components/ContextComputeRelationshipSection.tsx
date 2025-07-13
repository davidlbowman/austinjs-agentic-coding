import { ArrowLeftRight, Battery, Brain } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function ContextComputeRelationshipSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Relationship Between Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<ArrowLeftRight className="h-5 w-5" />
								Interdependent Forces
							</CardTitle>
							<CardDescription>
								Context provides the raw material, compute supplies the energy
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								From first principles, context and compute are interdependent
								forces in AI systems: context provides the raw material (data
								and knowledge) for intelligent outputs, while compute supplies
								the energy to process and reason over that material.
							</p>
							<p>
								They form a fundamental trade-off—more context demands more
								compute to analyze it effectively, and limited compute forces
								compromises in how much context can be handled without
								degradation.
							</p>
						</CardContent>
					</Card>

					<div className="grid md:grid-cols-2 gap-6">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Brain className="h-4 w-4" />
									Infinite Compute Scenario
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm">
									If we had infinite compute (assuming no hardware limitations),
									we theoretically wouldn't need fixed context windows at all;
									models could dynamically process and retain unlimited
									information in real-time, querying and synthesizing data on
									the fly without memory constraints.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Battery className="h-4 w-4" />
									Infinite Context Scenario
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm">
									Conversely, infinite context without sufficient compute would
									lead to paralysis, as the system couldn't efficiently traverse
									or utilize the vast data.
								</p>
							</CardContent>
						</Card>
					</div>

					<Card>
						<CardContent className="pt-6">
							<p>
								In practice, current AI toolsets represent a compromise between
								these two: they balance finite context windows with optimized
								compute strategies (like caching or selective processing) to
								approximate ideal performance, but this often results in
								workarounds such as external lookups or modular agents to
								stretch capabilities without overwhelming resources.
							</p>
							<p className="mt-4">
								Understanding this interplay helps engineers select tools that
								minimize these compromises for their specific workflows.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
