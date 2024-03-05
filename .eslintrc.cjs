module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "@wemake-services/typescript/recommended",
    "@wemake-services/javascript",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 125,
      },
    ],
    "no-undef": "off",
    "ts-expect-error": "off",
    "react/jsx-filename-extension": "off",
    'unicorn/filename-case': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'max-statements': 'off',
    'no-nested-ternary': 'off'

  },
};
