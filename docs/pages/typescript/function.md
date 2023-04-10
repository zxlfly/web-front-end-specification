# 函数
## 主要定义函数参数和返回值类型。
```
const sum = (x: number, y: number): number => {  
  return x + y  
}
```
以上代码包含以下 TS 校验规则：
- 调用 sum 函数时，必须传入两个参数，多一个或者少一个都不行
- 并且这两个参数的类型要为 number 类型
- 且函数的返回值为 number 类型

## 用问号 ? 可以表示该参数是可选的
可选参数必须放在最后面，他的后面不能跟非可选参数
```
const sum = (x: number, y?: number): number => {  
  return x + (y || 0);  
}  

sum(1)  
```