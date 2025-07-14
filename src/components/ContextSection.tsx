import {
	AlertCircle,
	AlertTriangle,
	Brain,
	Code,
	FileCode,
} from "lucide-react";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const contextStages = [
	{
		size: 1000,
		label: "Single File",
		description: "Perfect understanding",
		aiQuality: 100,
		example:
			"AI can refactor functions, fix bugs, and suggest optimizations perfectly",
		icon: FileCode,
		color: "text-purple-400 dark:text-purple-300",
		bgColor: "bg-purple-50 dark:bg-purple-900/10",
	},
	{
		size: 50000,
		label: "Small Module",
		description: "Strong comprehension",
		aiQuality: 85,
		example:
			"AI understands module relationships and can make cross-file changes",
		icon: Code,
		color: "text-purple-500 dark:text-purple-400",
		bgColor: "bg-purple-100 dark:bg-purple-900/20",
	},
	{
		size: 200000,
		label: "Medium Project",
		description: "Partial context loss",
		aiQuality: 60,
		example: "AI starts missing dependencies, suggests incomplete solutions",
		icon: Brain,
		color: "text-purple-500/80 dark:text-purple-400/80",
		bgColor: "bg-purple-100/70 dark:bg-purple-900/25",
	},
	{
		size: 500000,
		label: "Large Codebase",
		description: "Significant degradation",
		aiQuality: 35,
		example: "AI frequently hallucinates imports, misses critical context",
		icon: AlertCircle,
		color: "text-purple-600 dark:text-purple-500",
		bgColor: "bg-purple-200 dark:bg-purple-900/30",
	},
	{
		size: 1000000,
		label: "Enterprise System",
		description: "Context overwhelmed",
		aiQuality: 15,
		example: "AI provides generic suggestions, can't grasp system architecture",
		icon: AlertTriangle,
		color: "text-purple-700 dark:text-purple-600",
		bgColor: "bg-purple-300 dark:bg-purple-900/40",
	},
];

export function ContextSection() {
	const [contextSize, setContextSize] = useState(50000);

	// Find the current stage based on context size
	const currentStage = contextStages.reduce((acc, stage) => {
		if (contextSize >= stage.size) return stage;
		return acc;
	}, contextStages[0]);

	// Calculate AI effectiveness based on context size
	const calculateEffectiveness = (size: number) => {
		// Exponential decay function adjusted for new ranges
		const decay = Math.exp(-size / 150000);
		return Math.max(5, Math.min(100, decay * 100));
	};

	const effectiveness = calculateEffectiveness(contextSize);
	const Icon = currentStage.icon;

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">Context in AI Coding Tools</h2>

				<div className="max-w-5xl mx-auto space-y-8">
					{/* Interactive Context Simulator */}
					<Card>
						<CardHeader>
							<CardTitle>Context Size vs AI Effectiveness</CardTitle>
							<CardDescription>
								See how AI performance degrades as your codebase grows
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-8">
							{/* Slider */}
							<div className="space-y-4">
								<div className="flex justify-between text-sm">
									<span>Codebase Size</span>
									<span className="font-mono">
										{contextSize.toLocaleString()} tokens
									</span>
								</div>
								<Slider
									defaultValue={[50000]}
									max={1000000}
									min={1000}
									step={1000}
									onValueChange={(value) => setContextSize(value[0])}
									className="w-full"
								/>
								<div className="flex justify-between text-xs text-muted-foreground">
									<span>1K (Single file)</span>
									<span>1M (Enterprise)</span>
								</div>
							</div>

							{/* Current Stage Display */}
							<div className={`p-6 rounded-lg ${currentStage.bgColor}`}>
								<div className="flex items-start gap-4">
									<Icon
										className={`h-8 w-8 ${currentStage.color} flex-shrink-0`}
									/>
									<div className="space-y-2 flex-1">
										<div className="flex items-center justify-between">
											<h3
												className={`text-lg font-semibold ${currentStage.color}`}
											>
												{currentStage.label}
											</h3>
											<div className="text-right">
												<div className="text-2xl font-bold">
													{Math.round(effectiveness)}%
												</div>
												<div className="text-xs text-muted-foreground">
													AI Effectiveness
												</div>
											</div>
										</div>
										<p className="text-sm font-medium">
											{currentStage.description}
										</p>
										<p className="text-sm text-muted-foreground">
											{currentStage.example}
										</p>
									</div>
								</div>

								{/* Effectiveness Bar */}
								<div className="mt-4">
									<div className="h-3 bg-muted rounded-full overflow-hidden">
										<div
											className={`h-full transition-all duration-300 ${
												effectiveness > 70
													? "bg-purple-400 dark:bg-purple-300"
													: effectiveness > 40
														? "bg-purple-500 dark:bg-purple-400"
														: "bg-purple-700 dark:bg-purple-600"
											}`}
											style={{
												width: `${effectiveness}%`,
											}}
										/>
									</div>
								</div>
							</div>

							{/* Context Stages Grid */}
							<div className="grid grid-cols-6 sm:grid-cols-5 gap-2 pt-4 auto-rows-fr">
								{contextStages.map((stage, index) => (
									<div
										key={stage.label}
										className={`text-center p-2 rounded-lg transition-all h-full min-h-[60px] flex flex-col justify-center ${
											contextSize >= stage.size
												? stage.bgColor
												: "bg-muted/50 opacity-50"
										} ${
											// On mobile: first 3 items span 2 cols each, last 2 items span 3 cols each
											index < 3
												? "col-span-2 sm:col-span-1"
												: "col-span-3 sm:col-span-1"
										}`}
									>
										<div className="text-xs font-medium">{stage.label}</div>
										<div className="text-xs text-muted-foreground mt-1">
											{stage.aiQuality}%
										</div>
									</div>
								))}
							</div>

							{/* Key Insight within same card */}
							<div className="pt-6 border-t space-y-4">
								<p>
									Context is the cornerstone of AI effectiveness—it's the
									information that models use to generate relevant responses. As
									codebases grow, AI's ability to maintain understanding
									degrades exponentially.
								</p>
								<p>
									This is why AI development is a{" "}
									<span className="text-accent-purple">
										"context and compute game"
									</span>
									. With finite context windows, even the most advanced models
									struggle with large codebases. They miss dependencies,
									hallucinate imports, and provide increasingly generic
									suggestions.
								</p>
								<p className="font-semibold">
									If we had infinite context, AI could maintain perfect
									understanding of any codebase size, enabling flawless
									end-to-end system design and implementation.
								</p>
								<p>
									In reality, we choose tools based on how well they expand or
									optimize context usage through efficient token management,
									external integrations, and smart caching strategies.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
