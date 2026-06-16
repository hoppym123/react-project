import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * ESLint Configuration
 * Enforces professional code quality standards and React best practices
 */
export default defineConfig([
  globalIgnores(['dist', 'node_modules', '.env*']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      // Enforce consistent quotes
      'quotes': ['warn', 'single', { avoidEscape: true }],

      // Require semicolons
      'semi': ['warn', 'always'],

      // Enforce 2-space indentation
      'indent': ['warn', 2, { SwitchCase: 1 }],

      // Disallow unused variables
      'no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],

      // Require const for variables that are never reassigned
      'prefer-const': [
        'warn',
        { destructuring: 'any', ignoreReadBeforeAssign: false },
      ],

      // Warn about console statements in production
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Enforce arrow function callback style
      'prefer-arrow-callback': 'warn',

      // React specific rules
      'react-refresh/only-export-components': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
