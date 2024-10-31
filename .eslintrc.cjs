const { assert } = require('console');

module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
        depth: 3,
      },
    ],

    // 임포트 관련
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // 리액트 관련
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react-refresh/only-export-components': 'off',
    'react/require-default-props': 'off',

    // 기타 관련
    'no-undef': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-alert': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
};
