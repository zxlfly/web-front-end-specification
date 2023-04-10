# 联合类型 & 类型别名
联合类型是指取值可以为多种类型中的一种，而类型别名常用于联合类型。
```
// 联合类型
let myFavoriteNumber: string | number
myFavoriteNumber = 'six'
myFavoriteNumber = 6

// 类型别名
type FavoriteNumber = string | number
let myFavoriteNumber: FavoriteNumber
```
在联合类型中非公有的属性、方法，不能直接使用
```
function getLength(something: string | number): number {
  return something.length
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```
上例中，length 不是 string 和 number 的共有属性，所以会报错。  
实际的开发过程中，我们可以通过类型窄化来处理。
