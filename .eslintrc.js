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
    '@typescript-eslint/consistent-type-imports': 1,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/display-name': 1,
    'no-tabs': 0,
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['role', 'data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap', 'as', 'border']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
    'ulbi-tv-plugin/public-api-imports': ['error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx']
      }
    ],
    // 'fsd-path-checker-plugin/path-checker': ['error', { alias: '@' }],
    // 'fsd-path-checker-plugin/public-api-imports': ['error',
    //   {
    //     alias: '@',
    //     testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
    //   }
    // ]
    'ulbi-tv-plugin/layer-imports': ['error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider']
      }
    ],
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    'ulbi-tv-plugin',
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
