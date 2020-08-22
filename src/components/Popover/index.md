## Popover 气泡卡片
---
### 基本用法

Basic Popover:

更多属性请参考 Tooltip。

请确保 Popover 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。

```jsx
/**
 * title: Basic
 * desc: 最简单的用法。
 */

import React from 'react';
import { Popover, Button } from 'faz-ui';

const content = (
  <div>
    <div>Content</div>
    <div>Content</div>
  </div>
);

export default () =>
  <Popover title="Title" content={content}>
    <Button type="primary">Hover me</Button>
  </Popover>
```
### 三种触发方式

```jsx
/**
 * title: Trigger
 * desc: 支持三种触发方式，鼠标移入、聚集、点击。
 */

import React from 'react';
import { Popover, Button } from 'faz-ui';

export default () =>
  <div>
    <Popover trigger="hover" title="Popover" content="Content"><Button style={{ margin: 8 }}>Hover</Button></Popover>
    <Popover trigger="click" title="Popover" content="Content"><Button style={{ margin: 8 }}>Click</Button></Popover>
    <Popover trigger="focus" title="Popover" content="Content"><Button style={{ margin: 8 }}>Focus</Button></Popover>
    <Popover trigger={['click', 'hover']} title="Popover"><Button style={{ margin: 8 }}>Hover & Click</Button></Popover>
  </div>
```
### 位置

```jsx
/**
 * title: Placement
 * desc: 位置有 12 个方向。
 */

import React from 'react';
import { Popover, Button } from 'faz-ui';
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

const popoverTitle = "Popover Title";
const popoverContent = "Popover Content";

export default () =>
  <div>
    <TopAndButtomView>
      <Popover title={popoverTitle} content={popoverContent} placement="topLeft"><ButtonView>topLeft</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="top"><ButtonView>top</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="topRight"><ButtonView>topRight</ButtonView></Popover>
    </TopAndButtomView>
    <CenterView>
      <Popover title={popoverTitle} content={popoverContent} placement="leftTop"><ButtonView>leftTop</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="rightTop"><ButtonView>rightTop</ButtonView></Popover>
    </CenterView>
    <CenterView>
      <Popover title={popoverTitle} content={popoverContent} placement="left"><ButtonView>left</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="right"><ButtonView>right</ButtonView></Popover>
    </CenterView>
    <CenterView>
      <Popover title={popoverTitle} content={popoverContent} placement="leftBottom"><ButtonView>leftBottom</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="rightBottom"><ButtonView>rightBottom</ButtonView></Popover>
    </CenterView>
    <TopAndButtomView>
      <Popover title={popoverTitle} content={popoverContent} placement="bottomLeft"><ButtonView>bottomLeft</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="bottom"><ButtonView>bottom</ButtonView></Popover>
      <Popover title={popoverTitle} content={popoverContent} placement="bottomRight"><ButtonView>bottomRight</ButtonView></Popover>
    </TopAndButtomView>
  </div>
```

## API

请确保 Popover 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| title | 卡片标题 | React.ReactNode | - |
| content | 卡片内容 | React.ReactNode | - |
| defaultVisible | 默认是否显隐 | boolean | false |
| space | Popover 和 children 的间距，单位：px | number | 12 |
| container | 浮层渲染父节点，默认渲染到 body 上 | React.ReactInstance &#124 (() => React.ReactInstance) | - |
| placement | 气泡框位置 | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `top` |
| trigger | 触发行为，可使用数组设置多个触发行为 | `hover` `focus` `click` `string[]` | `hover` |
| enterDelay | 鼠标移入后延时多少才显示 Popover，单位：毫秒 | number | 100 |
| leaveDelay | 鼠标移出后延时多少才隐藏 Popover，单位：毫秒 | number | 100 |
| arrow | 是否展示箭头 | boolean | true |
| className | 设置浮层的类名 | string | - |
| style | 设置浮层的样式 | React.CSSProperties | - |
| visible | 用于手动控制浮层显隐 | boolean | false |
| onChange | 显示隐藏的回调 | (visible: boolean) => void | - |