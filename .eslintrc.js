module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
          "object": false,
          "Object": {
            message: "Use object instead",
            fixWith: "object",
          },
          "any": false,
        },
      },
    ],
  },
}
