import{_ as p,c as o,x as t,a as s,C as e,z as a,N as n,D as i,o as r}from"./chunks/framework.74d38e29.js";const I=JSON.parse('{"title":"3. 逻辑脚本文档规范","description":"","frontmatter":{},"headers":[],"relativePath":"pages/general-specification/logic-script-document-specification.md","lastUpdated":1681118086000}'),d={name:"pages/general-specification/logic-script-document-specification.md"},c=n(`<h1 id="_3-逻辑脚本文档规范" tabindex="-1">3. 逻辑脚本文档规范 <a class="header-anchor" href="#_3-逻辑脚本文档规范" aria-label="Permalink to &quot;3. 逻辑脚本文档规范&quot;">​</a></h1><h2 id="_3-1-通则" tabindex="-1">3.1 通则 <a class="header-anchor" href="#_3-1-通则" aria-label="Permalink to &quot;3.1 通则&quot;">​</a></h2><ol><li>开发使用的主要逻辑脚本语言为TypeScript</li><li>对于新开发的逻辑功能，必须使用TypeScript脚本进行编写</li></ol><h2 id="_3-2-文件头" tabindex="-1">3.2 文件头 <a class="header-anchor" href="#_3-2-文件头" aria-label="Permalink to &quot;3.2 文件头&quot;">​</a></h2><p>对于文件头，将按照以下规则进行编写</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  * Title :</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  * Desc :</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  * Copyright: </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  * version : 1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  * History : </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-3-注释" tabindex="-1">3.3 注释 <a class="header-anchor" href="#_3-3-注释" aria-label="Permalink to &quot;3.3 注释&quot;">​</a></h2><ul><li>注释的目的</li></ul><p><strong><strong>提高代码的可读性，从而提高代码的可维护性</strong></strong></p><ul><li>注释的原则</li></ul><p><strong><strong>如无必要，勿增注释 ( As short as possible )</strong></strong></p><p><strong><strong>如有必要，尽量详尽 ( As long as necessary )</strong></strong></p><h3 id="_3-3-1-单行注释" tabindex="-1">3.3.1 单行注释 <a class="header-anchor" href="#_3-3-1-单行注释" aria-label="Permalink to &quot;3.3.1 单行注释&quot;">​</a></h3><p>  用于对常量、变量的解释和说明。</p><h3 id="_3-3-2-多行注释" tabindex="-1">3.3.2 多行注释 <a class="header-anchor" href="#_3-3-2-多行注释" aria-label="Permalink to &quot;3.3.2 多行注释&quot;">​</a></h3><p>  用于对函数、类等复杂代码块的解释和说明</p><h3 id="_3-3-3-行尾注释" tabindex="-1">3.3.3 行尾注释 <a class="header-anchor" href="#_3-3-3-行尾注释" aria-label="Permalink to &quot;3.3.3 行尾注释&quot;">​</a></h3><p>  针对于枚举、JSON结构、数组或者连续的变量赋值和声明时，为保证代码块的美观和整洁而使用。</p><h3 id="_3-3-4-函数注释" tabindex="-1">3.3.4 函数注释 <a class="header-anchor" href="#_3-3-4-函数注释" aria-label="Permalink to &quot;3.3.4 函数注释&quot;">​</a></h3><p>  函数注释遵循以下示例,参考JSdoc注释</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">name</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">测试方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">description</span><span style="color:#676E95;font-style:italic;"> 用于描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#A6ACCD;font-style:italic;">aId</span><span style="color:#676E95;font-style:italic;"> 某id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>项目</th><th>说明</th></tr></thead><tbody><tr><td>@name</td><td>方法名称（中文含义）</td></tr><tr><td>@description</td><td>方法功能描述（100字以内），要描述方法建立的思路、方法功能以及如何使用</td></tr><tr><td>@param</td><td>参数，描述包括参数名和参数类型，需要用中文释义</td></tr><tr><td>@returns</td><td>函数返回值，标记清除返回值的类型。必要时用中文释义</td></tr><tr><td>@private</td><td>只在类的属性方法中有此注释项，表示当前属性方法的类型</td></tr><tr><td>@author</td><td>作者。若当前方法的作者与当前文档的作者相同，则可忽略此项。但如果不是当前文档的作者，务必加上此项</td></tr></tbody></table><h3 id="_3-3-5-类注释" tabindex="-1">3.3.5 类注释 <a class="header-anchor" href="#_3-3-5-类注释" aria-label="Permalink to &quot;3.3.5 类注释&quot;">​</a></h3><p>类注释可使用单行或多行注释，保证释意明确即可</p><h2 id="_3-4-命名" tabindex="-1">3.4 命名 <a class="header-anchor" href="#_3-4-命名" aria-label="Permalink to &quot;3.4 命名&quot;">​</a></h2><p>  命名规范要简洁、明确。尽量用最简短的词汇组合成最明确的释义。杜绝在除循环逻辑中的index标记中以外使用单个字母命名的情况，不可使用没有实际语意的字母组合作为名称。除了约定中的单词缩写以外，不可使用其他单词缩写。</p><ul><li>常见的，命名规范有：小驼峰、大驼峰、短横线、下划线 <ul><li>camelCase（小驼峰式命名法 —— 首字母小写）</li><li>PascalCase（大驼峰式命名法 —— 首字母大写）</li><li>kebab-case（短横线连接式）</li></ul></li></ul><table><thead><tr><th>缩写</th><th>原单词</th></tr></thead><tbody><tr><td>INFO</td><td>Infomation</td></tr><tr><td>i18n</td><td>Internationalization</td></tr></tbody></table><h3 id="_3-4-1-文件命名" tabindex="-1">3.4.1 文件命名 <a class="header-anchor" href="#_3-4-1-文件命名" aria-label="Permalink to &quot;3.4.1 文件命名&quot;">​</a></h3><p>  采用以“-”连接单词的形式，如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">data-permission-center.ts   </span></span>
<span class="line"><span style="color:#A6ACCD;">number-manager.ts  </span></span>
<span class="line"><span style="color:#A6ACCD;">number-input.tsx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>  对于特殊应用的，如非参与编译的编译指导脚本文件，在文件名前面添加下划线以示区分，如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">__gulpfile.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>  其中单词必须使用小写，缩写单词也使用小写形式，但尽量避免使用缩写单词。<br>   文件名称要对应所在路径下的目录模块名称。 如audit-trail目录下，主文件的名称为audit-trail-index.ts或者audit-trail.ts</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">audit-trail</span></span>
<span class="line"><span style="color:#A6ACCD;">|--audit-trail-index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|--audit-trail.ts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-4-2-变量命名" tabindex="-1">3.4.2 变量命名 <a class="header-anchor" href="#_3-4-2-变量命名" aria-label="Permalink to &quot;3.4.2 变量命名&quot;">​</a></h3>`,36),y=t("li",null,"命名方法：camelCase",-1),g=t("li",null,"命名规范：类型 + 对象描述或属性的方式",-1),f=n(`<div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> riskReleaseFlag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> materialCode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> symbolDom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mat_piece_symbol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-4-3-常量命名" tabindex="-1">3.4.3 常量命名 <a class="header-anchor" href="#_3-4-3-常量命名" aria-label="Permalink to &quot;3.4.3 常量命名&quot;">​</a></h3><ul><li>命名方法：MATERIAL_MANAGEMENT_HTML MAX_PAGE MIN_PAGE</li><li>命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词</li><li>使用const 声明常量</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MATERIAL_MANAGEMENT_HTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./management-index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MAX_PAGE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-4-5-方法命名" tabindex="-1">3.4.5 方法命名 <a class="header-anchor" href="#_3-4-5-方法命名" aria-label="Permalink to &quot;3.4.5 方法命名&quot;">​</a></h3><ul><li>命名方法：camelCase createMaterialCode showPage initPage getMatCodeById getMatINFO</li><li>命名规范：统一使用动词或者动词 + 名词形式</li><li>增删改查，详情统一使用 add、delete、update、get、detail  </li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createMaterialCode</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">showPage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initPage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMatCodeById</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMatINFO</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th style="text-align:left;">动词</th><th style="text-align:left;">含义</th><th style="text-align:left;">返回值</th></tr></thead><tbody><tr><td style="text-align:left;">can</td><td style="text-align:left;">判断是否可执行某个动作 (权 )</td><td style="text-align:left;">函数返回一个布尔值。true：可执行；false：不可执行；</td></tr><tr><td style="text-align:left;">has</td><td style="text-align:left;">判断是否含有某个值</td><td style="text-align:left;">函数返回一个布尔值。true：含有此值；false：不含有此值</td></tr><tr><td style="text-align:left;">is</td><td style="text-align:left;">判断是否为某个值</td><td style="text-align:left;">函数返回一个布尔值。true：为某个值；false：不为某个值；</td></tr><tr><td style="text-align:left;">set</td><td style="text-align:left;">设置某个值</td><td style="text-align:left;">无返回值、返回是否设置成功或者返回链式对象</td></tr><tr><td style="text-align:left;">get</td><td style="text-align:left;">获取某个值/查询操作</td><td style="text-align:left;">函数返回一个值</td></tr><tr><td style="text-align:left;">add</td><td style="text-align:left;">新增操作</td><td style="text-align:left;">函数操作成功：返回新增后的数据；操作失败：返回null;</td></tr><tr><td style="text-align:left;">delete</td><td style="text-align:left;">删除操作</td><td style="text-align:left;">函数返回一个布尔值,true：删除成功；false：删除失败</td></tr><tr><td style="text-align:left;">update</td><td style="text-align:left;">修改操作</td><td style="text-align:left;">函数操作成功：返回修改后的数据; 操作失败：返回null;</td></tr><tr><td style="text-align:left;">detail</td><td style="text-align:left;">查看数据详情</td><td style="text-align:left;">函数操作成功：返回查询到的数据详情; 操作失败：返回null</td></tr></tbody></table><ul><li>函数方法常用的动词和含义(102个)</li></ul><table><thead><tr><th style="text-align:left;">动词</th><th style="text-align:left;">含义</th><th style="text-align:left;">动词</th><th style="text-align:left;">含义</th><th style="text-align:center;"></th><th style="text-align:left;">动词</th><th style="text-align:left;">含义</th><th style="text-align:left;">动词</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">find</td><td style="text-align:left;">查找</td><td style="text-align:left;">search</td><td style="text-align:left;">搜索</td><td style="text-align:center;">|</td><td style="text-align:left;">get</td><td style="text-align:left;">获取</td><td style="text-align:left;">set</td><td style="text-align:left;">设置</td></tr><tr><td style="text-align:left;">increase</td><td style="text-align:left;">增加</td><td style="text-align:left;">decrease</td><td style="text-align:left;">减少</td><td style="text-align:center;">|</td><td style="text-align:left;">add</td><td style="text-align:left;">增加</td><td style="text-align:left;">remove</td><td style="text-align:left;">删除</td></tr><tr><td style="text-align:left;">play</td><td style="text-align:left;">播放</td><td style="text-align:left;">pause</td><td style="text-align:left;">暂停</td><td style="text-align:center;">|</td><td style="text-align:left;">create</td><td style="text-align:left;">创建</td><td style="text-align:left;">destory</td><td style="text-align:left;">移除</td></tr><tr><td style="text-align:left;">launch</td><td style="text-align:left;">启动</td><td style="text-align:left;">run</td><td style="text-align:left;">运行</td><td style="text-align:center;">|</td><td style="text-align:left;">start</td><td style="text-align:left;">启动</td><td style="text-align:left;">stop</td><td style="text-align:left;">停止</td></tr><tr><td style="text-align:left;">compile</td><td style="text-align:left;">编译</td><td style="text-align:left;">execute</td><td style="text-align:left;">执行</td><td style="text-align:center;">|</td><td style="text-align:left;">open</td><td style="text-align:left;">打开</td><td style="text-align:left;">close</td><td style="text-align:left;">关闭</td></tr><tr><td style="text-align:left;">debug</td><td style="text-align:left;">调试</td><td style="text-align:left;">trace</td><td style="text-align:left;">跟踪</td><td style="text-align:center;">|</td><td style="text-align:left;">read</td><td style="text-align:left;">读取</td><td style="text-align:left;">write</td><td style="text-align:left;">写入</td></tr><tr><td style="text-align:left;">observe</td><td style="text-align:left;">观察</td><td style="text-align:left;">listen</td><td style="text-align:left;">监听</td><td style="text-align:center;">|</td><td style="text-align:left;">load</td><td style="text-align:left;">载入</td><td style="text-align:left;">save</td><td style="text-align:left;">保存</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:left;">构建</td><td style="text-align:left;">publish</td><td style="text-align:left;">发布</td><td style="text-align:center;">|</td><td style="text-align:left;">begin</td><td style="text-align:left;">开始</td><td style="text-align:left;">end</td><td style="text-align:left;">结束</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;">输入</td><td style="text-align:left;">output</td><td style="text-align:left;">输出</td><td style="text-align:center;">|</td><td style="text-align:left;">backup</td><td style="text-align:left;">备份</td><td style="text-align:left;">restore</td><td style="text-align:left;">恢复</td></tr><tr><td style="text-align:left;">encode</td><td style="text-align:left;">编码</td><td style="text-align:left;">decode</td><td style="text-align:left;">解码</td><td style="text-align:center;">|</td><td style="text-align:left;">import</td><td style="text-align:left;">导入</td><td style="text-align:left;">export</td><td style="text-align:left;">导出</td></tr><tr><td style="text-align:left;">encrypt</td><td style="text-align:left;">加密</td><td style="text-align:left;">decrypt</td><td style="text-align:left;">解密</td><td style="text-align:center;">|</td><td style="text-align:left;">split</td><td style="text-align:left;">分割</td><td style="text-align:left;">merge</td><td style="text-align:left;">合并</td></tr><tr><td style="text-align:left;">compress</td><td style="text-align:left;">压缩</td><td style="text-align:left;">decompress</td><td style="text-align:left;">解压缩</td><td style="text-align:center;">|</td><td style="text-align:left;">inject</td><td style="text-align:left;">注入</td><td style="text-align:left;">extract</td><td style="text-align:left;">提取</td></tr><tr><td style="text-align:left;">pack</td><td style="text-align:left;">打包</td><td style="text-align:left;">unpack</td><td style="text-align:left;">解包</td><td style="text-align:center;">|</td><td style="text-align:left;">attach</td><td style="text-align:left;">附着</td><td style="text-align:left;">detach</td><td style="text-align:left;">脱离</td></tr><tr><td style="text-align:left;">parse</td><td style="text-align:left;">解析</td><td style="text-align:left;">emit</td><td style="text-align:left;">生成</td><td style="text-align:center;">|</td><td style="text-align:left;">bind</td><td style="text-align:left;">绑定</td><td style="text-align:left;">separate</td><td style="text-align:left;">分离</td></tr><tr><td style="text-align:left;">connect</td><td style="text-align:left;">连接</td><td style="text-align:left;">disconnect</td><td style="text-align:left;">断开</td><td style="text-align:center;">|</td><td style="text-align:left;">view</td><td style="text-align:left;">查看</td><td style="text-align:left;">browse</td><td style="text-align:left;">浏览</td></tr><tr><td style="text-align:left;">send</td><td style="text-align:left;">发送</td><td style="text-align:left;">receive</td><td style="text-align:left;">接收</td><td style="text-align:center;">|</td><td style="text-align:left;">edit</td><td style="text-align:left;">编辑</td><td style="text-align:left;">modify</td><td style="text-align:left;">修改</td></tr><tr><td style="text-align:left;">download</td><td style="text-align:left;">下载</td><td style="text-align:left;">upload</td><td style="text-align:left;">上传</td><td style="text-align:center;">|</td><td style="text-align:left;">select</td><td style="text-align:left;">选取</td><td style="text-align:left;">mark</td><td style="text-align:left;">标记</td></tr><tr><td style="text-align:left;">refresh</td><td style="text-align:left;">刷新</td><td style="text-align:left;">synchronize</td><td style="text-align:left;">同步</td><td style="text-align:center;">|</td><td style="text-align:left;">copy</td><td style="text-align:left;">复制</td><td style="text-align:left;">paste</td><td style="text-align:left;">粘贴</td></tr><tr><td style="text-align:left;">update</td><td style="text-align:left;">更新</td><td style="text-align:left;">revert</td><td style="text-align:left;">复原</td><td style="text-align:center;">|</td><td style="text-align:left;">undo</td><td style="text-align:left;">撤销</td><td style="text-align:left;">redo</td><td style="text-align:left;">重做</td></tr><tr><td style="text-align:left;">lock</td><td style="text-align:left;">锁定</td><td style="text-align:left;">unlock</td><td style="text-align:left;">解锁</td><td style="text-align:center;">|</td><td style="text-align:left;">insert</td><td style="text-align:left;">插入</td><td style="text-align:left;">delete</td><td style="text-align:left;">移除</td></tr><tr><td style="text-align:left;">checkOut</td><td style="text-align:left;">签出</td><td style="text-align:left;">checkIn</td><td style="text-align:left;">签入</td><td style="text-align:center;">|</td><td style="text-align:left;">clean</td><td style="text-align:left;">清理</td><td style="text-align:left;">clear</td><td style="text-align:left;">清除</td></tr><tr><td style="text-align:left;">submit</td><td style="text-align:left;">提交</td><td style="text-align:left;">commit</td><td style="text-align:left;">交付</td><td style="text-align:center;">|</td><td style="text-align:left;">index</td><td style="text-align:left;">索引</td><td style="text-align:left;">sort</td><td style="text-align:left;">排序</td></tr><tr><td style="text-align:left;">enter</td><td style="text-align:left;">进入</td><td style="text-align:left;">exit</td><td style="text-align:left;">退出</td><td style="text-align:center;">|</td><td style="text-align:left;">push</td><td style="text-align:left;">推</td><td style="text-align:left;">pull</td><td style="text-align:left;">拉</td></tr><tr><td style="text-align:left;">abort</td><td style="text-align:left;">放弃</td><td style="text-align:left;">quit</td><td style="text-align:left;">离开</td><td style="text-align:center;">|</td><td style="text-align:left;">expand</td><td style="text-align:left;">展开</td><td style="text-align:left;">collapse</td><td style="text-align:left;">折叠</td></tr><tr><td style="text-align:left;">obsolete</td><td style="text-align:left;">废弃</td><td style="text-align:left;">depreciate</td><td style="text-align:left;">废旧</td><td style="text-align:center;">|</td><td style="text-align:left;">start</td><td style="text-align:left;">开始</td><td style="text-align:left;">finish</td><td style="text-align:left;">完成</td></tr><tr><td style="text-align:left;">collect</td><td style="text-align:left;">收集</td><td style="text-align:left;">aggregate</td><td style="text-align:left;">聚集</td><td style="text-align:center;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="_3-4-6-类名命名" tabindex="-1">3.4.6 类名命名 <a class="header-anchor" href="#_3-4-6-类名命名" aria-label="Permalink to &quot;3.4.6 类名命名&quot;">​</a></h3><ul><li>以大写字母开头的单词组成的名词短语，如 export class BomAuditTrailImpl，其中，实现类要使用Impl做结尾，接口类要用Interface结尾</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BomAuditTrailInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BomAuditTrailImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BomAuditTrailInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-5-类型与约束" tabindex="-1">3.5 类型与约束 <a class="header-anchor" href="#_3-5-类型与约束" aria-label="Permalink to &quot;3.5 类型与约束&quot;">​</a></h2><h3 id="_3-5-1-约束写法" tabindex="-1">3.5.1 约束写法 <a class="header-anchor" href="#_3-5-1-约束写法" aria-label="Permalink to &quot;3.5.1 约束写法&quot;">​</a></h3><ul><li>每一个约束在头部写使用 /** XXX <em>/ 注释约束的使用说明，在约束的内部，每一个参数同样都使用/</em>* XXX */注释参数的解释说明。最后一个参数也要写上“,”（逗号）。</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** axios请求的参数 */</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">axiosInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/** 请求的方法 get、post */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-5-2-固定类型参数" tabindex="-1">3.5.2.固定类型参数 <a class="header-anchor" href="#_3-5-2-固定类型参数" aria-label="Permalink to &quot;3.5.2.固定类型参数&quot;">​</a></h3><ul><li>对于固定类型的参数值可以使用 enum，最后一个参数也要写上“，”（逗号）。</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 版本状态 */</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">statusIdEnum</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** 编辑 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  edit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** 确定 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  confirm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** 生效 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  takeEffect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** 失效 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  loseEfficacy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_3-5-3-在参数中使用约束" tabindex="-1">3.5.3 在参数中使用约束 <a class="header-anchor" href="#_3-5-3-在参数中使用约束" aria-label="Permalink to &quot;3.5.3 在参数中使用约束&quot;">​</a></h3><ul><li>务必保证函数参数的类型明确，对每个参数使用约束。如果参数的数量超过2个，建议考虑使用对象作为参数，并使用接口进行约束。参数的数量不要超过10个</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQueryData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">axiosInterface</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">axiosInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-6-字符串使用-或" tabindex="-1">3.6 字符串使用（ &#39;&#39; 或 \`\`） <a class="header-anchor" href="#_3-6-字符串使用-或" aria-label="Permalink to &quot;3.6 字符串使用（ &#39;&#39; 或 \`\`）&quot;">​</a></h2>`,24),u=t("li",null,"使用单引号('')创建html字符串的时候比较省事",-1),x=t("li",null,"使用模板字符串(``)创建字符串，告别使用大量+来连接字符串，可以创建多行的字符串。",-1),D=n(`<div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> userName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 错误</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> errorHtmlStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;div&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">userName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正确1 原生js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> divDom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">divDom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> userName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正确2 jQuery</span></span>
<span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">text</span><span style="color:#A6ACCD;">(userName)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1),C={id:"_3-7-禁止使用保留字",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_3-7-禁止使用保留字","aria-label":'Permalink to "3.7 **<font color=red>禁止使用保留字</font>**"'},"​",-1),F=t("p",null,[s("常见的保留字有："),t("br"),s(" abstract、double、goto、native、static、boolean、enum、implements、package、super、byte、char、class、const、public")],-1),A={id:"_3-8-不允许出现未被使用的变量和无意义的方法",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_3-8-不允许出现未被使用的变量和无意义的方法","aria-label":'Permalink to "3.8 **<font color=red>不允许出现未被使用的变量和无意义的方法</font>**"'},"​",-1),h=n(`<div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> A </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> B </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> C </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 没有用到 C 请把这行代码删除。  </span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 无意义的 dFn 方法，请把这行代码删除。  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;};</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(A</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">B)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1);function _(E,v,k,q,T,P){const l=i("font");return r(),o("div",null,[c,t("ul",null,[y,g,t("li",null,[s("使用let 声明变量，"),t("strong",null,[e(l,{color:"red"},{default:a(()=>[s("禁止使用var")]),_:1})]),s("。")])]),f,t("ul",null,[u,x,t("li",null,[t("strong",null,[e(l,{color:"red"},{default:a(()=>[s("禁止模板字符串创建的HTML进行数据的拼接")]),_:1})])])]),D,t("h2",C,[s("3.7 "),t("strong",null,[e(l,{color:"red"},{default:a(()=>[s("禁止使用保留字")]),_:1})]),s(),b]),F,t("h2",A,[s("3.8 "),t("strong",null,[e(l,{color:"red"},{default:a(()=>[s("不允许出现未被使用的变量和无意义的方法")]),_:1})]),s(),m]),h])}const N=p(d,[["render",_]]);export{I as __pageData,N as default};
