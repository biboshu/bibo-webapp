// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import prettier from 'eslint-config-prettier';
import path from 'node:path';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	...storybook.configs['flat/recommended'],
	{ plugins: { '@stylistic': stylistic } },
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						'eslint.config.ts',
						'svelte.config.ts',
						'playwright.config.ts',
						'commitlint.config.mjs',
						'lint-staged.config.mjs',
						'vitest.shims.d.ts',
						'.storybook/*.ts',
					],
				},
			},
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off',
		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
			},
		},
	},
	{
		// Override or add rule settings here, such as:
		// 'svelte/button-has-type': 'error'
		rules: {
			'no-throw-literal': 'error',
			'no-async-promise-executor': 'error',
			'no-await-in-loop': 'error',
			'no-promise-executor-return': 'error',
			'require-atomic-updates': 'error',
			'prefer-promise-reject-errors': 'error',
			'no-restricted-imports': ['error', { patterns: ['**/*.test.ts', '**/*.test.*.ts'] }],
			'no-nested-ternary': 'error',
			'@stylistic/eol-last': 'error',
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-misused-spread': 'off',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/restrict-plus-operands': 'error',
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true }],
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/consistent-indexed-object-style': 'error',
			'@typescript-eslint/consistent-generic-constructors': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{ selector: 'interface', format: ['PascalCase'] },
				{ selector: 'typeAlias', format: ['PascalCase'] },
				{ selector: 'typeMethod', format: ['camelCase'] },
				{ selector: 'enum', format: ['PascalCase'] },
				{ selector: 'enumMember', format: ['UPPER_CASE'] },
				{ selector: 'class', format: ['PascalCase'] },
				{ selector: 'classMethod', format: ['camelCase'] },
				{ selector: 'classProperty', format: ['camelCase'] },
				{ selector: 'function', format: ['camelCase'] },
				{ selector: 'parameter', format: ['camelCase'] },
				{ selector: 'parameterProperty', format: ['camelCase'] },
			],
		},
	},
	{ files: ['**/*.test.ts', '**/*.test.*.ts'], rules: { 'no-restricted-imports': 'off' } },
	{ files: ['**/*.d.ts'], rules: { '@typescript-eslint/consistent-type-definitions': 'off' } },
);
