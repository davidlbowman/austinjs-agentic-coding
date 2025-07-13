import { BookOpen, Brain, Check, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const foundationalSkills = [
	{
		icon: Brain,
		title: "Mathematics",
		description: "For algorithmic thinking and optimization",
	},
	{
		icon: Code,
		title: "Core Engineering Principles",
		description:
			"Such as those in Donald Knuth's books on algorithms and computing",
	},
	{
		icon: BookOpen,
		title: "Technical Documentation",
		description: "Mastering documentation to understand systems deeply",
	},
];

const learningApproach = [
	"Type the code yourself",
	"Debug manually",
	"Iterate through trial and error to internalize concepts",
	"Avoid over-relying on AI for learning",
	"Use AI sparingly after building a strong base through deliberate practice and self-directed study",
];

export function PreparationSection() {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Preparing for Expanded Context and Compute
				</h2>

				<div className="max-w-5xl mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Building Skills That AI Can Amplify</CardTitle>
						</CardHeader>
						<CardContent className="space-y-8">
							{/* Introduction paragraphs from README */}
							<div className="space-y-4">
								<p>
									As context windows expand and compute power grows, AI will
									scale even more dramatically, but it will continue to act as a
									multiplier of your inherent skills rather than a substitute.
									To thrive in this evolving landscape, focus on building
									timeless, foundational abilities that AI can amplify. Key
									skills include mathematics (for algorithmic thinking and
									optimization), core software engineering principles (such as
									those in Donald Knuth's books on algorithms and computing),
									and mastering technical documentation to understand systems
									deeply. These form the bedrock that allows AI to enhance your
									work effectively—without them, AI might simply scale
									mediocrity.
								</p>

								<p>
									Learning these skills requires hands-on practice, not passive
									AI assistance: type the code yourself, debug manually, and
									iterate through trial and error to internalize concepts. Avoid
									over-relying on AI for learning; instead, use it sparingly
									after building a strong base through deliberate practice and
									self-directed study. As we transition into roles as "AI
									managers," emphasize strategic oversight—prompt engineering,
									evaluating AI outputs critically, orchestrating multi-agent
									systems, and integrating human intuition with machine
									efficiency. By honing these human-centric skills, you'll
									position yourself to lead in a future where AI handles the
									routine, and engineers drive innovation at a higher level.
									Always remember: AI scales what you input, so invest in
									elevating your expertise to maximize its potential.
								</p>
							</div>

							{/* Foundational Skills - 3 columns */}
							<div className="pt-6 border-t">
								<h3 className="text-lg font-semibold mb-6 text-center">
									Key Foundational Skills
								</h3>
								<div className="grid md:grid-cols-3 gap-6">
									{foundationalSkills.map((skill) => (
										<div key={skill.title} className="text-center space-y-3">
											<div className="flex justify-center">
												<div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
													<skill.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
												</div>
											</div>
											<div>
												<h4 className="font-semibold">{skill.title}</h4>
												<p className="text-sm text-muted-foreground mt-1">
													{skill.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Learning Approach - Checklist */}
							<div className="pt-6 border-t">
								<h3 className="text-lg font-semibold mb-4 text-center">
									How to Learn These Skills
								</h3>
								<div className="bg-purple-100/70 dark:bg-purple-900/20 rounded-lg p-6">
									<ul className="space-y-3">
										{learningApproach.map((approach) => (
											<li key={approach} className="flex items-start gap-3">
												<Check className="h-5 w-5 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5" />
												<span className="text-sm">{approach}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
