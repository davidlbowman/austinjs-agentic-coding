import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import mcp from "astro-mcp";
export default defineConfig({
	integrations: [react(), mcp()],

	vite: {
		plugins: [tailwindcss()],
	},

	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: "Geist Sans",
				cssVariable: "--font-geist-sans",
				weights: [400, 500, 600, 700],
				styles: ["normal"],
				subsets: ["latin"],
			},
			{
				provider: fontProviders.fontsource(),
				name: "Geist Mono",
				cssVariable: "--font-geist-mono",
				weights: [400, 600, 700],
				styles: ["normal"],
				subsets: ["latin"],
			},
		],
	},
});
