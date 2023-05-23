import{_ as s,c as n,o as a,N as l}from"./chunks/framework.74d38e29.js";const C=JSON.parse('{"title":"类","description":"","frontmatter":{},"headers":[],"relativePath":"pages/typescript/class.md","lastUpdated":1681118086000}'),e={name:"pages/typescript/class.md"},p=l(`<h1 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h1><h2 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-label="Permalink to &quot;关键字&quot;">​</a></h2><ul><li>public <ul><li>公有的----在当前类里面、子类、类外面都可以访问</li><li>实例可以访问</li></ul></li><li>protected <ul><li>保护类型----在当前类里面、子类里面可以访问</li><li>实例不可以访问</li></ul></li><li>private <ul><li>私有----在当前类里面可以访问</li><li>实例不可以访问</li></ul></li><li>readonly <ul><li>只读属性----初始化之后不可以修改</li><li>如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。</li><li>实例可以访问</li></ul></li><li>static <ul><li>静态成员和类的实例没有关系，静态成员、静态方法都绑定在类型本身上。</li><li>静态成员也会继承。</li><li>实例不可以访问</li></ul></li></ul><h2 id="抽象类" tabindex="-1">抽象类 <a class="header-anchor" href="#抽象类" aria-label="Permalink to &quot;抽象类&quot;">​</a></h2><p>抽象类不能实例化，只能继承。<br> 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。<br> 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。<br> 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。<br> abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract class Department {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   constructor(public name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   printName(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;Department name: &#39; + this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   abstract printMeeting(): void; // 必须在派生类中实现</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class AccountingDepartment extends Department {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       super(&#39;Accounting and Auditing&#39;); // 在派生类的构造函数中必须调用 super()</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   printMeeting(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;The Accounting Department meets each Monday at 10am.&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   generateReports(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;Generating accounting reports...&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let department: Department; // 允许创建一个对抽象类型的引用</span></span>
<span class="line"><span style="color:#A6ACCD;">department = new Department(); // 错误: 不能创建一个抽象类的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">department.printName();</span></span>
<span class="line"><span style="color:#A6ACCD;">department.printMeeting();</span></span>
<span class="line"><span style="color:#A6ACCD;">department.generateReports(); // 错误: 方法在声明的抽象类中不存在</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,6),r=[p];function c(i,t,o,b,u,A){return a(),n("div",null,r)}const d=s(e,[["render",c]]);export{C as __pageData,d as default};
