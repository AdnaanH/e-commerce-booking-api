module.exports = {
    env: { node: true, es2020: true },
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier',
    ],
    plugins: ['import'],
    rules: {
      'import/order': ['error', { alphabetize: { order: 'asc' } }],
    },
  };
  