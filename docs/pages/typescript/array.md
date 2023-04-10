# 数组
## 数组类型有两种表示方式：
- 类型 + 方括号 表示法
- 泛型 表示法
```
// `类型 + 方括号` 表示法
let fibonacci: number[] = [1, 1, 2, 3, 5]

// 泛型表示法
let fibonacci: Array<number> = [1, 1, 2, 3, 5]
```
## 如果是类数组，则不可以用数组的方式定义类型，因为它不是真的数组，需要用 interface 进行定义
```

interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

function sum() {
  let args: IArguments = arguments
}
```
IArguments 类型已在 TypeScript 中内置，类似的还有很多：
```
let body: HTMLElement = document.body;

let allDiv: NodeList = document.querySelectorAll('div');

document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```
## 如果数组里的元素类型并不都是相同的怎么办呢？
这时就可以使用 any 类型了
```
let list: any[] = ['OpenTiny', 112, { website: 'https://github.com/zxlfly' }];
```