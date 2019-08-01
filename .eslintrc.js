module.exports = {
  // parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier/react", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    // ecmaVersion: 6,
    // sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "react", "jsx-a11y"],
  rules: {
    // "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // "comma-dangle": [2], // disallow trailing commas
    // "semi": ["error", "never"], // disallow semicolons
    // "no-unexpected-multiline": 2, // detect exceptions where a semicolon is required to prevent two lines being interpreted as one expression
    // "no-console": 0, // console logs are stripped out on production build, allow for development
    // "no-plusplus": [2, { "allowForLoopAfterthoughts": true }], // allow ++ in for loops
    // "import/no-unresolved": 0, // no need for error on unresolved imports, console displays error anyway and this rule does not work with babelrc imports from root of app
    // "import/extensions": 0, // do not require extensions for imports
    // "no-use-before-define": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "react/prefer-es6-class": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "consistent-return": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "guard-for-in": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "no-restricted-syntax": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "no-param-reassign": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "class-methods-use-this": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "react/no-did-update-set-state": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "no-unused-expressions": [2, { "allowTernary": true }], // we often want to perform a check on the result of a promise, allow ternary for this
    // "react/jsx-no-bind": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    "react/jsx-filename-extension": 0 // don't restrict jsx to jsx files
    // "react/no-unused-prop-types": [1, { "skipShapeProps": true }],
    // "react/no-multi-comp": 1, // provide warning rather than error as reshaping code in currently existing files is optional
    // "import/imports-first": 0, // don't require absolute imports to come before relative imports
    // "import/newline-after-import": 0, // don't require new lines after import statements
    // "import/no-dynamic-require": 0, // allow require calls with expressions
    // "import/no-extraneous-dependencies": 0, // allow import of modules not listed in package.json
    // "import/no-named-as-default": 0, // allow use of an exported name as the name of the default export
    // "import/prefer-default-export": 0, // allow use of named export of a single module rather than default export
    // "max-len": 0, // do not enforce maximum line length
    // "react/forbid-prop-types": 0 // allow less specific propTypes
  }
};
