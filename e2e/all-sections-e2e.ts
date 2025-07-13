import { expect, test } from "@playwright/test";

test.describe("All Sections", () => {
	test("should display all sections", async ({ page }) => {
		await page.goto("/");

		// Check Context-Compute Relationship section
		const contextComputeSection = page.locator("section").filter({
			has: page.getByText("Relationship Between Context and Compute"),
		});
		await expect(contextComputeSection).toBeVisible();

		// Check MCP section
		const mcpSection = page.locator("section").filter({
			has: page.getByText("MCP: Context and Compute"),
		});
		await expect(mcpSection).toBeVisible();

		// Check Agentic Coding section
		const agenticSection = page.locator("section").filter({
			has: page.getByText("Agentic Coding: Context and Compute"),
		});
		await expect(agenticSection).toBeVisible();

		// Check Tool Selection section
		const toolSection = page.locator("section").filter({
			has: page.getByText(
				"Choosing AI Tools: Criteria for Context and Compute",
			),
		});
		await expect(toolSection).toBeVisible();

		// Check Preparation section
		const prepSection = page.locator("section").filter({
			has: page.getByText("Preparing for Expanded Context and Compute"),
		});
		await expect(prepSection).toBeVisible();

		// Check Conclusion section
		const conclusionSection = page.locator("section").filter({
			has: page.getByText("Conclusion"),
		});
		await expect(conclusionSection).toBeVisible();
	});
});
