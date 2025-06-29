/**
 * @import { Config } from "prettier"
 */

/**
 * @see {@link https://prettier.io/docs/configuration}
 * @see {@link https://prettier.io/docs/options}
 */
export default /** @type {const} @satisfies {Config} */ ({
	proseWrap: "always",
	useTabs: true,
	
	overrides: [
		{
			files: ".github/*.md",
			options: {
				proseWrap: "preserve"
			}
		}
	]
})
