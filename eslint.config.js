import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  {
    ignores: [ 'dist/**', 'node_modules/**', '.vitest/**' ]
  },
  ...compat.config({
    env: {
      browser: true,
      es2020: true,
      jest: true,
      node: true
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/internal-regex': '^@/'
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:tailwindcss/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    plugins: [ 'import', 'react', 'react-hooks', '@typescript-eslint', 'tailwindcss' ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: true, arraysInArrays: true } ],
      'comma-dangle': [ 'error', 'never' ],
      'jsx-quotes': [ 'error', 'prefer-double' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'prettier/prettier': 'off',
      'prefer-const': 'error',
      quotes: [ 'error', 'single', { avoidEscape: true } ],
      semi: [ 'error', 'always' ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
      indent: [ 'error', 2 ]
    }
  }),
  {
    files: [ '**/*.{jsx,tsx}' ],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'import/order': 'off',
      'simple-import-sort/imports': [ 'error', {
        groups: [
          [
            '^react$',
            '^react-native$',
            '^next$',
            '^next/',
            '^node:',
            '^@?\\w'
          ],
          [
            '^@/components(/.*)?$',
            '^\\.\\.?/components(/.*)?$'
          ],
          [
            '^\\u0000',
            '^(@/|\\.\\.?/)(assets)(/.*)?$',
            '^(@/|\\.\\.?/)(constants)(/.*)?$',
            '^(@/|\\.\\.?/)(context)(/.*)?$',
            '^(@/|\\.\\.?/)(hooks)(/.*)?$',
            '^(@/|\\.\\.?/)(lib)(/.*)?$',
            '^(@/|\\.\\.?/)(services)(/.*)?$',
            '^(@/|\\.\\.?/)(styles)(/.*)?$',
            '^(@/|\\.\\.?/)(utils)(/.*)?$',
            '^(@/|\\.\\.?/)(?!components/)(?!assets/|constants/|context/|data/|hooks/|lib/|services/|styles/|utils/)(?!.*\\.json$)(?!.*\\.config(\\..+)?$).+',
            '^(@/|\\.\\.?/)(data)(/.*)?$',
            '^.+\\.json$',
            '^.+\\.config(\\..+)?$'
          ],
          [
            '\\u0000$'
          ]
        ]
      } ]
    }
  }
];
