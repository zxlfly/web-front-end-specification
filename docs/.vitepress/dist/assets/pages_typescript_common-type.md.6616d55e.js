import{_ as s,c as n,o as a,N as l}from"./chunks/framework.74d38e29.js";const A=JSON.parse('{"title":"常见类型","description":"","frontmatter":{},"headers":[],"relativePath":"pages/typescript/common-type.md","lastUpdated":1681118086000}'),e={name:"pages/typescript/common-type.md"},p=l(`<h1 id="常见类型" tabindex="-1">常见类型 <a class="header-anchor" href="#常见类型" aria-label="Permalink to &quot;常见类型&quot;">​</a></h1><h2 id="用得较多的类型就下面7个" tabindex="-1">用得较多的类型就下面7个 <a class="header-anchor" href="#用得较多的类型就下面7个" aria-label="Permalink to &quot;用得较多的类型就下面7个&quot;">​</a></h2><ul><li>布尔 boolean</li><li>数值 number</li><li>字符串 string</li><li>数组 array</li><li>空值 void：表示没有任何返回值的函数</li><li>任意 any：表示不被类型检查</li><li>unknown <ul><li>可以将任何类型的值赋值给unknown</li><li>不可以将unknown赋值给非any类型</li><li>可以理解成是any类型对应的安全类型</li></ul></li></ul><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let isDone: boolean = false;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let arr:number[] = [1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//类型“string”的参数不能赋给类型“number”的参数。</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.push(&#39;1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let arr2:any = [1]</span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置 any 类型，表示不做类型检查，这时错误提示消失。 但是尽量不要使用any，不然就失去了TS的优势</span></span>
<span class="line"><span style="color:#A6ACCD;">arr2.push(&#39;1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let myFavoriteNumber: number = 6;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let myName: string = &#39;zxl&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function alertName(name: string): void {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`My name is \${name}\`);  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface SourceItemObj {</span></span>
<span class="line"><span style="color:#A6ACCD;">  label: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  disabled: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">  [propName: string]: unknown;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultFormatter = (item: string | SourceItemObj) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof item === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return item;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return item !== null ? item.label || item.toString() : &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,5),r=[p];function i(c,o,t,b,m,u){return a(),n("div",null,r)}const y=s(e,[["render",i]]);export{A as __pageData,y as default};
