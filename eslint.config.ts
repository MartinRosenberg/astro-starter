import configPrettier from "eslint-config-prettier"
import globals from "globals"
import parserAstro from "astro-eslint-parser"
import pluginAstro from "eslint-plugin-astro"
import pluginCss from "@eslint/css"
import pluginJs from "@eslint/js"
import pluginJsonc from "eslint-plugin-jsonc"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginMarkdown from "@eslint/markdown"
import pluginReact from "eslint-plugin-react"
import pluginTailwind from "eslint-plugin-better-tailwindcss"
import pluginTs from "typescript-eslint"

const ASTRO_FILES = "**/*.astro"
const JS_FILES = "**/*.{js,mjs,cjs,ts,mts,cts}"
const JSX_FILES = "**/*.{jsx,mjsx,cjsx,tsx,mtsx,ctsx}"

export default pluginTs.config([
	// Ignore generated files
	{
		ignores: [".astro/"],
	},

	// Astro, JavaScript, React
	{
		files: [ASTRO_FILES, JS_FILES, JSX_FILES],
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				...globals.browser,
				...globals.node,
				...globals.serviceworker,
			},
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
			sourceType: "module",
		},
		plugins: { js: pluginJs },
		extends: [
			pluginJs.configs.recommended,
			pluginTs.configs.strictTypeChecked,
			pluginTs.configs.stylisticTypeChecked,
		],
		rules: {
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		},
	},

	// JavaScript, React
	{
		files: [JS_FILES, JSX_FILES],
		languageOptions: {
			parser: pluginTs.parser,
			parserOptions: {
				projectService: true,
			},
		},
	},

	// Astro, React
	{
		files: [ASTRO_FILES, JSX_FILES],
		...pluginJsxA11y.flatConfigs.strict,
		...pluginReact.configs.flat.recommended,
		...pluginReact.configs.flat["jsx-runtime"],
	},
	{
		files: [ASTRO_FILES, JSX_FILES],
		plugins: {
			"better-tailwindcss": pluginTailwind,
		},
		rules: {
			...pluginTailwind.configs.recommended.rules,
		},
		settings: {
			"better-tailwindcss": {
				// Path to the entry file of the css-based Tailwind config
				entryPoint: "src/styles/global.css",
			}
		}
	},

	// Astro
	{
		files: [ASTRO_FILES],
		extends: [...pluginAstro.configs.recommended],
		processor: pluginAstro.processors["client-side-ts"],
		languageOptions: {
			parser: parserAstro,
			parserOptions: {
				parser: pluginTs.parser,
				project: true,
			},
		},
	},

	// CSS
	{
		language: "css/css",
		files: ["**/*.css"],
		plugins: { css: pluginCss },
		extends: [pluginCss.configs.recommended],
	},

	// JSON
	{
		files: ["**/*.json"],
		extends: [pluginJsonc.configs["flat/recommended-with-json"]],
	},
	{
		files: ["**/*.jsonc", "**/.vscode/*.json", "**/tsconfig.json"],
		extends: [pluginJsonc.configs["flat/recommended-with-jsonc"]],
		rules: {
			"jsonc/no-comments": "off",
		},
	},
	{
		files: ["**/*.json5"],
		extends: [pluginJsonc.configs["flat/recommended-with-json5"]],
	},

	// Markdown
	{
		language: "markdown/gfm",
		files: ["**/*.md"],
		plugins: { markdown: pluginMarkdown },
		languageOptions: {
			// @ts-expect-error The Markdown plugin docs specify this property: https://github.com/eslint/markdown?tab=readme-ov-file#enabling-front-matter-in-both-commonmark-and-gfm
			frontmatter: "yaml",
		},
		extends: [pluginMarkdown.configs.recommended],
	},

	// Disable formatting rules
	configPrettier,
	pluginJsonc.configs["flat/prettier"],
])
