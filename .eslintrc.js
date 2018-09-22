module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'error',
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],

  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
