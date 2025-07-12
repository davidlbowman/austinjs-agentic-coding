import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: "./e2e",
	testMatch: "**/*-e2e.ts",
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Scale workers based on environment */
	workers: process.env.CI ? 4 : undefined, // CI: 4 workers, Local: all cores
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: "html",
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: "http://localhost:3001",

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: "on-first-retry",
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},

		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},

		{
			name: "edge",
			use: { ...devices["Desktop Edge"] },
		},

		// Skip webkit for now due to system dependencies
		// {
		// 	name: "webkit",
		// 	use: { ...devices["Desktop Safari"] },
		// },

		/* Test against mobile viewports. */
		{
			name: "Mobile Chrome",
			use: { ...devices["Pixel 5"] },
		},

		{
			name: "Mobile Firefox",
			use: { ...devices["Pixel 5"], ...devices["Desktop Firefox"] },
		},

		// Skip Mobile Safari for now due to webkit dependencies
		// {
		// 	name: "Mobile Safari",
		// 	use: { ...devices["iPhone 12"] },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'bun run dev',
	//   url: 'http://localhost:3001',
	//   reuseExistingServer: !process.env.CI,
	// },
});
