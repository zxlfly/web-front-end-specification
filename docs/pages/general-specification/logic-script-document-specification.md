# 3. 逻辑脚本文档规范

## 3.1 通则
1. 开发使用的主要逻辑脚本语言为TypeScript
2. 对于新开发的逻辑功能，必须使用TypeScript脚本进行编写


## 3.2 文件头
对于文件头，将按照以下规则进行编写
``` typescript
/**
  * Title :
  * Desc :
  * Copyright: 
  * version : 1.0
  * History : 
*/
```

## 3.3 注释

- 注释的目的

****提高代码的可读性，从而提高代码的可维护性****

- 注释的原则

 ****如无必要，勿增注释 ( As short as possible )****

 ****如有必要，尽量详尽 ( As long as necessary )****

### 3.3.1 单行注释  
&emsp;&emsp;用于对常量、变量的解释和说明。

### 3.3.2 多行注释
&emsp;&emsp;用于对函数、类等复杂代码块的解释和说明

### 3.3.3 行尾注释
&emsp;&emsp;针对于枚举、JSON结构、数组或者连续的变量赋值和声明时，为保证代码块的美观和整洁而使用。

### 3.3.4 函数注释
&emsp;&emsp;函数注释遵循以下示例,参考JSdoc注释
``` typescript
/**
*@name 测试方法
*@description 用于描述
*@param {number}aId 某id
*@returns {string}
*/
```
| 项目         | 说明                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------ |
| @name        | 方法名称（中文含义）                                                                             |
| @description | 方法功能描述（100字以内），要描述方法建立的思路、方法功能以及如何使用                            |
| @param       | 参数，描述包括参数名和参数类型，需要用中文释义                                                   |
| @returns     | 函数返回值，标记清除返回值的类型。必要时用中文释义                                               |
| @private     | 只在类的属性方法中有此注释项，表示当前属性方法的类型                                             |
| @author      | 作者。若当前方法的作者与当前文档的作者相同，则可忽略此项。但如果不是当前文档的作者，务必加上此项 |

### 3.3.5 类注释
类注释可使用单行或多行注释，保证释意明确即可

## 3.4 命名
&emsp;&emsp;命名规范要简洁、明确。尽量用最简短的词汇组合成最明确的释义。杜绝在除循环逻辑中的index标记中以外使用单个字母命名的情况，不可使用没有实际语意的字母组合作为名称。除了约定中的单词缩写以外，不可使用其他单词缩写。  

- 常见的，命名规范有：小驼峰、大驼峰、短横线、下划线
  - camelCase（小驼峰式命名法 —— 首字母小写）
  - PascalCase（大驼峰式命名法 —— 首字母大写）
  - kebab-case（短横线连接式）

| 缩写 | 原单词               |
| ---- | -------------------- |
| INFO | Infomation           |
| i18n | Internationalization |

### 3.4.1 文件命名
&emsp;&emsp;采用以“-”连接单词的形式，如：
```
data-permission-center.ts   
number-manager.ts  
number-input.tsx  
```
&emsp;&emsp;对于特殊应用的，如非参与编译的编译指导脚本文件，在文件名前面添加下划线以示区分，如：  
``` 
__gulpfile.js  
```
&emsp;&emsp;其中单词必须使用小写，缩写单词也使用小写形式，但尽量避免使用缩写单词。  
&emsp;&emsp;文件名称要对应所在路径下的目录模块名称。
如audit-trail目录下，主文件的名称为audit-trail-index.ts或者audit-trail.ts  
```
audit-trail
|--audit-trail-index.ts
|--audit-trail.ts  
```

### 3.4.2 变量命名
* 命名方法：camelCase  
* 命名规范：类型 + 对象描述或属性的方式
* 使用let 声明变量，**<font color=red>禁止使用var</font>**。

```ts
let riskReleaseFlag = true;
let materialCode = '';
let symbolDom = document.getElementById('mat_piece_symbol');
```

### 3.4.3 常量命名
* 命名方法：MATERIAL_MANAGEMENT_HTML&emsp;MAX_PAGE&emsp;MIN_PAGE
* 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词
* 使用const 声明常量
```ts
const MATERIAL_MANAGEMENT_HTML = './management-index.html';
const MAX_PAGE = 20;
```

### 3.4.5 方法命名
* 命名方法：camelCase&emsp;createMaterialCode&emsp;showPage&emsp;initPage&emsp;getMatCodeById&emsp;getMatINFO
* 命名规范：统一使用动词或者动词 + 名词形式
* 增删改查，详情统一使用&emsp;add、delete、update、get、detail &emsp;
```ts
function createMaterialCode() { };
function showPage() { };
function initPage() { };
function getMatCodeById() { };
function getMatINFO() { };
```

| 动词   | 含义                         | 返回值                                                  |
| :----- | :--------------------------- | :------------------------------------------------------ |
| can    | 判断是否可执行某个动作 (权 ) | 函数返回一个布尔值。true：可执行；false：不可执行；     |
| has    | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值   |
| is     | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值； |
| set    | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象              |
| get    | 获取某个值/查询操作          | 函数返回一个值                                          |
| add    | 新增操作                     | 函数操作成功：返回新增后的数据；操作失败：返回null;     |
| delete | 删除操作                     | 函数返回一个布尔值,true：删除成功；false：删除失败      |
| update | 修改操作                     | 函数操作成功：返回修改后的数据; 操作失败：返回null;     |
| detail | 查看数据详情                 | 函数操作成功：返回查询到的数据详情; 操作失败：返回null  |

* 函数方法常用的动词和含义(102个)

| 动词     | 含义 | 动词        | 含义   |       | 动词   | 含义 | 动词     | 含义 |
| :------- | :--- | :---------- | :----- | :---: | :----- | :--- | :------- | :--- |
| find     | 查找 | search      | 搜索   |  \|   | get    | 获取 | set      | 设置 |
| increase | 增加 | decrease    | 减少   |  \|   | add    | 增加 | remove   | 删除 |
| play     | 播放 | pause       | 暂停   |  \|   | create | 创建 | destory  | 移除 |
| launch   | 启动 | run         | 运行   |  \|   | start  | 启动 | stop     | 停止 |
| compile  | 编译 | execute     | 执行   |  \|   | open   | 打开 | close    | 关闭 |
| debug    | 调试 | trace       | 跟踪   |  \|   | read   | 读取 | write    | 写入 |
| observe  | 观察 | listen      | 监听   |  \|   | load   | 载入 | save     | 保存 |
| build    | 构建 | publish     | 发布   |  \|   | begin  | 开始 | end      | 结束 |
| input    | 输入 | output      | 输出   |  \|   | backup | 备份 | restore  | 恢复 |
| encode   | 编码 | decode      | 解码   |  \|   | import | 导入 | export   | 导出 |
| encrypt  | 加密 | decrypt     | 解密   |  \|   | split  | 分割 | merge    | 合并 |
| compress | 压缩 | decompress  | 解压缩 |  \|   | inject | 注入 | extract  | 提取 |
| pack     | 打包 | unpack      | 解包   |  \|   | attach | 附着 | detach   | 脱离 |
| parse    | 解析 | emit        | 生成   |  \|   | bind   | 绑定 | separate | 分离 |
| connect  | 连接 | disconnect  | 断开   |  \|   | view   | 查看 | browse   | 浏览 |
| send     | 发送 | receive     | 接收   |  \|   | edit   | 编辑 | modify   | 修改 |
| download | 下载 | upload      | 上传   |  \|   | select | 选取 | mark     | 标记 |
| refresh  | 刷新 | synchronize | 同步   |  \|   | copy   | 复制 | paste    | 粘贴 |
| update   | 更新 | revert      | 复原   |  \|   | undo   | 撤销 | redo     | 重做 |
| lock     | 锁定 | unlock      | 解锁   |  \|   | insert | 插入 | delete   | 移除 |
| checkOut | 签出 | checkIn     | 签入   |  \|   | clean  | 清理 | clear    | 清除 |
| submit   | 提交 | commit      | 交付   |  \|   | index  | 索引 | sort     | 排序 |
| enter    | 进入 | exit        | 退出   |  \|   | push   | 推   | pull     | 拉   |
| abort    | 放弃 | quit        | 离开   |  \|   | expand | 展开 | collapse | 折叠 |
| obsolete | 废弃 | depreciate  | 废旧   |  \|   | start  | 开始 | finish   | 完成 |
| collect  | 收集 | aggregate   | 聚集   |

### 3.4.6 类名命名
- 以大写字母开头的单词组成的名词短语，如 export class BomAuditTrailImpl，其中，实现类要使用Impl做结尾，接口类要用Interface结尾
```ts
class BomAuditTrailInterface{
}
export class BomAuditTrailImpl implements BomAuditTrailInterface{
}
```

## 3.5 类型与约束
### 3.5.1 约束写法
   - 每一个约束在头部写使用 /** XXX */ 注释约束的使用说明，在约束的内部，每一个参数同样都使用/**  XXX */注释参数的解释说明。最后一个参数也要写上“,”（逗号）。
```ts
/** axios请求的参数 */
interface axiosInterface{
    /** 请求的方法 get、post */
    methods: string,
}
```

### 3.5.2.固定类型参数
 - 对于固定类型的参数值可以使用 enum，最后一个参数也要写上“，”（逗号）。
```ts
/** 版本状态 */
enum statusIdEnum{
  /** 编辑 */
  edit = 1,
  /** 确定 */
  confirm = 2,
  /** 生效 */
  takeEffect = 3,
  /** 失效 */
  loseEfficacy = 4,
}
```

### 3.5.3 在参数中使用约束
- 务必保证函数参数的类型明确，对每个参数使用约束。如果参数的数量超过2个，建议考虑使用对象作为参数，并使用接口进行约束。参数的数量不要超过10个
```ts
function getQueryData(params:axiosInterface):axiosInterface{
    return params;
}
```

## 3.6 字符串使用（ '' 或 ``）
* 使用单引号('')创建html字符串的时候比较省事
* 使用模板字符串(``)创建字符串，告别使用大量+来连接字符串，可以创建多行的字符串。
* **<font color=red>禁止模板字符串创建的HTML进行数据的拼接</font>**
```ts
let userName = '张三';
// 错误
let errorHtmlStr = `<div>${userName}</div>`;

// 正确1 原生js
let divDom = document.createElement('div');
divDom.innerText = userName;

// 正确2 jQuery
$('<div></div>').text(userName);
```

## 3.7 **<font color=red>禁止使用保留字</font>**
常见的保留字有：  
abstract、double、goto、native、static、boolean、enum、implements、package、super、byte、char、class、const、public 


## 3.8 **<font color=red>不允许出现未被使用的变量和无意义的方法</font>**
```ts
const A = 1;  
const B = 2;  
const C = 3; // 没有用到 C 请把这行代码删除。  
function dFn() {}; // 无意义的 dFn 方法，请把这行代码删除。  

function sum(a, b) {return a + b;};
sum(A,B);

```