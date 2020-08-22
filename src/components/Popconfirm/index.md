## Popconfirm 气泡确认框
---
### 基本用法

```jsx
/**
 * title: Basic
 * desc: 最简单的用法。当 title 为 null 时，不显示 Popconfirm。
 */

import React from 'react';
import { Popconfirm, Button, Message } from 'faz-ui';

function confirm(e) {
  console.log(e);
  Message.success('点击了确认');
}

function cancel(e) {
  console.log(e);
  Message.error('点击了取消');
}

export default () =>
  <Popconfirm
    title="确定删除此记录吗?"
    onConfirm={confirm}
    onCancel={cancel}
  >
    <Button type="primary" danger>Delete</Button>
  </Popconfirm>
```
### 自定义 Icon 图标

```jsx
/**
 * title: Icon
 * desc: 自定义提示 icon。
 */

import React from 'react';
import { Popconfirm, Button, Message } from 'faz-ui';
import { AiOutlineQuestionCircle } from "react-icons/ai";

function confirm(e) {
  console.log(e);
  Message.success('点击了确认');
}

function cancel(e) {
  console.log(e);
  Message.error('点击了取消');
}

export default () =>
  <Popconfirm
    title="确定删除此记录吗?"
    onConfirm={confirm}
    onCancel={cancel}
    icon={<AiOutlineQuestionCircle style={{ color: 'red' }}/>}
  >
    <Button type="primary" danger>Delete</Button>
  </Popconfirm>
```
### 配置确认和取消按钮

```jsx
/**
 * title: ConfirmButton & CancelButton
 * desc: 配置确认和取消按钮。
 */

import React from 'react';
import { Popconfirm, Button, Message } from 'faz-ui';
import { AiOutlineQuestionCircle } from "react-icons/ai";

function confirm(e) {
  console.log(e);
  Message.success('点击了确认');
}

function cancel(e) {
  console.log(e);
  Message.error('点击了取消');
}

export default () =>
  <Popconfirm
    title="确定删除此记录吗?"
    onConfirm={confirm}
    onCancel={cancel}
    confirmButton={{ text: '删除' }}
    icon={<AiOutlineQuestionCircle style={{ color: 'red' }}/>}
  >
    <Button type="primary" danger>Delete</Button>
  </Popconfirm>
```
### 位置

```jsx
/**
 * title: Placement
 * desc: 位置有 12 个方向。
 */

import React from 'react';
import { Popconfirm, Button } from 'faz-ui';
import styled from 'styled-components';

const ButtonView = styled(Button)`
  width: 88px;
  margin: 8px;
`;

const TopAndButtomView = styled.div`
  margin-left: 104px;
`;

const CenterView = styled.div`
  width: 520px;
  display: flex;
  justify-content: space-between;
`;

const popconfirmTitle = "确定删除此记录吗?";

export default () =>
  <div>
    <TopAndButtomView>
      <Popconfirm placement="topLeft" title={popconfirmTitle}><ButtonView>topLeft</ButtonView></Popconfirm>
      <Popconfirm placement="top" title={popconfirmTitle}><ButtonView>top</ButtonView></Popconfirm>
      <Popconfirm placement="topRight" title={popconfirmTitle}><ButtonView>topRight</ButtonView></Popconfirm>
    </TopAndButtomView>
    <CenterView>
      <Popconfirm placement="leftTop" title={popconfirmTitle}><ButtonView>leftTop</ButtonView></Popconfirm>
      <Popconfirm placement="rightTop" title={popconfirmTitle}><ButtonView>rightTop</ButtonView></Popconfirm>
    </CenterView>
    <CenterView>
      <Popconfirm placement="left" title={popconfirmTitle}><ButtonView>left</ButtonView></Popconfirm>
      <Popconfirm placement="right" title={popconfirmTitle}><ButtonView>right</ButtonView></Popconfirm>
    </CenterView>
    <CenterView>
      <Popconfirm placement="leftBottom" title={popconfirmTitle}><ButtonView>leftBottom</ButtonView></Popconfirm>
      <Popconfirm placement="rightBottom" title={popconfirmTitle}><ButtonView>rightBottom</ButtonView></Popconfirm>
    </CenterView>
    <TopAndButtomView>
      <Popconfirm placement="bottomLeft" title={popconfirmTitle}><ButtonView>bottomLeft</ButtonView></Popconfirm>
      <Popconfirm placement="bottom" title={popconfirmTitle}><ButtonView>bottom</ButtonView></Popconfirm>
      <Popconfirm placement="bottomRight" title={popconfirmTitle}><ButtonView>bottomRight</ButtonView></Popconfirm>
    </TopAndButtomView>
  </div>
```

## API

请确保 Popconfirm 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| title | Popconfirm 内容，设置 title 为 null 时，Popconfirm 不会显示 | React.ReactNode | - |
| confirmButton | 设置确认按钮配置 | { text: string; type: ButtonType; size: ButtonSize; props: ButtonProps; } | - |
| cancelButton | 设置取消按钮配置 | { text: string; type: ButtonType; size: ButtonSize; props: ButtonProps; } | - |
| icon | 自定义提示 icon | React.ReactNode | - |
| defaultVisible | 默认是否显隐 | boolean | false |
| space | Popconfirm 和 children 的间距，单位：px | number | 12 |
| container | 浮层渲染父节点，默认渲染到 body 上 | React.ReactInstance &#124 (() => React.ReactInstance) | - |
| placement | 气泡框位置 | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `top` |
| enterDelay | 鼠标移入后延时多少才显示 Popconfirm，单位：毫秒 | number | 100 |
| leaveDelay | 鼠标移出后延时多少才隐藏 Popconfirm，单位：毫秒 | number | 100 |
| arrow | 是否展示箭头 | boolean | true |
| className | 设置浮层的类名 | string | - |
| style | 设置浮层的样式 | React.CSSProperties | - |
| visible | 用于手动控制浮层显隐 | boolean | false |
| onCancel | 点击取消的回调 | `(e: React.MouseEvent<HTMLElement>) => void` | - |
| onConfirm | 点击确认的回调 | `(e: React.MouseEvent<HTMLElement>) => void` | - |
| onChange | 显示隐藏的回调 | `(visible: boolean) => void` | - |
