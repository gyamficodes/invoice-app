module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: ["vuejs-accessibility"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": [
      "error",
      {
        code: 500, // Set maximum line length to 120 characters
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "vuejs-accessibility/label-has-for": [
      "error",
      {
        // Configuration options here
      },
      
    ],
    "vuejs-accessibility/click-events-have-key-events": "off",
    "vuejs-accessibility/label-has-for": "off",
    "vuejs-accessibility/mouse-events-have-key-events": "off",
    "vuejs-accessibility/no-access-key": "off",
    "vuejs-accessibility/no-autofocus": "off",
    "vuejs-accessibility/no-distracting-elements": "off",
    "vuejs-accessibility/no-unsupported-browser-features": "off",
    "vuejs-accessibility/tabindex-no-positive": "off",
    "vuejs-accessibility/valid-aria-role": "off",
    "vuejs-accessibility/valid-aria-props": "off",
    "vuejs-accessibility/valid-tabindex": "off",
    "vuejs-accessibility/no-static-element-interactions": "off",

  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
