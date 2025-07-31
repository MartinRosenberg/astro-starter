/**
 * @import { Config } from "prettier"
 */

/**
 * @see {@link https://prettier.io/docs/configuration}
 * @see {@link https://prettier.io/docs/options}
 */
const config = /** @type {const} @satisfies {Config} */ ({
	proseWrap: "always",
	quoteProps: "consistent",
	semi: false,
	useTabs: true,

	overrides: [
		{
			files: ".github/*.md",
			options: {
				proseWrap: "preserve",
			},
		},
	],
})

export default config
