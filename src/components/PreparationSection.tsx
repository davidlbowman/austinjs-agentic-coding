import { BookOpen, Brain, Code, Users } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
	"Use AI sparingly after building a strong base",
];

const futureRoles = [
	"Prompt engineering",
	"Evaluating AI outputs critically",
	"Orchestrating multi-agent systems",
	"Integrating human intuition with machine efficiency",
];

export function PreparationSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Preparing for Expanded Context and Compute
				</h2>

				<div className="max-w-4xl mx-auto space-y-8">
					{/* Introduction */}
					<Card>
						<CardContent className="pt-6">
							<p className="text-lg">
								As context windows expand and compute power grows, AI will scale
								even more dramatically, but it will continue to act as a{" "}
								<span className="text-accent-purple">
									multiplier of your inherent skills
								</span>{" "}
								rather than a substitute.
							</p>
							<p className="mt-4">
								To thrive in this evolving landscape, focus on building
								timeless, foundational abilities that AI can amplify.
							</p>
						</CardContent>
					</Card>

					{/* Foundational Skills */}
					<Card>
						<CardHeader>
							<CardTitle>Key Foundational Skills</CardTitle>
							<CardDescription>
								The bedrock that allows AI to enhance your work effectively
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{foundationalSkills.map((skill) => (
									<div key={skill.title} className="flex gap-4">
										<skill.icon className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-semibold">{skill.title}</h4>
											<p className="text-sm">{skill.description}</p>
										</div>
									</div>
								))}
							</div>
							<p className="text-sm mt-6">
								These form the bedrock that allows AI to enhance your work
								effectively—without them, AI might simply scale mediocrity.
							</p>
						</CardContent>
					</Card>

					{/* Learning Approach */}
					<Card>
						<CardHeader>
							<CardTitle>Learning These Skills</CardTitle>
							<CardDescription>
								Hands-on practice, not passive AI assistance
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{learningApproach.map((approach) => (
									<li key={approach} className="text-sm flex items-start gap-2">
										<span className="text-green-600 dark:text-green-400 mt-0.5">
											•
										</span>
										<span className="text-muted-foreground">{approach}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					{/* Future Roles */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Users className="h-5 w-5" />
								Transitioning to "AI Managers"
							</CardTitle>
							<CardDescription>Emphasize strategic oversight</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{futureRoles.map((role) => (
									<div
										key={role}
										className="text-sm p-3 bg-muted/50 rounded-md"
									>
										{role}
									</div>
								))}
							</div>
							<p className="text-sm mt-6">
								By honing these human-centric skills, you'll position yourself
								to lead in a future where AI handles the routine, and engineers
								drive innovation at a higher level.
							</p>
						</CardContent>
					</Card>

					{/* Key Takeaway */}
					<Card>
						<CardContent className="pt-6">
							<p className="text-lg font-medium text-center">
								Always remember: AI scales what you input, so invest in
								elevating your expertise to maximize its potential.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
