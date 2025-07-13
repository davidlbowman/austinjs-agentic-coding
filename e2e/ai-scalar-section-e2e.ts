import { expect, test } from "@playwright/test";

test.describe("AI Scalar Section", () => {
	test("should display AI scalar section", async ({ page }) => {
		await page.goto("/");

		// Check that the AI scalar section exists
		const aiScalarSection = page.locator("section").filter({
			has: page.getByText("AI as a Scalar to Productivity"),
		});
		await expect(aiScalarSection).toBeVisible();
	});
});
