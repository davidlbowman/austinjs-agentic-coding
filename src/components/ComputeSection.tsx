import {
	AlertCircle,
	Clock,
	Cloud,
	Cpu,
	DollarSign,
	Server,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const localComputeData = {
	title: "Local Machine",
	icon: Cpu,
	pros: [
		{ label: "Privacy", description: "Data stays on your device" },
		{ label: "No latency", description: "Instant processing" },
		{ label: "Offline capable", description: "Works without internet" },
	],
	cons: [
		{
			label: "Hardware limits",
			description: "Requires powerful CPU/GPU",
		},
		{
			label: "Slow on large models",
			description: "Limited by local resources",
		},
		{ label: "Setup complexity", description: "Requires configuration" },
	],
	resources: [
		{ name: "CPU Usage", value: 85, color: "bg-orange-600" },
		{ name: "GPU Usage", value: 95, color: "bg-red-600" },
		{ name: "Memory", value: 72, color: "bg-yellow-600" },
		{ name: "Storage", value: 45, color: "bg-green-600" },
	],
};

const apiComputeData = {
	title: "Cloud APIs",
	icon: Cloud,
	pros: [
		{ label: "Scalable", description: "Unlimited processing power" },
		{ label: "No setup", description: "Works out of the box" },
		{ label: "Latest models", description: "Access to cutting-edge AI" },
	],
	cons: [
		{ label: "Costs", description: "Pay per API call" },
		{ label: "Network latency", description: "Internet dependency" },
		{ label: "Privacy concerns", description: "Data leaves your control" },
	],
	resources: [
		{ name: "Response Time", value: 65, color: "bg-blue-600" },
		{ name: "Availability", value: 99, color: "bg-green-600" },
		{ name: "Cost Efficiency", value: 40, color: "bg-orange-600" },
		{ name: "Scalability", value: 95, color: "bg-purple-600" },
	],
};

export function ComputeSection() {
	const [activeTab, setActiveTab] = useState("local");
	const currentData = activeTab === "local" ? localComputeData : apiComputeData;

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-center mb-12">Compute in AI Coding Tools</h2>

				<div className="max-w-5xl mx-auto space-y-8">
					{/* Introduction Card */}
					<Card>
						<CardContent className="pt-6">
							<div className="flex items-start gap-4">
								<Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
								<div className="space-y-2">
									<p className="text-lg">
										Compute refers to the processing power required to run AI
										models, encompassing both local machine resources and remote
										APIs.
									</p>
									<p className="text-muted-foreground">
										It determines how quickly and complexly AI can process
										inputs, generate outputs, and handle tasks like reasoning or
										optimization. Limitations in compute create bottlenecks that
										affect performance and scalability.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Toggle Comparison */}
					<Tabs value={activeTab} onValueChange={setActiveTab}>
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="local">
								<Cpu className="h-4 w-4 mr-2" />
								Local Compute
							</TabsTrigger>
							<TabsTrigger value="api">
								<Cloud className="h-4 w-4 mr-2" />
								API Compute
							</TabsTrigger>
						</TabsList>

						<TabsContent value={activeTab} className="mt-6 space-y-6">
							{/* Resource Usage */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<currentData.icon className="h-5 w-5" />
										{currentData.title} Resources
									</CardTitle>
									<CardDescription>
										Real-time resource utilization metrics
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									{currentData.resources.map((resource) => (
										<div key={resource.name} className="space-y-2">
											<div className="flex justify-between text-sm">
												<span>{resource.name}</span>
												<span className="font-mono">{resource.value}%</span>
											</div>
											<div className="h-2 bg-muted rounded-full overflow-hidden">
												<div
													className={`h-full ${resource.color} transition-all duration-300`}
													style={{ width: `${resource.value}%` }}
												/>
											</div>
										</div>
									))}
								</CardContent>
							</Card>

							{/* Pros and Cons */}
							<div className="grid md:grid-cols-2 gap-4">
								<Card>
									<CardHeader>
										<CardTitle className="text-lg flex items-center gap-2">
											<Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
											Advantages
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										{currentData.pros.map((pro) => (
											<div key={pro.label}>
												<div className="font-medium text-sm">{pro.label}</div>
												<div className="text-sm text-muted-foreground">
													{pro.description}
												</div>
											</div>
										))}
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle className="text-lg flex items-center gap-2">
											<AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
											Limitations
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										{currentData.cons.map((con) => (
											<div key={con.label}>
												<div className="font-medium text-sm">{con.label}</div>
												<div className="text-sm text-muted-foreground">
													{con.description}
												</div>
											</div>
										))}
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>

					{/* Bottleneck Examples */}
					<Card>
						<CardHeader>
							<CardTitle>Common Compute Bottlenecks</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<Alert>
								<Clock className="h-4 w-4" />
								<AlertDescription>
									<strong>Local limits:</strong> Insufficient hardware leads to
									slow response times or inability to run large models
								</AlertDescription>
							</Alert>
							<Alert>
								<DollarSign className="h-4 w-4" />
								<AlertDescription>
									<strong>API constraints:</strong> Latency, costs, and
									dependency on external servers affect scalability
								</AlertDescription>
							</Alert>
							<Alert>
								<Server className="h-4 w-4" />
								<AlertDescription>
									<strong>Complex tasks:</strong> High-compute operations like
									training or parallel simulations can exhaust resources
								</AlertDescription>
							</Alert>
						</CardContent>
					</Card>

					{/* Key Insight */}
					<Card>
						<CardContent className="pt-6">
							<p className="text-lg">
								In the{" "}
								<span className="text-accent-purple">
									"context and compute game"
								</span>
								, finite compute restricts scalability—if we had infinite
								compute, AI could process vast contexts instantaneously,
								enabling real-time, hyper-complex engineering solutions.
							</p>
							<p className="text-muted-foreground mt-4">
								Tools that optimize compute (e.g., via efficient algorithms or
								edge computing) are essential to mitigate these constraints.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
