import { expect, test } from "@playwright/test";

test.describe("Slider Functionality", () => {
	test("should have exactly three sliders with one thumb each", async ({
		page,
	}) => {
		await page.goto("/");

		// Test all sliders on the page
		const sliders = page.locator('[role="slider"]');
		const sliderCount = await sliders.count();

		expect(sliderCount).toBe(3); // AI Scalar, Context, Compute

		// Check each slider has exactly one thumb
		const allThumbs = page.locator('[data-slot="slider-thumb"]');
		const thumbCount = await allThumbs.count();

		// Should have exactly 3 thumbs (one per slider)
		expect(thumbCount).toBe(3);

		// Verify all sliders are visible and enabled
		for (let i = 0; i < sliderCount; i++) {
			const slider = sliders.nth(i);
			await expect(slider).toBeVisible();
			await expect(slider).toBeEnabled();
		}
	});
});
