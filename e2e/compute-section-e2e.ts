import { expect, test } from "@playwright/test";

test.describe("Compute Section", () => {
	test("should display compute section", async ({ page }) => {
		await page.goto("/");

		// Check that the compute section exists
		const computeSection = page.locator("section").filter({
			has: page.getByText("Compute in AI Coding Tools"),
		});
		await expect(computeSection).toBeVisible();
	});
});
