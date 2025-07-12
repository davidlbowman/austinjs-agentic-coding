import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	testMatch: "**/*-e2e.ts",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["list"], ["line"]],
	use: {
		baseURL: "http://localhost:4321",
		trace: "on-first-retry",
	},

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
		{
			name: "Mobile Chrome",
			use: { ...devices["Pixel 5"] },
		},

		{
			name: "Mobile Firefox",
			use: { ...devices["Pixel 5"], ...devices["Desktop Firefox"] },
		},
	],

	webServer: {
		command: "bun dev",
		port: 4321,
		reuseExistingServer: !process.env.CI,
	},
});
