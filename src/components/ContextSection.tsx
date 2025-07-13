import { Brain, Database, Infinity as InfinityIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const modelContextData = [
	{
		name: "GPT-4 (base)",
		tokens: 8192,
		color: "bg-green-600",
		description: "Standard context window",
	},
	{
		name: "Claude 3",
		tokens: 200000,
		color: "bg-purple-600",
		description: "Extended conversations",
	},
	{
		name: "Gemini 1.5 Pro",
		tokens: 2000000,
		color: "bg-blue-600",
		description: "Massive document processing",
	},
	{
		name: "Llama 4",
		tokens: 10000000,
		color: "bg-orange-600",
		description: "Project-scale context",
	},
];

const MAX_TOKENS = 10000000;

export function ContextSection() {
	const [displayedTokens, setDisplayedTokens] = useState(0);
	const targetTokens = 2500000; // Animated counter target

	useEffect(() => {
		const duration = 2000; // 2 seconds
		const steps = 60;
		const increment = targetTokens / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= targetTokens) {
				setDisplayedTokens(targetTokens);
				clearInterval(timer);
			} else {
				setDisplayedTokens(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">Context in AI Coding Tools</h2>

				<div className="max-w-5xl mx-auto space-y-8">
					{/* Token Counter Card */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Brain className="h-5 w-5" />
								Current Context Usage
							</CardTitle>
							<CardDescription>
								Simulating a typical development session
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="text-center">
									<div className="text-4xl font-mono font-bold">
										{displayedTokens.toLocaleString()}
									</div>
									<div className="text-sm text-muted-foreground">
										tokens used
									</div>
								</div>
								<Progress
									value={(displayedTokens / MAX_TOKENS) * 100}
									className="h-3"
								/>
								<p className="text-sm text-muted-foreground text-center">
									{((displayedTokens / MAX_TOKENS) * 100).toFixed(1)}% of Llama
									4's capacity
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Model Comparison */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Database className="h-5 w-5" />
								Context Window Evolution
							</CardTitle>
							<CardDescription>
								How model context windows have grown dramatically
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{modelContextData.map((model) => (
								<div key={model.name} className="space-y-2">
									<div className="flex justify-between items-center">
										<div>
											<div className="font-medium">{model.name}</div>
											<div className="text-sm text-muted-foreground">
												{model.description}
											</div>
										</div>
										<div className="text-sm font-mono">
											{model.tokens.toLocaleString()} tokens
										</div>
									</div>
									<div className="h-2 bg-muted rounded-full overflow-hidden">
										<div
											className={`h-full ${model.color} transition-all duration-1000`}
											style={{
												width: `${(model.tokens / MAX_TOKENS) * 100}%`,
											}}
										/>
									</div>
								</div>
							))}
						</CardContent>
					</Card>

					{/* Key Insight */}
					<Card>
						<CardContent className="pt-6">
							<div className="flex items-start gap-4">
								<InfinityIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
								<div className="space-y-2">
									<p className="text-lg">
										Context is the cornerstone of AI effectiveness in software
										engineering—it's the information (e.g., code history,
										project details, external data) that models use to generate
										relevant responses.
									</p>
									<p className="text-muted-foreground mt-4">
										Larger context windows have grown dramatically, with models
										like Gemini 1.5 Pro supporting 2 million tokens and Meta's
										Llama 4 reaching 10 million tokens, enabling more accurate
										and project-aware suggestions. However, limitations in
										context size and management often result in irrelevant
										outputs, hallucinations, or errors.
									</p>
									<p className="text-muted-foreground mt-4">
										This is why AI development is a{" "}
										<span className="text-accent-purple">
											"context and compute game"
										</span>
										: finite context restricts the model's "memory," while
										limited compute power caps processing speed and complexity.
									</p>
									<p className="text-sm text-muted-foreground mt-4">
										If we had infinite context (unlimited data retention) and
										compute (endless processing power), AI could handle any
										engineering task flawlessly, from end-to-end system design
										to adaptive optimization. In reality, we choose tools based
										on how well they expand or optimize context usage, such as
										through efficient token management or external integrations.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
