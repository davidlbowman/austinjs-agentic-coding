// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mcp from "astro-mcp";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mcp()],

	vite: {
		plugins: [tailwindcss()],
	},
});
