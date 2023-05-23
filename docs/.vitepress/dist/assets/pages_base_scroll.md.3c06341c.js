import{_ as s,c as n,o as a,N as l}from"./chunks/framework.74d38e29.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/base/scroll.md","lastUpdated":1681442920000}'),p={name:"pages/base/scroll.md"},e=l(`<p>滚动条根据实际情况来,内容多的可以滚动，可以统一滚动条的样式</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 设置滚动条的宽度、高度和背景颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">::-webkit-scrollbar {</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: #f5f5f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* 设置滚动条的滑块样式 */</span></span>
<span class="line"><span style="color:#A6ACCD;">::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: #5bc0de;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-radius: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 2px solid #f5f5f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* 设置滚动条的轨道样式 */</span></span>
<span class="line"><span style="color:#A6ACCD;">::-webkit-scrollbar-track {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: #f5f5f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-radius: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 2px solid #ccc;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,2),r=[e];function c(o,i,t,b,C,A){return a(),n("div",null,r)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
