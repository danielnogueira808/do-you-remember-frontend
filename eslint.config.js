const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');

const tsParser = require('@typescript-eslint/parser');
const expoConfig = require('eslint-config-expo/flat');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const prettierConfig = require('eslint-plugin-prettier/recommended');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const globals = require('globals');

module.exports = defineConfig([
  expoConfig,
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/**', 'build/**', 'dist/**', 'android/**', 'ios/**', '.expo/**', 'web-build/**'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    plugins: {
      'react': reactPlugin,
      'react-native': reactNativePlugin,
      'react-hooks': reactHooksPlugin,
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-native/no-single-element-style-arrays': 'error',
      'react-native/no-unused-styles': 'warn',
      'react-native/sort-styles': 'warn',
      'react-native/no-raw-text': 'warn',

      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['../../../*'],
              message: 'Prefira usar path alias em vez de caminhos relativos muito longos',
            },
          ],
        },
      ],

      'default-case': 'error',
      'no-duplicate-imports': 'error',
      'no-console': 'warn',
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
