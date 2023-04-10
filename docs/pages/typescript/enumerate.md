# 枚举
枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
```
枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
```
console.log(Days.Sun === 0) // true
console.log(Days[0] === 'Sun') // true
console.log('Days', Days)
```
手动赋值：未手动赋值的枚举项会接着上一个枚举项递增。
```
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}
```