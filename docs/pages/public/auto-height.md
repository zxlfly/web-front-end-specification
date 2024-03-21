# 高度自适应
## calc的方式
需要知道固定高度
```
.filter-box {
    height: calc(100% - 34px)
}
```
## flex的方式
这种方式会变成纵向布局
```
.auto-height{
    display: flex;
    flex-direction: column;
    height: 100%;
}
```