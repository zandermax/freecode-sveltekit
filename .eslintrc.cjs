/** @type { import("eslint").Linter.Config } */
module.exports = {
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	extends: ['canonical/auto', 'plugin:svelte/recommended'],
	overrides: [
		{
			extends: ['plugin:@html-eslint/recommended'],
			files: ['*.html'],
			parser: '@html-eslint/parser',
			rules: {
				'@html-eslint/indent': ['error', 'tab'],
				'@html-eslint/no-extra-spacing-attrs': [
					'error',
					{ enforceBeforeSelfClose: true },
				],
				'@html-eslint/require-closing-tags': [
					'error',
					{ selfClosing: 'always' },
				],
				'prettier/prettier': [
					'error',
					{
						parser: 'html',
						useTabs: true,
					},
				],
			},
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'prettier/prettier': [
					'error',
					{
						parser: 'svelte',
						plugins: ['prettier-plugin-svelte'],
					},
				],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// eslint-disable-next-line unicorn/numeric-separators-style
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module',
	},
	plugins: ['@html-eslint'],
	root: true,
	rules: {
		'canonical/filename-match-exported': ['error', { suffix: '\\.config$' }],
		indent: ['error', 'tab'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
			},
		],
		'unicorn/numeric-separators-style': [
			'error',
			{ number: { minimumDigits: 5 } },
		],
	},
};
