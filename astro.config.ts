import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

/**
 * @see {@link https://astro.build/config}
 */
export default defineConfig({
	integrations: [react()],
	site: "https://example.com", // TODO
	trailingSlash: "always",
	vite: {
		plugins: [tailwindcss()],
	},
})
