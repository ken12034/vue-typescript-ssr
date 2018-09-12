module.exports = {
    
  "plugins": [
    "vue",  
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb-base", 
    "plugin:vue/recommended",
    "@vue/typescript"
  ],
  "parserOptions": { 
    "parser": "babel-eslint",
    "ecmaVersion": 8 ,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true
  }, 
  "rules": {
      "max-len": "off",
      "no-underscore-dangle": "off",
      "linebreak-style": "off",
      "no-param-reassign": "off",
      "import/prefer-default-export": "off",
      "no-mixed-operators": ['error', {"allowSamePrecedence": true}],
      "no-unused-vars": ["error", { "args": "after-used", "ignoreRestSiblings": true,  "caughtErrors": "none" }],
      "prefer-destructuring": ["warn", {VariableDeclarator: {object: true}}], 
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "indent": ["error", 2],
      "vue/no-unused-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "key-spacing": ["error", { "mode": "strict" }]
  },
  "globals": {
      "Vue": true,
      "siteConfig": true,
      "$": true,
      "_supportDomain": true,
      "_officialDomain": true,
      "_website": true,
      "_accountDomain": true, 
      "_surveryDomain": true, 
      "_memberId":true, 
      "dataLayer": true,
  } 
};