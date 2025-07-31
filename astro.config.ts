import mdx from "@astrojs/mdx"
import netlify from "@astrojs/netlify"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

/**
 * @see {@link https://astro.build/config}
 */
export default defineConfig({
	adapter: netlify(),
	integrations: [react(), mdx()],
	site: "https://example.com", // TODO
	trailingSlash: "always",
	vite: {
		plugins: [tailwindcss()],
	},
})
