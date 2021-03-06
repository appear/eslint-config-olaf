const getBaseOptions = require("./get-base-options");

module.exports = {
  parser: "babel-eslint",
  ...getBaseOptions({ env: "js" }),
  extends: "./recommends",
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
    "import",
    "node",
    "promise",
    "standard",
  ],
  rules: {},
  overrides: [],
};
