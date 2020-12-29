module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 'error',
    'no-unused-vars': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'warn',
    'valid-typeof': 'warn',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'consistent-return': 'warn',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-undef': 'off',
    'no-return-assign': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['typings/**/*', 'test/**/*'] },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
  },
};
