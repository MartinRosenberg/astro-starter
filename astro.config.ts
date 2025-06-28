import { defineConfig } from "astro/config"
import react from "@astrojs/react"

/**
 * @see {@link https://astro.build/config}
 */
export default defineConfig({
	integrations: [react()],
	site: "https://example.com", // TODO
	trailingSlash: "never",
})
