# 关于git提交规范
每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
其中，Header 是必需的，Body 和 Footer 可以省略。

## type用于说明commit的类别
- feat：添加新功能。
- fix：修复 bug。
- docs：文档相关。
- style：样式相关。
- refactor：代码重构，一般如果不是其他类型的 commit，都可以归为重构。
- pref：性能相关。
- test：测试相关。
- build：影响项目构建或依赖项修改
- chore：构建配置相关。
- revert：分支回溯。
  
## scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
## subject是 commit 目的的简短描述，不超过50个字符
```
git commit -m "fix(auto-complete): 修复类型定义报错问题"
```
## Body 和 Footer日常开发忽略
## 总的规则设置
```
const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'revert'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  },
};
```
## 关于日志
后期会考虑集成自动生成提交日志