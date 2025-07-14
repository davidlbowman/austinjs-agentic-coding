import { expect, test } from "@playwright/test";

test.describe("Hero Section", () => {
	test("should display hero section", async ({ page }) => {
		await page.goto("/");

		const heroSection = page.locator("section").first();
		await expect(heroSection).toBeVisible();

		await expect(page).toHaveTitle(/AI in Software Engineering/);
	});
});
