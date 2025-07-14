import { expect, test } from "@playwright/test";

test.describe("All Sections", () => {
	test("should display all sections", async ({ page }) => {
		await page.goto("/");

		const contextComputeSection = page.locator("section").filter({
			has: page.getByText("Relationship Between Context and Compute"),
		});
		await expect(contextComputeSection).toBeVisible();

		const mcpSection = page.locator("section").filter({
			has: page.getByText("MCP: Context and Compute"),
		});
		await expect(mcpSection).toBeVisible();

		const agenticSection = page.locator("section").filter({
			has: page.getByText("Agentic Coding: Context and Compute"),
		});
		await expect(agenticSection).toBeVisible();

		const prepSection = page.locator("section").filter({
			has: page.getByText("Preparing for Expanded Context and Compute"),
		});
		await expect(prepSection).toBeVisible();

		const conclusionSection = page.locator("section").filter({
			has: page.getByText("Conclusion"),
		});
		await expect(conclusionSection).toBeVisible();
	});
});
