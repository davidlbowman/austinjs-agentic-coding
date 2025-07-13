export function MCPSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">MCP: Context and Compute</h2>

				<div className="max-w-4xl mx-auto space-y-4">
					<p>
						The Model Context Protocol (MCP) is an open standard designed to
						connect AI models securely to external tools, data sources, and
						APIs. It functions as a universal interface, enabling standardized,
						bidirectional interactions—like fetching data from databases or
						executing functions—without proprietary lock-in. MCP streamlines how
						AI accesses and processes information beyond its internal knowledge,
						making it a critical advancement for scalable AI applications in
						engineering. Major tools like GitHub Copilot and platforms such as
						Windows 11 and Google DeepMind's Gemini models now support MCP.
					</p>

					<p>
						MCP effectively helps manage and expand context by providing better
						lookup tools and integrations, allowing AI to "contract" or compact
						context needs through efficient external queries. Instead of
						overloading a model's internal context window with all data upfront,
						MCP enables real-time retrieval from sources like files, APIs, or
						databases, reducing token usage and making context more dynamic.
						This contraction of effective context requirements improves
						accuracy, minimizes hallucinations, and scales to larger projects.
						For example, an AI tool using MCP can pull specific code snippets or
						project metadata on demand, enriching responses without exhausting
						resources.
					</p>

					<p>
						On the compute side, MCP optimizes processing by offloading tasks to
						external systems, distributing workload to reduce local machine
						strain and API latency. It enables more efficient compute
						allocation, such as caching frequent queries or parallelizing data
						fetches, which lowers overall costs and speeds up workflows.
						However, it introduces setup complexity and potential security
						considerations, as improper configuration could expose sensitive
						data or increase compute overhead from mismanaged integrations.
					</p>
				</div>
			</div>
		</section>
	);
}
