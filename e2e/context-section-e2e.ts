import { expect, test } from "@playwright/test";

test.describe("Context Section", () => {
	test("should display context section", async ({ page }) => {
		await page.goto("/");

		const contextSection = page.locator("section").filter({
			has: page.getByText("Context in AI Coding Tools"),
		});
		await expect(contextSection).toBeVisible();
	});
});
