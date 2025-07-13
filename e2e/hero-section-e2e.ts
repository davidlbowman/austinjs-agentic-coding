import { expect, test } from "@playwright/test";

test.describe("Hero Section", () => {
	test("should display hero section", async ({ page }) => {
		await page.goto("/");

		// Just check that the hero section exists
		const heroSection = page.locator("section").first();
		await expect(heroSection).toBeVisible();

		// Check page has correct title
		await expect(page).toHaveTitle(/AI in Software Engineering/);
	});
});
