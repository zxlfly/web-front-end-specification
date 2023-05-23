import{_ as s,c as n,o as a,N as e}from"./chunks/framework.74d38e29.js";const C=JSON.parse('{"title":"泛型","description":"","frontmatter":{},"headers":[],"relativePath":"pages/typescript/generics.md","lastUpdated":1681118086000}'),l={name:"pages/typescript/generics.md"},p=e(`<h1 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h1><p>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。<br> 可以简单理解为定义函数时的形参。参数在运行时，根据传入的参数类型决定</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function print&lt;T&gt;(arg: T): T {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arg</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们还可以使用泛型来约束后端接口参数类型。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface API {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;/book/detail&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      id: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;/book/comment&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      id: number</span></span>
<span class="line"><span style="color:#A6ACCD;">      comment: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function request&lt;T extends keyof API&gt;(url: T, obj: API[T]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return axios.post(url, obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">request(&#39;/book/comment&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  comment: &#39;非常棒！&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>url 只能是 API 中定义过的，其他 url 都会提示错误</li><li>接口参数 obj 必须和 url 能对应上，不能少属性，属性类型也不能错</li><li>而且调用 request 方法时，也会提示 url 可以选择哪些</li></ul>`,6),r=[p];function c(i,o,t,b,u,m){return a(),n("div",null,r)}const d=s(l,[["render",c]]);export{C as __pageData,d as default};
