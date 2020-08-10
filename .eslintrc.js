const sharedConfig = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': ['error', 120],

    // TypeScriptのimportでエラーが出ないようにするためのairbnbの設定の上書き
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
      },
    ],
  },
  settings: {
    // TypeScriptのimportでエラーが出ないようにするためのairbnbの設定の上書き
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = {
  ...sharedConfig,

  overrides: [
    /**
     * TypeScriptにのみ適用する項目
     */
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ...sharedConfig.parserOptions,

        // @typescript-eslint/recommended-requiring-type-checking 用の設定
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
      },
      extends: [
        ...sharedConfig.extends,

        // 'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...sharedConfig.rules,

        // デフォルトのESLintで.tsファイルのimportがエラーになることがあるため
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/typedef': 'error',
      },
    },
  ],
};
