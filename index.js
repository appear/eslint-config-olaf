module.exports = {
  extends: "./recommends",
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ["jsx-a11y"],
  rules: {},
  overrides: [],
};
