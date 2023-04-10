# 2. 标记文档规范
## 2.1 标签完整性
&emsp;&emsp;编写标签的时候要严格考虑标签的完整性，如封闭标签必须在标签结尾添加标签结束标志。
``` html
<div></div>
<br/>
<p></p>
<input/>
```
## 2.2 使用标签的选择
&emsp;&emsp;使用标签时，根据不同标签的特性选取，如使用时要考虑块级元素和行内元素的特性等
    
## 2.3 标签中属性的约定
1. html标签属性名称大小写不敏感，因此，这里规定必须使用小写命名，若自定义属性名由多个单词或缩写组成，则使用“-”进行连接，如dom-element。
```html 
    <div dom-element="1" val="N/A"></div>
```
2. 标签中id的命名规则，使用下划线“_”连接多个单词，使用小写，如eqm_name_input，最后一个单词为当前标签元素的类型
* **<font color=red>id可以拼接模块的名称，防止简写造成其他文件引用时，在根据id获取元素时获取失败或获取到不正常位置的元素</font>**
```html 
    <div id="material_code_div"></div>
```

3. 标签中class的命名规则，使用“-”连接多个单词，使用小写，如need-check
```html 
    <div class="need-check"></div>
```
4. 标签中其他属性名，默认情况下，原则上使用和class同样的命名方法，除特殊情况外，如直接在标签中绑定事件方法，调用的方法名由驼峰命名等情况
   
## 2.4 注释与格式
&emsp;&emsp;注释中统一使用html标准注释
``` html
<!-- --> 
```
&emsp;&emsp;在两个空间组以及大的框架之间，建议使用一个空行标记，便于后期维护

## 2.5 HTML文档声明
&emsp;&emsp;HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明
```html
<!DOCTYPE html>
```

## 2.6 文件引用
&emsp;&emsp;不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含。
```html
<link rel="stylesheet" href="" >
<script src=""></script>
```

#### 2.7 HTML元素的属性和属性值
##### 2.7.1 属性值使用双引号语法
&emsp;&emsp;元素的属性值使用双引号包裹起来
```html
<input type="text"/>
```
## 2.7.2 属性值写全
```html
<!-- checked="checked" 不要只写一个 checked -->
<input type="radio" name="name" checked="checked" />
```