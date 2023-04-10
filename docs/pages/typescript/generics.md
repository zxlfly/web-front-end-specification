# 泛型
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。  
可以简单理解为定义函数时的形参。参数在运行时，根据传入的参数类型决定
```
function print<T>(arg: T): T {
  return arg
}
```
我们还可以使用泛型来约束后端接口参数类型。
```
import axios from 'axios'

interface API {
  '/book/detail': {
      id: number,
  },
  '/book/comment': {
      id: number
      comment: string
  }
  ...
}

function request<T extends keyof API>(url: T, obj: API[T]) {
  return axios.post(url, obj)
}

request('/book/comment', {
  id: 1,
  comment: '非常棒！'
})
```
- url 只能是 API 中定义过的，其他 url 都会提示错误
- 接口参数 obj 必须和 url 能对应上，不能少属性，属性类型也不能错
- 而且调用 request 方法时，也会提示 url 可以选择哪些