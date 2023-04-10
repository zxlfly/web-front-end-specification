# Vue 规范
## 1.2.1 Vue Template
- 属性绑定值或事件绑定方法名必须使用 "" 双引号
- 多个特性的元素应该分多行撰写，每个特性一行。
- v-if和v-for避免一起使用

## 1.2.1 Vue script
- 自定义事件函数，以emit打头
- props最少得约束类型，尽可能的详细
- 使用组合式API（Composition API），业务逻辑代码提取到对应的composables目录下
  - 命名方式同上
  - 关于类型约束，约束建议提取到单独的类型ts文件中，让页面逻辑更简洁清晰
  - [参考链接](https://github.com/DevCloudFE/vue-devui/tree/dev/packages/devui-vue/devui/auto-complete/src)

## 1.2.1 Vue style
- class使用小写字母，以中划线分隔
- id使用使用小写字母，以下划线分隔
- 非必要不要使用!important

## Vue TSX
目前根据公司前端实际工作使用的方案，暂不考虑使用TSX。维持SFC模式。
