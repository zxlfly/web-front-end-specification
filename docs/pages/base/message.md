# 提示消息
一般使用组件自带的：
- 用于表示普通操作信息提示`info`
- 用于表示操作顺利达成`success`
- 用于表示操作引起一定后果`warning`
- 用于表示操作引起严重的后果`error`
- 用于帮助用户操作的信息提示`question`
![pagination](/image/message.png)
```
<template>
  <t-space direction="vertical">
    <t-message theme="info">用于表示普通操作信息提示</t-message>
    <t-message theme="success">用于表示操作顺利达成</t-message>
    <t-message theme="warning">用于表示操作引起一定后果</t-message>
    <t-message theme="error">用于表示操作引起严重的后果</t-message>
    <t-message theme="question">用于帮助用户操作的信息提示</t-message>
  </t-space>
</template>
```
