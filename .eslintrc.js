module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
    {
      files: ['src/frontend/*.js', 'index.js']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'max-len': ['error', { code: 150, comments: 150 }],
    'class-methods-use-this': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-noninteractive-element-interactions': 0,
    'no-underscore-dangle': ['error', { allow: ['_hex'] }],
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0
  }
};
