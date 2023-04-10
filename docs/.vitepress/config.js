module.exports = {
  title: "前端开发项目样式规范", // 顶部左侧标题
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
      { name: "keywords", content: "前端开发项目样式规范" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "前端开发项目样式规范",
      },
    ],
  ],
  themeConfig: {
    // socialLinks: [//右上角图标和链接，icon 可用svg 配置
    //   { icon: 'github', link: '' },
    //   { icon: 'slack', link: '' }
    // ],
    lastUpdatedText: '更新时间',
    siteTitle: '前端开发项目样式规范',
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
      }, {
        text: 'TypeScript基础应用',
        collapsible: true,//可折叠的
        collapsed: true,//默认是否折叠
        items: [
          { text: '常见类型', link: '/pages/typescript/common-type' },
          { text: '函数', link: '/pages/typescript/function' },
          { text: '数组', link: '/pages/typescript/array' },
          { text: '接口', link: '/pages/typescript/interface' },
          { text: '联合类型 & 类型别名', link: '/pages/typescript/union-types&type-aliases' },
          { text: '类型的窄化', link: '/pages/typescript/type-narrowing' },
          { text: '类型断言', link: '/pages/typescript/type-assertion' },
          { text: '枚举', link: '/pages/typescript/enumerate' },
          { text: '类', link: '/pages/typescript/class' },
          { text: '泛型', link: '/pages/typescript/generics' },

        ],
      }, {
        text: 'TS 在 Vue 中的实践',
        collapsible: true,//可折叠的
        collapsed: true,//默认是否折叠
        items: [
          { text: '命名规范', link: '/pages/ts-practice-in-vue/naming-convention' },
          { text: ' HTML 规范', link: '/pages/ts-practice-in-vue/html-specification' },
          { text: 'Vue 规范', link: '/pages/ts-practice-in-vue/vue-specification' },
          { text: '关于注释', link: '/pages/ts-practice-in-vue/about-annotations' },
        ],
      }, {
        text: 'git规范',
        collapsible: true,//可折叠的
        collapsed: true,//默认是否折叠
        items: [
          { text: '关于git提交规范', link: '/pages/git/git-commit-specification' },
        ],
      }, {
        text: '样式规范',
        collapsible: true,//可折叠的
        collapsed: true,//默认是否折叠
        items: [
          { text: '命名规范', link: '/pages/project-style-specification/naming-convention' },
          { text: '全局通用样式', link: '/pages/project-style-specification/global-style' },
          { text: '通用尺寸颜色等规范', link: '/pages/project-style-specification/universal-size-specification' },
        ],
      },
    ],
    outlineTitle: '目录'
  },
};
