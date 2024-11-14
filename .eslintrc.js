// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-object-type": "warn",
    "@typescript-eslint/no-require-imports": "off",
  },
};
