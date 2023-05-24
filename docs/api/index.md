# Vitepress Demo

## 已实现
- [x] vue组件

```js
<demo-block>
  <TSXButton>默认按钮</TSXButton>
  <TSXButton type="primary">主要按钮</TSXButton>
  <TSXButton type="success">成功按钮</TSXButton>
  <TSXButton type="info">信息按钮</TSXButton>
  <TSXButton type="warning">警告按钮</TSXButton>
  <TSXButton type="danger">危险按钮</TSXButton>
</demo-block>
```



- [x] vue代码自动渲染并且显示对应code（目前已支持script和style，有好的解决方案的伙伴请提issue）

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。
```vue
<TSXButton>默认按钮</TSXButton>
<TSXButton type="primary">主要按钮</TSXButton>
<TSXButton type="success">成功按钮</TSXButton>
<TSXButton type="info">信息按钮</TSXButton>
<TSXButton type="warning">警告按钮</TSXButton>
<TSXButton type="danger">危险按钮</TSXButton>
```
:::
