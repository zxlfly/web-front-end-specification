# 常见布局规范
## 页面尺寸
&emsp;&emsp;现在项目中的页面适配主要考虑两种分辨率：**1920*1080**和**1366*768**。在选择媒体查询和使用栅格系统的时候需要考虑最少兼容到`1200px`。
## 关于样式使用问题
&emsp;&emsp;在项目中，一般建议使用flex布局的方式，非特殊情况不要是用position相关的定位，避免由于不同分辨率尺寸下出现布局错乱的问题。  
&emsp;&emsp;溢出隐藏`overflow:hidden;`属性非必要不要使用，避免由于不同分辨率尺寸下出现被截断的问题。 
