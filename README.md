<!-- markdownlint-disable-file MD013 -->
# AI in Software Engineering: Current State, Pros, Cons, and Tool Selection Guide

This document provides an overview of AI's role in software engineering as of mid-2025, tailored for professional engineers already using AI in their workflows. It focuses on practical insights, including pros and cons, and emphasizes the core limitations of AI—particularly context and compute—as the key factors in tool selection. The main theme is that AI development is fundamentally a game of context and compute: with infinite context and compute, we could achieve nearly anything in software engineering. Tools are chosen based on how well they address these limitations, such as context window size and efficient context utilization.

## Current State of AI in Software Engineering

In 2025, AI is deeply integrated into software engineering, with over 90% of engineering teams using AI coding tools, and 78% of organizations either actively using AI or planning to implement it within two years. It has evolved from basic assistance to handling complex tasks like code generation and optimization, boosting productivity in many teams. However, recent studies reveal a nuanced picture: while some report up to 25-30% productivity gains, others find AI can increase completion times by 19% in complex projects. Core limitations like finite context windows and computational constraints mean we're far from "infinite" capabilities, requiring smart tool choices to maximize effectiveness. Challenges such as tool reliability, ethical concerns, and skill erosion persist, demanding careful oversight.

## Benefits of AI in Software Engineering

AI enhances efficiency and innovation, acting as a powerful collaborator despite its limitations.

- **Increased Productivity**: Automates repetitive tasks such as code generation and testing, with some organizations reporting up to 45% reduction in initial code development time, though results vary by project complexity.
- **Improved Code Quality**: Detects bugs, vulnerabilities, and inefficiencies early through real-time analysis.
- **Better Collaboration**: Offers data-driven insights and optimizations, aiding team decision-making and knowledge sharing.
- **Personalized Assistance**: Adapts to individual coding styles, accelerating learning and exploration of new technologies.

## Costs of AI in Software Engineering

While beneficial, AI introduces risks tied to its inherent limitations in context and compute, which engineers must mitigate.

- **Skill Erosion**: Overreliance can weaken critical thinking, debugging, and foundational skills if outputs aren't verified, especially when context is mishandled. Developers report declining core programming skills, reduced documentation reading, and weaker debugging abilities, leading some to adopt "No-AI Days" to maintain fundamentals.
- **Bias and Security Issues**: May propagate biases from training data or introduce vulnerabilities in generated code due to incomplete context.
- **Integration Challenges**: Adds complexity with steep learning curves and potential for new bugs in workflows, exacerbated by compute constraints.
- **Job Role Shifts**: Could automate routine coding, pushing engineers toward oversight and strategic roles by 2040, with 81% of respondents expecting at least a quarter of development work to shift to AI within five years.

## AI as a Scalar to Productivity

AI acts as a scalar multiplier to your existing productivity and skills, amplifying what you already bring to the table rather than creating expertise from scratch. If you're an unskilled engineer, AI can scale up inefficient or error-prone work, potentially leading to amplified mistakes, poor code quality, and compounded issues in projects. For instance, relying on AI without a strong foundation might result in accepting suboptimal suggestions that introduce subtle bugs or inefficient designs, making problems worse at scale. Conversely, if you're highly skilled—with deep knowledge in algorithms, system design, and best practices—AI can greatly enhance your output, enabling faster iteration, more innovative solutions, and higher-quality results. It turns good engineers into exceptional ones by handling rote tasks, allowing focus on high-level strategy and creativity. The key takeaway is that AI doesn't replace skill; it scales it. To maximize benefits, invest in building a robust skill base first, then use AI to extend your capabilities. This scalar effect underscores the importance of continuous learning and verification, ensuring AI serves as a force multiplier rather than a crutch.

## Context in AI Coding Tools

Context is the cornerstone of AI effectiveness in software engineering—it's the information (e.g., code history, project details, external data) that models use to generate relevant responses. Larger context windows have grown dramatically, with models like Gemini 1.5 Pro supporting 2 million tokens and Meta's Llama 4 reaching 10 million tokens, enabling more accurate and project-aware suggestions. However, limitations in context size and management often result in irrelevant outputs, hallucinations, or errors. This is why AI development is a "context and compute game": finite context restricts the model's "memory," while limited compute power caps processing speed and complexity. If we had infinite context (unlimited data retention) and compute (endless processing power), AI could handle any engineering task flawlessly, from end-to-end system design to adaptive optimization. In reality, we choose tools based on how well they expand or optimize context usage, such as through efficient token management or external integrations.

## Compute in AI Coding Tools

Compute refers to the processing power required to run AI models, encompassing both local machine resources (e.g., your device's CPU/GPU for on-device inference) and remote APIs (e.g., cloud-based services for heavy lifting). It determines how quickly and complexly AI can process inputs, generate outputs, and handle tasks like reasoning or optimization. Limitations in compute create bottlenecks: on local machines, insufficient hardware leads to slow response times or inability to run large models, while API calls introduce latency, costs, and dependency on external servers. For instance, high-compute tasks like training custom models or running parallel simulations can exhaust resources, causing timeouts or incomplete results. In the "context and compute game," finite compute restricts scalability—if we had infinite compute, AI could process vast contexts instantaneously, enabling real-time, hyper-complex engineering solutions. Tools that optimize compute (e.g., via efficient algorithms or edge computing) are essential to mitigate these constraints.

## Relationship Between Context and Compute

From first principles, context and compute are interdependent forces in AI systems: context provides the raw material (data and knowledge) for intelligent outputs, while compute supplies the energy to process and reason over that material. They form a fundamental trade-off—more context demands more compute to analyze it effectively, and limited compute forces compromises in how much context can be handled without degradation. For example, if we had infinite compute (assuming no hardware limitations), we theoretically wouldn't need fixed context windows at all; models could dynamically process and retain unlimited information in real-time, querying and synthesizing data on the fly without memory constraints. Conversely, infinite context without sufficient compute would lead to paralysis, as the system couldn't efficiently traverse or utilize the vast data. In practice, current AI toolsets represent a compromise between these two: they balance finite context windows with optimized compute strategies (like caching or selective processing) to approximate ideal performance, but this often results in workarounds such as external lookups or modular agents to stretch capabilities without overwhelming resources. Understanding this interplay helps engineers select tools that minimize these compromises for their specific workflows.

## MCP: Context and Compute

The Model Context Protocol (MCP) is an open standard designed to connect AI models securely to external tools, data sources, and APIs. It functions as a universal interface, enabling standardized, bidirectional interactions—like fetching data from databases or executing functions—without proprietary lock-in. MCP streamlines how AI accesses and processes information beyond its internal knowledge, making it a critical advancement for scalable AI applications in engineering. Major tools like GitHub Copilot and platforms such as Windows 11 and Google DeepMind's Gemini models now support MCP.

MCP effectively helps manage and expand context by providing better lookup tools and integrations, allowing AI to "contract" or compact context needs through efficient external queries. Instead of overloading a model's internal context window with all data upfront, MCP enables real-time retrieval from sources like files, APIs, or databases, reducing token usage and making context more dynamic. This contraction of effective context requirements improves accuracy, minimizes hallucinations, and scales to larger projects. For example, an AI tool using MCP can pull specific code snippets or project metadata on demand, enriching responses without exhausting resources.

On the compute side, MCP optimizes processing by offloading tasks to external systems, distributing workload to reduce local machine strain and API latency. It enables more efficient compute allocation, such as caching frequent queries or parallelizing data fetches, which lowers overall costs and speeds up workflows. However, it introduces setup complexity and potential security considerations, as improper configuration could expose sensitive data or increase compute overhead from mismanaged integrations.

## Agentic Coding: Context and Compute

Agentic coding refers to systems where autonomous AI agents handle tasks independently or collaboratively, often powered by large language models (LLMs) that execute code-based reasoning. These agents go beyond simple code generation; they simulate end-to-end engineering workflows, such as planning, coding, testing, and iterating. Tools like Devin exemplify this by acting as virtual software engineers capable of managing full projects through modular, goal-oriented behaviors. The global agentic AI market is rapidly growing, expected to increase from $28 billion in 2024 to $127 billion by 2029, with 25% of enterprises deploying AI agents by 2025.

Agentic coding expands context by distributing it across multiple agents working in parallel—for instance, one agent for code writing, another for testing, and a third for optimization—allowing the system to handle more complex problems without hitting single-model token limits. This parallelism requires greater token generation to maintain synchronization and shared knowledge, increasing demands to prevent inconsistencies. While it overcomes some context limitations by modularizing tasks, it can complicate management, as agents must coordinate to avoid lost details or conflicting outputs.

Regarding compute, agentic coding intensifies requirements due to parallel processing and real-time coordination, potentially straining local machines with high resource usage or escalating API costs for cloud-based agents. It demands efficient compute distribution to "survive" the expanded scope, such as through optimized orchestration, but can lead to bottlenecks if not managed well. In the broader "context and compute game," agentic approaches push toward infinite-like capabilities but highlight trade-offs: more agents mean richer context but higher compute costs and potential for errors if not orchestrated well.

## Choosing AI Tools: Criteria for Context and Compute

Given that AI's primary limitations are context (window size and usage efficiency) and compute, tool selection should prioritize how well they address these. Your audience, already AI users, can evaluate based on advanced needs like agentic support and MCP compatibility. Here's how to choose:

- **Context Handling**: Favor tools with large windows, efficient token management, and features to expand or compact context (e.g., via lookups). Test how they maintain relevance in large projects without overwhelming compute.
- **Compute Efficiency**: Select options that optimize processing to handle parallelism or complex queries without excessive costs or delays, balancing local and API-based resources.
- **MCP Integration**: Choose MCP-compatible tools for seamless external data access, which contracts context needs and boosts scalability.
- **Agentic Capabilities**: Opt for those supporting multi-agent parallelism to expand context, but ensure they manage token generation effectively to avoid compute bottlenecks.
- **Privacy and Security**: Prioritize on-device or secure processing to protect sensitive context data.
- **Integration and Usability**: Ensure easy workflow fit, with low overhead for context setup.
- **Cost vs. Gains**: Balance subscriptions against productivity boosts (e.g., 25% efficiency), focusing on context/compute ROI.
- **Ethical Fit**: Pick tools that allow verification to counter skill erosion, with transparency on bias in context handling.

## Preparing for Expanded Context and Compute

As context windows expand and compute power grows, AI will scale even more dramatically, but it will continue to act as a multiplier of your inherent skills rather than a substitute. To thrive in this evolving landscape, focus on building timeless, foundational abilities that AI can amplify. Key skills include mathematics (for algorithmic thinking and optimization), core software engineering principles (such as those in Donald Knuth's books on algorithms and computing), and mastering technical documentation to understand systems deeply. These form the bedrock that allows AI to enhance your work effectively—without them, AI might simply scale mediocrity.

Learning these skills requires hands-on practice, not passive AI assistance: type the code yourself, debug manually, and iterate through trial and error to internalize concepts. Avoid over-relying on AI for learning; instead, use it sparingly after building a strong base through deliberate practice and self-directed study. As we transition into roles as "AI managers," emphasize strategic oversight—prompt engineering, evaluating AI outputs critically, orchestrating multi-agent systems, and integrating human intuition with machine efficiency. By honing these human-centric skills, you'll position yourself to lead in a future where AI handles the routine, and engineers drive innovation at a higher level. Always remember: AI scales what you input, so invest in elevating your expertise to maximize its potential.

## Conclusion

AI in software engineering is defined by the interplay of context and compute—mastering these limitations unlocks greater potential, while ignoring them amplifies cons like skill erosion. By prioritizing context-first approaches, leveraging MCP for efficient management, and embracing agentic coding for expansion, we can build innovative workflows. Choose tools that align with these realities, always verify outputs, and adapt to push toward that "infinite" horizon.
