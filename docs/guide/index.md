# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。
```vue
<template>
  <TSXButton>默认按钮</TSXButton>
  <TSXButton type="primary">主要按钮</TSXButton>
  <TSXButton type="success">成功按钮</TSXButton>
  <TSXButton type="info">信息按钮</TSXButton>
  <TSXButton type="warning">警告按钮</TSXButton>
  <TSXButton type="danger">危险按钮</TSXButton>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<TSXButton>默认按钮</TSXButton>
<TSXButton type="primary">主要按钮</TSXButton>
<TSXButton type="success">成功按钮</TSXButton>
<TSXButton type="info">信息按钮</TSXButton>
<TSXButton type="warning">警告按钮</TSXButton>
<TSXButton type="danger">危险按钮</TSXButton>
```

:::

## 加载中

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo

```vue
<TSXButton>默认按钮</TSXButton>
<TSXButton type="primary">主要按钮</TSXButton>
<TSXButton type="success">成功按钮</TSXButton>
<TSXButton type="info">信息按钮</TSXButton>
<TSXButton type="warning">警告按钮</TSXButton>
<TSXButton type="danger">危险按钮</TSXButton>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |
