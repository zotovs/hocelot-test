module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        jsxBracketSameLine: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0
  }
};
