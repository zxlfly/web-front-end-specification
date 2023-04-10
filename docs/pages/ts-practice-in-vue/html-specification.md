# HTML 规范 （Vue Template 同样适用）
## 1.2.1 HTML 类型
推荐使用 HTML5 的文档类型申明：  
（建议使用 text/html 格式的 HTML。避免使用 XHTML。XHTML 以及它的属性，比如 application/xhtml+xml 在浏览器中的应用支持与优化空间都十分有限）。
- 规定字符编码 
- IE 兼容模式
- 规定字符编码 
- doctype 大写
**正例：**
```
<!DOCTYPE html>
<html lang="zh-cn">
  <head> 
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" /> 
	  <meta charset="UTF-8" /> 
	  <title>Page title</title> 
  </head>
  <body> 
	 <img src="images/company-logo.png" alt="Company">
 </body> 
</html>
```