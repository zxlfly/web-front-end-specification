# 5. Vue代码书写规范

## 5.1 文件命名

### 5.1.1 vue组件命名

- 通常包括components文件夹以内的文件
- 在vue项目的components文件下创建single-file components（单文件组件），使用PascalCase命名。
- 组件名应该倾向于全拼而不是缩写。编辑器中的自动补全功能已经让书写长命名的代价非常低了，而其带来的明确性却是非常宝贵的。

```js
// 组件 UserGroup.vue
export default {
    name: 'UserGroup'
};

// 父组件
export default {
    template: '<user-group></user-group>'
};
```

### 5.1.2 其他文件命名

- 其他文件指的是components文件以外的文件
- 全部采用小写，多个单词以短横线"-"分隔。

```js
error-404.vue
login.vue
table.scss
index-header.scss
index.ts
date-util.ts
```

- 一般地，封装组件的 name 选项和文件夹名称应保持一致。

```js
// Good
export default {
  name: 'UserGroup'
};

// Bad
export default {
  name: 'user-group'
};
```

- 紧耦合组件命名
若组件具有一定程度的关联耦合，在命名上需要有一定的继承关系。

```md
// Good
components/
|- user
    |- index.vue
    |- user-list.vue
    |- user-list-operate.vue
    |- user-list-query.vue

// Bad
components/
|- user
    |- table.vue
    |- add-and-edit.vue
    |- query.vue
```

### 5.1.3 通信函数的命名

- 父组件引用子组件时，父子组件通过自定义事件通信，在父组件中的函数函数名以 emit打头，用于区分该函数是自定事件函数。

例如：

```  js
// 子组件
export default {
  name: 'Child',
  props: {
     id: String
  },
  // ...
  methods: {
    handleChildData () {
    // ...
      this.$emit('give', [some data]);
    }
  }
};

// 父组件
// Bad
<template>
  <Child :id="id" @give="give" ></Child>
</template>

// Good
<template>
  <Child :id="parentId" @give="emitChildData" ></Child>
  <!-- emitChildData: 以emit打头是自定义事件函数 -->
</template>

```



## 5.2 Vue文件头


```html
<!--
    * Title    :
    * Desc     :
    * Copyright: 
    * Version  : 1.0
    * History  : create 年 月 日 ***
-->

```

## 5.3 template规范

### 5.3.1 必须为v-for设置键值key

例如：

``` vue
<div v-for="item in list" :key="item.id"></div>
```

### 5.3.2 属性绑定值或事件绑定方法名必须使用 "" 双引号

``` vue
// good
<template>
    <key-set-config
        number="EQMS.ACCEPT_TYPE"
        :base-attr="baseAttr">
    </key-set-config>
</template>


// bad
<template>
    <key-set-config
        number='EQMS.ACCEPT_TYPE'
        :base-attr='baseAttr'>
    </key-set-config>
</template>
```

### 5.3.4 多属性组件，每个属性一行

- 多个特性的元素应该分多行撰写，每个特性一行。

> 在 JavaScript中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 JSX值得我们做相同的考虑。

```html
<!-- Good -->
<some-components
    :a="a"
    :b="b"
    :c="c"
></some-components>

<!-- Bad -->
<some-components :a="a" :b="b" :c="c">
```

### 5.3.4 属性顺序

原生属性放前面，指令放后面
如下所示：

``` md
  - class
  - id,ref
  - name
  - data-*
  - src, for, type, href,value,max-length,max,min,pattern
  - title, alt，placeholder
  - aria-*, role
  - required,readonly,disabled
  - is
  - v-for
  - key
  - v-if
  - v-else-if
  - v-else
  - v-show
  - v-cloak
  - v-pre
  - v-once
  - v-model
  - v-bind,:
  - v-on,@
  - v-html
  - v-text
```

### 5.3.5 避免 v-if 和 v-for 用在一起

```vue
<!-- Good -->
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<!-- bad -->
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```

## 5.4 Vue实例属性规范

- 页面跳转数据传递使用路由参数

> 参数不用vuex维护的原因是：当页面刷新的时候，vuex维护的数据会丢失

``` js
let id = '123';
this.$router.push({ name: 'userCenter', query: {id: id} });
```

### 5.4.2 name

- 组件名应该始终是多个单词，始终是PascalCase的方式。根 组件App和内置组件除外。这样可以避免跟现在的以及未来的HTML元素冲突。
- name 必须和文件名保持一致

``` js
export default{
    name:'SearchWorkFlow'，
}
```

### 5.4.3 props

> Prop 定义应该尽量详细。在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
> 在声明prop的时候，其命名应该始终使用camelCase，而在模板和jsx中应该始终使用kebab-case。

- 在HTML中：

``` vue
<MyComponent greeting-text="hi"></MyComponent>
```

- 在TS中

``` vue
export default {
  name: 'MyComponent',
  // ...
  props: {
    greetingText: {
      type: String,
      required: true,
    }
  }
}
```

- Props 定义应该尽量详细

``` vue
// bad 这样做只有开发原型系统时可以接受
props: ['status']

// good
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```


## 5.5 vue-router
- Vue Router Path 命名采用 kebab-case 格式。 用 Snake（如：/user_info）或camelCase（如：/userInfo)的单词会被当成一个单词，搜索引擎无法区分语义。

``` js
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
},{
  path: '/user-login', // 能解析成 user login
  name: 'UserLogin',
  component: import('../page/user-login/user-login.vue'),
},
```