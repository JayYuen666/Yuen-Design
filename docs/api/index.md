# Vitepress Demo

## 已实现
- [x] vue组件

```js
<demo-block>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</demo-block>
```



- [x] vue代码自动渲染并且显示对应code（目前已支持script和style，有好的解决方案的伙伴请提issue）

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。
```vue
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```
:::
