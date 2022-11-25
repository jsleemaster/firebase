module.exports = {
  "rules": {
    "no-unused-vars": ["error", { 
      "vars": "all", 
      "args": "after-used", 
      "ignoreRestSiblings": false 
    }],
    "semi": ["warn"],
    "spaced-comment": ["warn"],
    "key-spacing": ["warn", {
      "beforeColon": false,
      "afterColon": true,
    }],
    "space-before-blocks": ["warn"],
    "space-before-function-paren": ["warn", { 
      "anonymous": "never", 
      "named": "never", 
      "asyncArrow": "always" 
    }],
    "space-in-parens": ["warn", "never"],
    "one-var": ["warn", { 
      "let": "never", 
      "const": "never" 
    }],
    "space-infix-ops": "error",
    "space-unary-ops": ["warn", {
       "words": true, 
       "nonwords": false 
    }],
    "arrow-spacing": "error",
    "keyword-spacing": "error",
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "indent": ["error", 2],
    "no-var": "error",
    "no-eval": "error",
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "no-unreachable": "error",
    "no-confusing-arrow": "warn",
    "brace-style": ["error", "1tbs", { 
      "allowSingleLine": false 
    }],

    /*
       O : function foo() { return true; }
       X : function foo() {return true;}
    */
    "block-spacing": ["error", "always"],
  }
}