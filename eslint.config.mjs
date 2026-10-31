import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';



export default defineConfig(globalIgnores([
  '**/node_modules', '**/dist', '**/build', '**/.next', '**/@generated.*'
]), [
  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.typescript
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'semi': ['warn', 'always'],
      // 'indent': ['error', 2, { SwitchCase: 1, }],
      'prefer-const': 'off',
      'no-empty': 'warn',
      'preserve-caught-error': 'off',

      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true, }], // Prefer single quotes over double, ifnore template literals
      'jsx-quotes': ['error', 'prefer-double'], // Prefer double quotes for jsx (classname="")

      'react-hooks/set-state-in-render': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/exhaustive-deps': 'off', // Disable react warn for hooks dependencies

      'react-refresh/only-export-components': 'warn', // Allow exporting consts from nextjs

      'prefer-rest-params': 'off',

      'unused-imports/no-unused-imports': 'warn', // Remove unused imports

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

      'import/first': 'error', // Reorder imports to first line
      'import/newline-after-import': 'error', // Add one line after imports
      'import/no-duplicates': 'error', // Merge different imports from single file into one

      // '@next/next/no-img-element': 'off', // Disable nextjs error when using <img /> tag

      // Sort import order
      'simple-import-sort/imports': ['warn', {
        groups: [
          // Side effect imports (css, etc)
          ['^\\u0000'],

          // React / next firts
          ['^(react|next)$', '^@?\\w'],

          // Packages
          ['^@?\\w', '^(?![^/]+\\.)'],

          // Absolute imports
          ['^~'],

          // Relative imports
          ['^\\./'],

          // CSS modules
          ['^.+\\.(module.css|module.scss)$'],

          // Media imports
          ['^.+\\.(gif|png|svg|jpg)$'],
        ],
      }],
    }
  }])