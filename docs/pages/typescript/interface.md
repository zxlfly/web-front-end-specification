# 接口
## 接口简单理解就是一个对象的“轮廓”
```
interface InterfaceA {
  name: string;
  value?: string | number;
  total?: number;
  checked?: boolean;
}
```
## 接口是可以继承接口的
```
interface InterfaceB extends InterfaceA {
  closable?: boolean;
}
```
这样 InterfaceB 就包含了 InterfaceA 属性和自己的 closable 可选属性。
## 接口也是可以被类实现的
```
interface Alarm {
  alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}
```
如果类实现了一个接口，却不写具体的实现代码，则会有错误提示
## 接口可以声明合并
```
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};
```
虽然支持这个特性，但是实际开发不要这么写！