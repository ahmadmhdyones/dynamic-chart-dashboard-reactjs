/* eslint-disable perfectionist/sort-objects */

import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import tanstack from '@tanstack/eslint-plugin-query';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier/recommended';

// ----------------------------------------------------------------------

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '.temp'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      tanstack.configs['flat/recommended'],
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'perfectionist': perfectionist,
      'unused-imports': unusedImports,
    },
    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // General JavaScript Rules
      'no-alert': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-unused-vars': 'off',
      'no-param-reassign': 'warn',
      'no-underscore-dangle': 'off',
      'no-restricted-exports': 'off',
      'no-promise-executor-return': 'warn',
      'no-restricted-imports': ['error', { patterns: ['@mui/*/*/*'] }],

      // React Specific Rules
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
      'react/no-children-prop': 'warn',
      'react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'warn',
      'react/hook-use-state': ['error', { allowDestructuredState: false }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...reactHooks.configs.recommended.rules,

      // TypeScript Specific Rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: true },
      ],

      // Import/Export Rules
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-as-default': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.js',
            '**/*.test.ts',
            '**/*.spec.js',
            '**/*.config.ts',
            '**/*.config.js',
            '**/eslint.config.mjs',
          ],
        },
      ],

      // unused-imports: https://www.npmjs.com/package/eslint-plugin-unused-imports
      'unused-imports/no-unused-imports': 1,
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Perfectionist: https://perfectionist.dev/rules
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          groups: [
            ['builtin', 'external'],
            'custom-mui',
            'custom-hooks',
            'custom-components',
            'custom-types',
            'custom-configs',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              'custom-mui': '^@mui/.*',
              'custom-hooks': '^@/hooks/.*',
              'custom-components': '^@/components/.*',
              'custom-types': '^@/types/.*',
              'custom-configs': '^@/configs/.*',
            },
          },
          newlinesBetween: 'always',
          internalPattern: ['^@/.*'],
        },
      ],
      'perfectionist/sort-exports': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-named-imports': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-named-exports': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-objects': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-jsx-props': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-heritage-clauses': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-intersection-types': ['error', { type: 'alphabetical', order: 'asc' }],
    },
  }
);
