/**
 * @see {@link https://prettier.io/docs/configuration}
 * @see {@link https://prettier.io/docs/options}
 * @type {import('prettier').Config}
 */
export default {
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
}
