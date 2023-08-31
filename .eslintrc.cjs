module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'airbnb-base'
	],
	rules: {
		camelcase: 'off',
		'no-console': ['error', { allow: ['assert'] }],
		'no-unused-vars': 'off',
		'no-alert': 'off',
		'linebreak-style': 'off',
		'no-underscore-dangle': 'off',
		'dot-notation': 'off',
		'max-len': ['warn', { code: 120, ignoreComments: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/indent': ['warn', 2],
		'object-curly-newline': 0,
		'react/no-unknown-property': [2, { ignore: ['jsx'] }],
		'no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: false,
				allowNamedExports: true
			}
		],
		'import/no-unresolved': 'error',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', ['parent', 'sibling'], 'index', 'object', 'type'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				'newlines-between': 'always'
			}
		]
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
