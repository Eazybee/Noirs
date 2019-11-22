module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {},
  overrides: [
    {
      files: ["webpack/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0
      }
    }
  ]
};