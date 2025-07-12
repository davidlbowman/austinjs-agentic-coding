import { expect, test } from "@playwright/test";

test("button exists on homepage", async ({ page }) => {
	await page.goto("/");

	const button = page.getByRole("button", { name: "Button" });

	await expect(button).toBeVisible();
	await expect(button).toHaveText("Button");
});
