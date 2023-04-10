# 类
## 关键字
- public 
  - 公有的----在当前类里面、子类、类外面都可以访问
  - 实例可以访问
- protected 
  - 保护类型----在当前类里面、子类里面可以访问
  - 实例不可以访问
- private 
  - 私有----在当前类里面可以访问
  - 实例不可以访问
- readonly
  - 只读属性----初始化之后不可以修改
  - 如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。
  - 实例可以访问
- static
  - 静态成员和类的实例没有关系，静态成员、静态方法都绑定在类型本身上。
  - 静态成员也会继承。
  - 实例不可以访问

## 抽象类
抽象类不能实例化，只能继承。  
抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。   
 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。  
 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。  
 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 ```
 abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```