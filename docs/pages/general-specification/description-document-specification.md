# 4. 描述文档规范

## 4.1 CSS
1. 注释：必须写注释，每种样式对应的DOM类型，实现样式的效果等。必要时，可以在样式语句中加入注释。
2. CSS样式尽可能的复用，并尽量将其写在同一个公共style文件中。在编写新的样式时，注意不要与之前的CSS样式冲突。Class或者属性的命名尽量稍微复杂具体，可以减少样式冲突的情况的发生。
3. 谨慎使用 !important标记，如果不必要，请不要使用。同样的，对于利用不同类型选择器的优先级进行样式编程的方式，也尽量不使用。会导致原有样式的开发者在维护的时候匪夷所思。
4. 样式的编写中，每个样式属性后面的“：”和对应的值之间的用空格隔开。
    ``` css
    /* 样式编写规范样例 */
    .btn {
        background-color: #000;
    }
    ```
5. 去掉小数点前的“0”
    ```css
    div {
        background-color: rgba(255, 255, 255, .5);
    }
    ```
6. 表示宽度等的样式设置，如果设置为0，去掉其后的 ‘px’
    ```css
    /* padding-left : 0px;    应该省略其后的 ‘px’ */
    div {
        padding: 0;
        margin: 0;
    }
   ```
7. css属性值需要用到引号时，统一使用单引号, 每个属性声明末尾都加分号。
    ```css
    span { 
        font-family: 'Hiragino Sans GB';
    }
    ````

## 4.2 Sass/Scss
1. 选择器尽量精确，对有层级嵌套关系的元素选择，使用sass的子选择器的特有写法，明确显示层级关系结构。避免在同样的结构中使用多种不同的class
2. 完善注释。对于任何选择器，都需要进行注释描述，其用途、出现位置、什么情况下触发、动效以及展现的样式要求等。
3. 尽量保证样式代码的复用，对于统一的规范、颜色、动效中使用的数值、字符等变量，我们通过统一的位置进行存放（WebSrc/modu-custom-styles/）。对于框架级别的样式文件，也同样存放在此目录中
4. 注意样式优先级，通常我们建议使用class作为样式选择器的优先方式。注意样式组合与嵌套带来的样式优先级的影响。
5. 其他基本样式通用写法，参考CSS的书写规则
6. Sass/Scss中的变量、函数、混合、占位符等均使用小写以中划线分隔
```scss
$dropdown-color: #333;

@mixin border-radius {
  border-raduis: 50%;
}

@mixin icon($x:0, $y:0) {
  background: url(/img/icon.png) no-repeat $x, $y;
}
```

## 4.3 属性书写顺序
* 布局定位属性：display / position / float / clear / visibility / overflow
* 自身属性：width / height / margin / padding / border / background
* 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
* 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```css
div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: none;
    /* width: 200px; */
    /* height: 300px; */
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: #000;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 1px;
}
```

## 4.4 CSS3 浏览器私有前缀(考虑其他浏览器兼容，非必须不使用私有)

- CSS3 浏览器私有前缀在前，标准前缀在后。

``` css
.jdc {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```