# webpack config


## Base
### 编译
#### html
- html-loader: 解析html文件
#### 样式
- style: style-loader（将css样式使用style标签插入到html head内）
- css: 
  - css-loader（解析css文件，尤其对 ```@import url() ``` 进行转换）  
  - postcss-loader（对css文件进行额外处理，例如：样式属性添加浏览器内核前缀）
- less: less-loader（解析less文件）
- 

#### js
- babel-loader: 转换非 es5 代码  
- pugins 见 .babelrc 文件
```
{
  // 预设，告诉babel使用哪种js规范或者提案转译代码
  "presets": [
    "@babel/preset-env",// preset-env 包含了最新的js规范
    "@babel/react"      // 转换react代码
  ],
  // 生成AST后使用plugin处理
  "plugins": [
    [
      "@babel/transform-runtime", // polyfill
      {
        "helper": false,
        "module-name": "@babel/runtime"
      },
    ],
    "@babel/plugin-syntax-dynamic-import", // 支持动态import
    [
      "@babel/plugin-proposal-decorators", // 支持@注解语法
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties", // 支持class 属性使用@注解语法 eg:mobx
      {
        "loose": true
      }
    ],
    [
      "import",// 按需加载
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```