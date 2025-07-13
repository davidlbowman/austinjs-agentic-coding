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
		color: "text-red-600 dark:text-red-400",
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
		color: "text-orange-600 dark:text-orange-400",
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
		color: "text-yellow-600 dark:text-yellow-400",
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
		color: "text-green-600 dark:text-green-400",
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
		color: "text-blue-600 dark:text-blue-400",
	},
];

export function AIScalarSection() {
	const [skillValue, setSkillValue] = useState([50]);

	const currentSkill = skillLevels.reduce((acc, skill) => {
		if (skillValue[0] >= skill.level) return skill;
		return acc;
	}, skillLevels[0]);

	const nextSkill = skillLevels.find((skill) => skill.level > skillValue[0]);
	const progress = nextSkill
		? ((skillValue[0] - currentSkill.level) /
				(nextSkill.level - currentSkill.level)) *
			100
		: 100;

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">AI as a Scalar to Productivity</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>Skill Level Impact on AI Effectiveness</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Your Skill Level</span>
									<span className="font-mono">{skillValue[0]}%</span>
								</div>
								<Slider
									value={skillValue}
									onValueChange={setSkillValue}
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
									<p className="text-sm text-muted-foreground">
										{currentSkill.description}
									</p>
									<div className="flex items-center gap-2">
										<span className="text-2xl font-bold">
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
														currentSkill.multiplier >= 2
															? "text-green-600 dark:text-green-400"
															: "text-red-600 dark:text-red-400"
													}`}
												>
													{currentSkill.multiplier >= 2 ? (
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

							{nextSkill && (
								<div className="pt-4 border-t">
									<div className="flex justify-between items-center mb-2">
										<span className="text-sm font-medium">
											Progress to {nextSkill.title}
										</span>
										<span className="text-sm text-muted-foreground">
											{Math.round(progress)}%
										</span>
									</div>
									<div className="h-2 bg-muted rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
											style={{ width: `${progress}%` }}
										/>
									</div>
								</div>
							)}
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<p className="text-lg">
								AI acts as a{" "}
								<span className="text-accent-purple">scalar multiplier</span> to
								your existing productivity and skills, amplifying what you
								already bring to the table rather than creating expertise from
								scratch.
							</p>
							<p className="mt-4 text-muted-foreground">
								If you're an unskilled engineer, AI can scale up inefficient or
								error-prone work, potentially leading to amplified mistakes,
								poor code quality, and compounded issues in projects. For
								instance, relying on AI without a strong foundation might result
								in accepting suboptimal suggestions that introduce subtle bugs
								or inefficient designs, making problems worse at scale.
							</p>
							<p className="mt-4 text-muted-foreground">
								Conversely, if you're highly skilled—with deep knowledge in
								algorithms, system design, and best practices—AI can greatly
								enhance your output, enabling faster iteration, more innovative
								solutions, and higher-quality results. It turns good engineers
								into exceptional ones by handling rote tasks, allowing focus on
								high-level strategy and creativity.
							</p>
							<p className="mt-4 text-sm text-muted-foreground">
								The key takeaway is that AI doesn't replace skill; it scales it.
								To maximize benefits, invest in building a robust skill base
								first, then use AI to extend your capabilities. This scalar
								effect underscores the importance of continuous learning and
								verification, ensuring AI serves as a force multiplier rather
								than a crutch.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
