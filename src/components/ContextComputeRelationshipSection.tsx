export function ContextComputeRelationshipSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Relationship Between Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-6">
					<p className="text-lg text-center font-medium mb-8">
						Context provides the raw material, compute supplies the energy
					</p>

					{/* Main content in readable paragraphs */}
					<div className="space-y-4">
						<p>
							From first principles, context and compute are interdependent
							forces in AI systems: context provides the raw material (data and
							knowledge) for intelligent outputs, while compute supplies the
							energy to process and reason over that material.
						</p>

						<p>
							They form a fundamental trade-off—more context demands more
							compute to analyze it effectively, and limited compute forces
							compromises in how much context can be handled without
							degradation.
						</p>

						<p>
							For example, if we had infinite compute (assuming no hardware
							limitations), we theoretically wouldn't need fixed context windows
							at all; models could dynamically process and retain unlimited
							information in real-time, querying and synthesizing data on the
							fly without memory constraints.
						</p>

						<p>
							Conversely, infinite context without sufficient compute would lead
							to paralysis, as the system couldn't efficiently traverse or
							utilize the vast data.
						</p>

						<p>
							In practice, current AI toolsets represent a compromise between
							these two: they balance finite context windows with optimized
							compute strategies (like caching or selective processing) to
							approximate ideal performance, but this often results in
							workarounds such as external lookups or modular agents to stretch
							capabilities without overwhelming resources.
						</p>

						<p>
							Understanding this interplay helps engineers select tools that
							minimize these compromises for their specific workflows.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
