import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginImport from 'eslint-plugin-import'


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  reactAppConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules', 'dist', 'build'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      indent: ['error', 2],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'linebreak-style': [0, 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'import/no-unresolved': [2, { caseSensitive: false }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    plugins: {
      import: pluginImport,
      prettier: pluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
