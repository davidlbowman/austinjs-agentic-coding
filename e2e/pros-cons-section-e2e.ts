import { expect, test } from "@playwright/test";

test.describe("Pros and Cons Section", () => {
	test("should display pros and cons section", async ({ page }) => {
		await page.goto("/");

		const prosConsSection = page.locator("section").filter({
			has: page.getByText("Benefits & Costs of AI in Software Engineering"),
		});
		await expect(prosConsSection).toBeVisible();
	});
});
