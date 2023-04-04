module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict'
  ],
  plugins: [
    'astro',
    'react',
    'import'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'astro/jsx-a11y/media-has-caption': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.astro'] }]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react/react-in-jsx-scope': 'off'
      },
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['src/assets/**/*', 'node_modules', 'dist']
}
