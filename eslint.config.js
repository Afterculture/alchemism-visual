import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,ts}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				console: 'readonly',
				fetch: 'readonly',
				Request: 'readonly',
				Response: 'readonly',
				TextEncoder: 'readonly',
				TextDecoder: 'readonly',
				ReadableStream: 'readonly'
			}
		},
		rules: {
			'no-unused-vars': 'off'
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules/**',
			'build/**',
			'.svelte-kit/**',
			'package/**',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'**/*.svelte'
		]
	}
];
