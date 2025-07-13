import {
	AlertTriangle,
	Briefcase,
	Lock,
	Puzzle,
	Shield,
	Sparkles,
	Users,
	Zap,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const benefitsData = [
	{
		icon: Zap,
		title: "Increased Productivity",
		description:
			"Automates repetitive tasks such as code generation and testing, with some organizations reporting up to 45% reduction in initial code development time, though results vary by project complexity.",
	},
	{
		icon: Shield,
		title: "Improved Code Quality",
		description:
			"Detects bugs, vulnerabilities, and inefficiencies early through real-time analysis.",
	},
	{
		icon: Users,
		title: "Better Collaboration",
		description:
			"Offers data-driven insights and optimizations, aiding team decision-making and knowledge sharing.",
	},
	{
		icon: Sparkles,
		title: "Personalized Assistance",
		description:
			"Adapts to individual coding styles, accelerating learning and exploration of new technologies.",
	},
];

const limitationsData = [
	{
		icon: AlertTriangle,
		title: "Skill Erosion",
		description:
			"Overreliance can weaken critical thinking, debugging, and foundational skills if outputs aren't verified, especially when context is mishandled. Developers report declining core programming skills, reduced documentation reading, and weaker debugging abilities, leading some to adopt 'No-AI Days' to maintain fundamentals.",
	},
	{
		icon: Lock,
		title: "Bias and Security Issues",
		description:
			"May propagate biases from training data or introduce vulnerabilities in generated code due to incomplete context.",
	},
	{
		icon: Puzzle,
		title: "Integration Challenges",
		description:
			"Adds complexity with steep learning curves and potential for new bugs in workflows, exacerbated by compute constraints.",
	},
	{
		icon: Briefcase,
		title: "Job Role Shifts",
		description:
			"Could automate routine coding, pushing engineers toward oversight and strategic roles by 2040, with 81% of respondents expecting at least a quarter of development work to shift to AI within five years.",
	},
];

export function ProsConsSection() {
	return (
		<section className="bg-muted/20">
			<div className="container mx-auto">
				<h2 className="text-center mb-12">
					Benefits & Limitations of AI in Software Engineering
				</h2>

				<div className="grid lg:grid-cols-2 gap-8">
					{/* Benefits Card */}
					<Card className="h-full">
						<CardHeader>
							<CardTitle className="text-2xl">Benefits</CardTitle>
							<CardDescription>
								AI enhances efficiency and innovation, acting as a powerful
								collaborator despite its limitations.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							{benefitsData.map((benefit) => (
								<div key={benefit.title} className="flex gap-4">
									<benefit.icon className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
									<div className="space-y-1">
										<h4 className="font-semibold">{benefit.title}</h4>
										<p className="text-sm text-muted-foreground">
											{benefit.description}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>

					{/* Limitations Card */}
					<Card className="h-full">
						<CardHeader>
							<CardTitle className="text-2xl">Limitations</CardTitle>
							<CardDescription>
								While beneficial, AI introduces risks tied to its inherent
								limitations in context and compute, which engineers must
								mitigate.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							{limitationsData.map((limitation) => (
								<div key={limitation.title} className="flex gap-4">
									<limitation.icon className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
									<div className="space-y-1">
										<h4 className="font-semibold">{limitation.title}</h4>
										<p className="text-sm text-muted-foreground">
											{limitation.description}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
