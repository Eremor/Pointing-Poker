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
    'plugin:prettier/recommended'
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
    'react-hooks'
  ],
  settings: {
    'import/resolver': {
      'typescript': {
        'project': './tsconfig.json'
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
        'bracketSameLine': true,
        'arrowParens': 'always',
        'endOfLine': 'lf'
      }
    ],
    'max-len': ['error', { 'ignoreComments': true }],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    // 'import/named': 'off'
  }
}