import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
	return (
		<section>
			<div className="container mx-auto text-center space-y-8">
				<Badge variant="secondary" className="mb-4">
					Mid-2025 Professional Guide
				</Badge>

				<h1>AI in Software Engineering</h1>

				<h2 className="text-muted-foreground">
					Current State, Pros, Cons, and Tool Selection Guide
				</h2>

				<p className="text-lg leading-relaxed max-w-3xl mx-auto">
					This document provides an overview of AI's role in software
					engineering as of mid-2025, tailored for professional engineers
					already using AI in their workflows. It focuses on practical insights,
					including pros and cons, and emphasizes the core limitations of
					AI—particularly
					<strong> context</strong> and <strong> compute</strong>—as the key
					factors in tool selection.
				</p>

				<div className="max-w-2xl mx-auto p-6 rounded-lg bg-muted/30 border">
					<p className="text-base">
						The main theme is that AI development is fundamentally a{" "}
						<span className="text-accent-purple">
							game of context and compute
						</span>
						: with infinite context and compute, we could achieve nearly
						anything in software engineering. Tools are chosen based on how well
						they address these limitations.
					</p>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
				<ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
			</div>
		</section>
	);
}
