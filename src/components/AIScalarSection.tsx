import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const skillLevels = [
	{
		level: 0,
		title: "Unskilled Engineer",
		multiplier: 0.5,
		description: "AI amplifies errors and poor practices",
		outcomes: [
			"Accepts suboptimal suggestions",
			"Introduces subtle bugs",
			"Creates inefficient designs",
			"Compounds technical debt",
		],
		color: "text-purple-400 dark:text-purple-300",
	},
	{
		level: 25,
		title: "Junior Engineer",
		multiplier: 1.2,
		description: "AI provides moderate assistance",
		outcomes: [
			"Faster simple task completion",
			"Basic code generation",
			"Some quality improvements",
			"Learning acceleration",
		],
		color: "text-purple-500 dark:text-purple-400",
	},
	{
		level: 50,
		title: "Mid-Level Engineer",
		multiplier: 2.0,
		description: "AI significantly boosts productivity",
		outcomes: [
			"Handles complex refactoring",
			"Automates repetitive tasks",
			"Improves code consistency",
			"Enables rapid prototyping",
		],
		color: "text-purple-600 dark:text-purple-500",
	},
	{
		level: 75,
		title: "Senior Engineer",
		multiplier: 3.5,
		description: "AI becomes a powerful collaborator",
		outcomes: [
			"Focuses on architecture",
			"Delegates implementation",
			"Rapid iteration cycles",
			"Enhanced creativity",
		],
		color: "text-purple-700 dark:text-purple-600",
	},
	{
		level: 100,
		title: "Expert Engineer",
		multiplier: 5.0,
		description: "AI scales expertise exponentially",
		outcomes: [
			"Orchestrates AI agents",
			"Solves complex problems",
			"Drives innovation",
			"Maximizes AI potential",
		],
		color: "text-purple-800 dark:text-purple-700",
	},
];

export function AIScalarSection() {
	const [skillValue, setSkillValue] = useState(50);

	const currentSkill = skillLevels.reduce((acc, skill) => {
		if (skillValue >= skill.level) return skill;
		return acc;
	}, skillLevels[0]);

	const baseProductivity = {
		featuresPerWeek: 1,
		linesOfCode: 500,
		bugsFixed: 3,
	};

	const scaledProductivity = {
		featuresPerWeek: Math.round(
			baseProductivity.featuresPerWeek * currentSkill.multiplier,
		),
		linesOfCode: Math.round(
			baseProductivity.linesOfCode * currentSkill.multiplier,
		),
		bugsFixed: Math.round(baseProductivity.bugsFixed * currentSkill.multiplier),
	};

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">AI as a Scalar to Productivity</h2>

				<div className="max-w-5xl mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Skill Level Impact on AI Effectiveness</CardTitle>
						</CardHeader>
						<CardContent className="space-y-8">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Your Skill Level</span>
									<span className="font-mono">{skillValue}%</span>
								</div>
								<Slider
									defaultValue={[50]}
									onValueChange={(value) => setSkillValue(value[0])}
									max={100}
									step={1}
									className="w-full"
								/>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<h3 className={`text-lg font-semibold ${currentSkill.color}`}>
										{currentSkill.title}
									</h3>
									<p className="text-sm">{currentSkill.description}</p>
									<div className="flex items-center gap-2">
										<span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
											{currentSkill.multiplier}x
										</span>
										<span className="text-sm text-muted-foreground">
											productivity multiplier
										</span>
									</div>
								</div>

								<div className="space-y-2">
									<h4 className="font-medium">Outcomes at this level:</h4>
									<ul className="space-y-1">
										{currentSkill.outcomes.map((outcome) => (
											<li
												key={outcome}
												className="text-sm flex items-start gap-2"
											>
												<span
													className={`mt-1 ${
														currentSkill.multiplier > 1
															? "text-purple-600 dark:text-purple-400"
															: "text-purple-400 dark:text-purple-300"
													}`}
												>
													{currentSkill.multiplier > 1 ? (
														<ArrowUp className="h-3 w-3" />
													) : (
														<ArrowDown className="h-3 w-3" />
													)}
												</span>
												<span className="text-muted-foreground">{outcome}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="pt-6 border-t">
								<h4 className="text-sm font-medium mb-4">
									Productivity Output (per week)
								</h4>
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
											{scaledProductivity.featuresPerWeek}
										</div>
										<div className="text-xs text-muted-foreground">
											Features
										</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-purple-500 dark:text-purple-300">
											{scaledProductivity.linesOfCode.toLocaleString()}
										</div>
										<div className="text-xs text-muted-foreground">
											Lines of Code
										</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-purple-700 dark:text-purple-500">
											{scaledProductivity.bugsFixed}
										</div>
										<div className="text-xs text-muted-foreground">
											Bugs Fixed
										</div>
									</div>
								</div>
								<div className="mt-3 text-xs text-muted-foreground text-center">
									Base productivity (1x) scaled by AI multiplier (
									{currentSkill.multiplier}x)
								</div>
							</div>

							<div className="pt-6 border-t space-y-4">
								<p>
									AI acts as a{" "}
									<span className="text-accent-purple">scalar multiplier</span>{" "}
									to your existing productivity and skills, amplifying what you
									already bring to the table rather than creating expertise from
									scratch.
								</p>
								<p>
									If you're an unskilled engineer, AI can scale up inefficient
									or error-prone work, potentially leading to amplified
									mistakes, poor code quality, and compounded issues in
									projects. For instance, relying on AI without a strong
									foundation might result in accepting suboptimal suggestions
									that introduce subtle bugs or inefficient designs, making
									problems worse at scale.
								</p>
								<p>
									Conversely, if you're highly skilled—with deep knowledge in
									algorithms, system design, and best practices—AI can greatly
									enhance your output, enabling faster iteration, more
									innovative solutions, and higher-quality results. It turns
									good engineers into exceptional ones by handling rote tasks,
									allowing focus on high-level strategy and creativity.
								</p>
								<p>
									The key takeaway is that{" "}
									<span className="highlight">
										AI doesn't replace skill; it scales it
									</span>
									. To maximize benefits, invest in building a robust skill base
									first, then use AI to extend your capabilities. This scalar
									effect underscores the importance of continuous learning and
									verification, ensuring AI serves as a force multiplier rather
									than a crutch.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
