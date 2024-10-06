module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 行尾不加分号
    'semi': [1, 'never'],
    // 两格缩进
    "indent": [1, 2],
    // 箭头函数中，在需要的时候，在参数外使用小括号（只有一个参数时，可以不适用括号，其它情况下都需要使用括号）
    "arrow-parens": [2, "as-needed"],
    //箭头函数中的箭头前后需要留空格
    "arrow-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    //在定义对象或数组时，最后一项不能加逗号
    "comma-dangle": [
      2,
      "never"
    ],
    //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    //如果逗号可以放在行首或行尾时，那么请放在行尾
    "comma-style": [
      2,
      "last"
    ],
    // keyword 前后需要空格
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {}
      }
    ],
    //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    //禁止使用没有必要的嵌套代码块
    "no-lone-blocks": 2,
    //不要把空格和tab混用
    "no-mixed-spaces-and-tabs": 2,
    //顾名思义，该规则保证了在逻辑表达式、条件表达式、
    //申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符。
    "no-multi-spaces": 2,
    //空行不能够超过2行
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ],
    //在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { //do something }
    "no-negated-in-lhs": 2,
    //不要重复申明一个变量
    "no-redeclare": 2,
    //正则表达式中不要使用空格
    "no-regex-spaces": 2,
    //return语句中不要写赋值语句
    "no-return-assign": 2,
    //不要和自身作比较
    "no-self-compare": 2,
    //不要使用逗号操作符，详见官网
    "no-sequences": 2,
    //禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
    "no-shadow-restricted-names": 2,
    //函数调用时，圆括号前面不能有空格
    "no-spaced-func": 2,
    //禁止使用稀疏数组
    "no-sparse-arrays": 2,
    //行末禁止加空格
    "no-trailing-spaces": 2,
    //禁止使用没有定义的变量，除非在／＊global＊／已经申明
    "no-undef": 2,
    //禁止把undefined赋值给一个变量
    "no-undef-init": 2,
    //禁止在不需要分行的时候使用了分行
    "no-unexpected-multiline": 2,
    //禁止使用没有必要的三元操作符，因为用些三元操作符可以使用其他语句替换
    "no-unneeded-ternary": [
      2,
      {
        "defaultAssignment": false
      }
    ],
    //没有执行不到的代码
    "no-unreachable": 2,
    //没有定义了没有被使用到的变量
    "no-unused-vars": [
      1,
      {
        "vars": "all",
        "args": "none"
      }
    ],
    //在进行断行时，操作符应该放在行首还是行尾。并且还可以对某些操作符进行重写。
    "operator-linebreak": [
      2,
      "after",
      {
        "overrides": {
          "?": "before",
          ":": "before"
        }
      }
    ],
    //使用单引号
    "quotes": [
      1,
      "single",
      "avoid-escape"
    ],
    //代码块前面需要加空格
    "space-before-blocks": [
      2,
      "always"
    ],
    //函数圆括号前面需要加空格
    "space-before-function-paren": [
      2,
      "never"
    ],
    //圆括号内部不需要加空格
    "space-in-parens": [
      2,
      "never"
    ],
    //操作符前后需要加空格
    "space-infix-ops": 2,
    //一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    //评论符号｀／*｀ ｀／／｀，后面需要留一个空格
    "spaced-comment": [
      1,
      "always",
      {
        "markers": [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ","
        ]
      }
    ],
  },
}
