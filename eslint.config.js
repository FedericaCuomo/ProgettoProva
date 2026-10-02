// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintConfigPrettier,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@angular/common',
              importNames: ['CommonModule'],
              message:
                'Do not import CommonModule. Use standalone components/directives',
            },
          ],
        },
      ],
      'no-debugger': 'error',
      'max-len': [
        'error',
        {
          code: 140,
          ignoreStrings: true,
          ignoreComments: true,
        },
      ],
      // 'prettier/prettier': [
      //   'error',
      //   // Queste opzioni devono essere sempre "allineati" con le configurazioni del file .prettierrc
      //   {
      //     singleQuote: true,
      //     trailingComma: 'es5',
      //     arrowParens: 'avoid',
      //     endOfLine: 'auto',
      //     experimentalTernaries: true,
      //   },
      // ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/use-lifecycle-interface': 'off',
      '@angular-eslint/component-class-suffix': 'off',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      local: {
        rules: {},
      },
    },
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintConfigPrettier,
    ],
    rules: {
      '@angular-eslint/template/no-duplicate-attributes': 'off',
      '@angular-eslint/template/button-has-type': 'warn',
      '@angular-eslint/template/cyclomatic-complexity': 'warn',
      '@angular-eslint/template/conditional-complexity': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/prefer-control-flow': 'warn',
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/click-events-have-key-events': 'error',
      '@angular-eslint/template/mouse-events-have-key-events': 'error',
    },
  },
);
