# 类型的窄化
ts的类型是可以组合使用的。这样就需要在程序中判断当前值类型进行区分操作。  
类型窄化根据类型守卫在子语句块重新定义了具体的新类型。  
例如使用typeof判断，需要注意null。
```
type Fish = {swim:()=>void}
type Bird = {fly:()=>void}
function move(animal:Fish|Bird){
  if('swim' in animal){
    return animal.swim()
  }
  return animal.fly()
}
```