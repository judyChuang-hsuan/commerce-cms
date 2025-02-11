import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
// eslint.config.js
export default {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	ignorePatterns: ['dist', 'package.json'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'unused-imports'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'unused-imports/no-unused-imports': 'warn',
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
			languageOptions: {
				globals: {
					browser: true,
				},
			},
		},
	],
	...tseslint.configs.recommended,
	...require('eslint-plugin-react').configs.recommended,
}
