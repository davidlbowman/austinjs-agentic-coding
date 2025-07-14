import { expect, test } from "@playwright/test";

test.describe("Current State Section", () => {
	test("should display current state section", async ({ page }) => {
		await page.goto("/");

		const currentStateSection = page.locator("section").filter({
			has: page.getByText("Current State of AI in Software Engineering"),
		});
		await expect(currentStateSection).toBeVisible();
	});
});
