import{_ as s,c as n,o as a,N as l}from"./chunks/framework.74d38e29.js";const m=JSON.parse('{"title":"编辑示例","description":"","frontmatter":{},"headers":[],"relativePath":"pages/example.md","lastUpdated":1681976206000}'),e={name:"pages/example.md"},p=l(`<h1 id="编辑示例" tabindex="-1">编辑示例 <a class="header-anchor" href="#编辑示例" aria-label="Permalink to &quot;编辑示例&quot;">​</a></h1><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>文档的配置文件地址：<code>vitepress\\config.js</code>，所有的配置均在此文件设置。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &quot;顶部左侧标题&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // base: &quot;/doc-style-specification-document/&quot;, // 项目的根路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  ignoreDeadLinks: true,// 构建时会忽略md中的外链</span></span>
<span class="line"><span style="color:#A6ACCD;">  markdown: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // theme: &#39;material-palenight&#39;,//md主题</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineNumbers: true//md 加行号</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  lastUpdated: true,//显示最近更新时间</span></span>
<span class="line"><span style="color:#A6ACCD;">  appearance: true,//可以选择深浅主题</span></span>
<span class="line"><span style="color:#A6ACCD;">  head: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 设置 描述 和 关键词</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;meta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      { name: &quot;keywords&quot;, content: &quot;规范文档&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;meta&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &quot;description&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        content:</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;前端开发规范文档&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // socialLinks: [//右上角图标和链接，icon 可用svg 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   { icon: &#39;github&#39;, link: &#39;&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   { icon: &#39;slack&#39;, link: &#39;&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastUpdatedText: &#39;更新时间&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    siteTitle: &#39;前端规范文档&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nav: [//右侧导航</span></span>
<span class="line"><span style="color:#A6ACCD;">      { text: &#39;项目简介&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { text: &#39;编辑示例&#39;, link: &#39;/example&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 侧边导航</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebar: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &#39;前端代码结构规范&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        collapsible: true,//可折叠的</span></span>
<span class="line"><span style="color:#A6ACCD;">        collapsed: false,//默认是否折叠</span></span>
<span class="line"><span style="color:#A6ACCD;">        items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;总则&#39;, link: &#39;/pages/general-specification/index&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;标记文档规范&#39;, link: &#39;/pages/general-specification/markup-document-specification&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;逻辑脚本文档规范&#39;, link: &#39;/pages/general-specification/logic-script-document-specification&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Vue代码书写规范&#39;, link: &#39;/pages/general-specification/vue-code-writing-specification&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;统一规范&#39;, link: &#39;/pages/general-specification/uniform-specification&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    outlineTitle: &#39;目录&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="右侧新增导航" tabindex="-1">右侧新增导航 <a class="header-anchor" href="#右侧新增导航" aria-label="Permalink to &quot;右侧新增导航&quot;">​</a></h2><ul><li>在<code>nav</code>配置项中，新增一条路由信息，link不需要带后缀</li><li>在对应的文件夹下新增md文件</li><li>在md文件中编辑规范即可</li></ul><h2 id="左侧新增导航" tabindex="-1">左侧新增导航 <a class="header-anchor" href="#左侧新增导航" aria-label="Permalink to &quot;左侧新增导航&quot;">​</a></h2><ul><li>在<code>sidebar</code>配置项中，新增一条路由信息，link不需要带后缀</li><li>在对应的文件夹下新增md文件</li><li>在md文件中编辑规范即可</li></ul>`,8),c=[p];function r(i,o,t,b,C,A){return a(),n("div",null,c)}const d=s(e,[["render",r]]);export{m as __pageData,d as default};
