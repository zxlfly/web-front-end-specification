# 编辑示例
## 配置文件
文档的配置文件地址：``vitepress\config.js``，所有的配置均在此文件设置。

```
module.exports = {
  title: "顶部左侧标题",
  // base: "/doc-style-specification-document/", // 项目的根路径
  ignoreDeadLinks: true,// 构建时会忽略md中的外链
  markdown: {
    // theme: 'material-palenight',//md主题
    lineNumbers: true//md 加行号
  },
  lastUpdated: true,//显示最近更新时间
  appearance: true,//可以选择深浅主题
  head: [
    // 设置 描述 和 关键词
    [
      "meta",
      { name: "keywords", content: "规范文档" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "前端开发规范文档",
      },
    ],
  ],
  themeConfig: {
    // socialLinks: [//右上角图标和链接，icon 可用svg 配置
    //   { icon: 'github', link: '' },
    //   { icon: 'slack', link: '' }
    // ],
    lastUpdatedText: '更新时间',
    siteTitle: '前端规范文档',
    nav: [//右侧导航
      { text: '项目简介', link: '/' },
      { text: '编辑示例', link: '/example' }
    ],
    // 侧边导航
    sidebar: [
      {
        text: '前端代码结构规范',
        collapsible: true,//可折叠的
        collapsed: false,//默认是否折叠
        items: [
          { text: '总则', link: '/pages/general-specification/index' },
          { text: '标记文档规范', link: '/pages/general-specification/markup-document-specification' },
          { text: '逻辑脚本文档规范', link: '/pages/general-specification/logic-script-document-specification' },
          { text: 'Vue代码书写规范', link: '/pages/general-specification/vue-code-writing-specification' },
          { text: '统一规范', link: '/pages/general-specification/uniform-specification' },
        ],
      },
      // ...
    ],
    outlineTitle: '目录'
  },
};

```

## 右侧新增导航
- 在``nav``配置项中，新增一条路由信息，link不需要带后缀
- 在对应的文件夹下新增md文件
- 在md文件中编辑规范即可

## 左侧新增导航
- 在``sidebar``配置项中，新增一条路由信息，link不需要带后缀
- 在对应的文件夹下新增md文件
- 在md文件中编辑规范即可