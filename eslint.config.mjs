import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: true,
        module: true,
        __dirname: true,
        process: true,
        console: true
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-undef': 'off', // optional, because we defined globals
    },
  }
]);


