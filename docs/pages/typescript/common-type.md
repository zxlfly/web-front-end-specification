# 常见类型
## 用得较多的类型就下面7个
- 布尔 boolean
- 数值 number
- 字符串 string
- 数组 array
- 空值 void：表示没有任何返回值的函数
- 任意 any：表示不被类型检查
- unknown 
  - 可以将任何类型的值赋值给unknown
  - 不可以将unknown赋值给非any类型
  - 可以理解成是any类型对应的安全类型
## 用法
```
let isDone: boolean = false;

let arr:number[] = [1]

//类型“string”的参数不能赋给类型“number”的参数。
arr.push('1')

let arr2:any = [1]
// 设置 any 类型，表示不做类型检查，这时错误提示消失。 但是尽量不要使用any，不然就失去了TS的优势
arr2.push('1')

let myFavoriteNumber: number = 6;

let myName: string = 'zxl';

function alertName(name: string): void {  
  console.log(`My name is ${name}`);  
}

interface SourceItemObj {
  label: string;
  disabled: boolean;
  [propName: string]: unknown;
}
const defaultFormatter = (item: string | SourceItemObj) => {
  if (typeof item === 'string') {
    return item;
  }
  return item !== null ? item.label || item.toString() : '';
};
```