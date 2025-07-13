import { CheckCircle, Infinity as InfinityIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ConclusionSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">Conclusion</h2>

				<div className="max-w-3xl mx-auto">
					<Card>
						<CardContent className="pt-8 pb-8 space-y-6">
							<p className="text-lg text-center">
								AI in software engineering is defined by the interplay of{" "}
								<span className="text-accent-purple">context and compute</span>
								—mastering these limitations unlocks greater potential, while
								ignoring them amplifies cons like skill erosion.
							</p>

							<div className="space-y-4 max-w-2xl mx-auto">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
									<p>By prioritizing context-first approaches</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
									<p>Leveraging MCP for efficient management</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
									<p>Embracing agentic coding for expansion</p>
								</div>
							</div>

							<p className="text-center">We can build innovative workflows.</p>

							<div className="flex items-center justify-center gap-2 pt-4">
								<InfinityIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
								<p className="text-lg font-medium">
									Choose tools that align with these realities, always verify
									outputs, and adapt to push toward that "infinite" horizon.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
