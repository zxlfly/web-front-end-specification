# 滚动条
一般使用UI自带的样式即可，如果需要自定义可以参考如下设置：
```
/* 设置滚动条的宽度、高度和背景颜色 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}

/* 设置滚动条的滑块样式 */
::-webkit-scrollbar-thumb {
  background-color: #5bc0de;
  border-radius: 5px;
  border: 2px solid #f5f5f5;
}

/* 设置滚动条的轨道样式 */
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 2px solid #ccc;
}
```