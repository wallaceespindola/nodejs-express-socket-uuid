import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ['src/**/*.ts'],
    languageOptions: { parserOptions: { projectService: true } },
  },
  {
    files: ['public/**/*.js'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: { globals: { document: 'readonly', io: 'readonly', prompt: 'readonly' } },
  },
  { files: ['*.js', '*.ts'], ...tseslint.configs.disableTypeChecked },
);
