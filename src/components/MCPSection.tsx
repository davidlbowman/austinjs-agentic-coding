import { Database, Globe, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function MCPSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">MCP: Context and Compute</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					{/* Introduction */}
					<Card>
						<CardHeader>
							<CardTitle>Model Context Protocol</CardTitle>
							<CardDescription>
								An open standard for connecting AI models to external resources
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								The Model Context Protocol (MCP) is an open standard designed to
								connect AI models securely to external tools, data sources, and
								APIs. It functions as a universal interface, enabling
								standardized, bidirectional interactions—like fetching data from
								databases or executing functions—without proprietary lock-in.
							</p>
							<p className="text-muted-foreground">
								MCP streamlines how AI accesses and processes information beyond
								its internal knowledge, making it a critical advancement for
								scalable AI applications in engineering.
							</p>
							<div className="flex flex-wrap gap-2 mt-4">
								<Badge variant="secondary">GitHub Copilot</Badge>
								<Badge variant="secondary">Windows 11</Badge>
								<Badge variant="secondary">Google DeepMind Gemini</Badge>
							</div>
						</CardContent>
					</Card>

					{/* Context Benefits */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Database className="h-5 w-5" />
								MCP and Context Management
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								MCP effectively helps manage and expand context by providing
								better lookup tools and integrations, allowing AI to "contract"
								or compact context needs through efficient external queries.
							</p>
							<p className="text-muted-foreground">
								Instead of overloading a model's internal context window with
								all data upfront, MCP enables real-time retrieval from sources
								like files, APIs, or databases, reducing token usage and making
								context more dynamic.
							</p>
							<p className="text-sm text-muted-foreground">
								For example, an AI tool using MCP can pull specific code
								snippets or project metadata on demand, enriching responses
								without exhausting resources.
							</p>
						</CardContent>
					</Card>

					{/* Compute Benefits */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Globe className="h-5 w-5" />
								MCP and Compute Optimization
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								On the compute side, MCP optimizes processing by offloading
								tasks to external systems, distributing workload to reduce local
								machine strain and API latency.
							</p>
							<p className="text-muted-foreground">
								It enables more efficient compute allocation, such as caching
								frequent queries or parallelizing data fetches, which lowers
								overall costs and speeds up workflows.
							</p>
						</CardContent>
					</Card>

					{/* Considerations */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Shield className="h-5 w-5" />
								Important Considerations
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								However, it introduces setup complexity and potential security
								considerations, as improper configuration could expose sensitive
								data or increase compute overhead from mismanaged integrations.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
