module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:i18next/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: '.',
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'import',
    'react-hooks',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      'typescript': {
        'project': './tsconfig.json'
      },
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    'react': {
      'version': '18.x'
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 80,
        'tabWidth': 2,
        'useTabs': false,
        'semi': true,
        'singleQuote': true,
        'trailingComma': 'es5',
        'bracketSpacing': true,
        'bracketSameLine': false,
        'arrowParens': 'always',
        'endOfLine': 'lf',
        'singleAttributePerLine': true
      }
    ],
    'max-len': ['error', { 'ignoreComments': true }],
    'import/no-extraneous-dependencies': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to'
        ],
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'variable',
        'format': [
          'camelCase',
          'UPPER_CASE',
          'PascalCase'
        ],
        'leadingUnderscore': 'allowSingleOrDouble',
        'trailingUnderscore': 'allowSingleOrDouble',
      },
      {
        'selector': 'function',
        'format': [
          'camelCase',
          'PascalCase'
        ]
      },
      {
        'selector': 'interface',
        'format': ['PascalCase']
      }
    ]
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ]
}