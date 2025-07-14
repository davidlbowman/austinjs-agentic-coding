export function AgenticCodingSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Agentic Coding: Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-4">
					<p className="drop-cap">
						Agentic coding refers to systems where autonomous AI agents handle
						tasks independently or collaboratively, often powered by large
						language models (LLMs) that execute code-based reasoning. These
						agents go beyond simple code generation; they simulate end-to-end
						engineering workflows, such as planning, coding, testing, and
						iterating. Tools like Devin exemplify this by acting as virtual
						software engineers capable of managing full projects through
						modular, goal-oriented behaviors. The global agentic AI market is
						rapidly growing,{" "}
						<span className="highlight">
							expected to increase from $28 billion in 2024 to $127 billion by
							2029
						</span>
						, with 25% of enterprises deploying AI agents by 2025.
					</p>

					<p>
						<span className="highlight">
							Agentic coding expands context by distributing it across multiple
							agents working in parallel
						</span>
						—for instance, one agent for code writing, another for testing, and
						a third for optimization—allowing the system to handle more complex
						problems without hitting single-model token limits. This parallelism
						requires greater token generation to maintain synchronization and
						shared knowledge, increasing demands to prevent inconsistencies.
						While it overcomes some context limitations by modularizing tasks,
						it can complicate management, as agents must coordinate to avoid
						lost details or conflicting outputs.
					</p>

					<p>
						Regarding compute, agentic coding intensifies requirements due to
						parallel processing and real-time coordination, potentially
						straining local machines with high resource usage or escalating API
						costs for cloud-based agents. It demands efficient compute
						distribution to "survive" the expanded scope, such as through
						optimized orchestration, but can lead to bottlenecks if not managed
						well. In the broader "context and compute game," agentic approaches
						push toward infinite-like capabilities but highlight trade-offs:
						<span className="highlight">
							more agents mean richer context but higher compute costs and
							potential for errors
						</span>{" "}
						if not orchestrated well.
					</p>
				</div>
			</div>
		</section>
	);
}
