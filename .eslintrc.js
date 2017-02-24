// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-unused-vars': [2, { 'args': 'none' }],
    'semi': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    'prefer-const': 0,
    'prefer-template': 0,
    'prefer-arrow-callback': 0,
    'max-len': [0, 120],
    'space-before-function-paren': [0, { 'anonymous': 'ignore', 'named': 'always' }],
    'no-param-reassign': [2, { "props": false }],
    'global-require': 0,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'arrow-body-style': [2, 'always'],
    'func-names': [2, 'never'],
    'default-case': 0
  }
}
