module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json'
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-dynamic-delete': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/display-name': 1,
    'no-tabs': 0,
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['role', 'data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap', 'as']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'ulbi-tv-plugin/path-checker': 'error'
    // 'fsd-path-checker-plugin/path-checker': 'error'
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    'ulbi-tv-plugin'
    // 'fsd-path-checker-plugin'
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 0
      }
    }
  ]
}
