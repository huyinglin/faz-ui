## Tooltip 文字提示
---
### 基本用法

```jsx
/**
 * title: Basic
 * desc: 最简单的用法。
 */

import React from 'react';
import { Tooltip } from 'faz-ui';

export default () => <Tooltip title="Tooltip"><span>Tooltip</span></Tooltip>
```
### 三种触发方式

```jsx
/**
 * title: Trigger
 * desc: 支持三种触发方式，鼠标移入、聚集、点击。
 */

import React from 'react';
import { Tooltip, Button } from 'faz-ui';

export default () =>
  <div>
    <Tooltip trigger="hover" title="Tooltip"><Button style={{ margin: 8 }}>Hover</Button></Tooltip>
    <Tooltip trigger="click" title="Tooltip"><Button style={{ margin: 8 }}>Click</Button></Tooltip>
    <Tooltip trigger="focus" title="Tooltip"><Button style={{ margin: 8 }}>Focus</Button></Tooltip>
    <Tooltip trigger={['click', 'hover']} title="Tooltip"><Button style={{ margin: 8 }}>Hover & Click</Button></Tooltip>
  </div>
```
### 延时显示

```jsx
/**
 * title: EnterDelay & LeaveDelay
 * desc: 设置鼠标移入移出后延时多少时间显示，单位：ms。
 */

import React from 'react';
import { Tooltip, Button } from 'faz-ui';

export default () =>
  <div>
    <Tooltip enterDelay={0} leaveDelay={0} title="Tooltip">
      <Button>0ms</Button>
    </Tooltip>
    <Tooltip enterDelay={500} leaveDelay={500} title="Tooltip">
      <Button style={{ marginLeft: 16 }}>500ms</Button>
    </Tooltip>
    <Tooltip title="Tooltip">
      <Button style={{ marginLeft: 16 }}>default</Button>
    </Tooltip>
  </div>
```
### 多彩文字提示

```jsx
/**
 * title: Colors
 * desc: 我们添加了多种预设色彩的文字提示样式，用作不同场景使用。
 */

import React from 'react';
import { Tooltip, Button } from 'faz-ui';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

export default () =>
  <div>
    {colors.map(color => (
      <Tooltip title="prompt text" color={color} key={color}>
        <Button style={{ margin: 8 }}>{color}</Button>
      </Tooltip>
    ))}
    <br/>
    {customColors.map(color => (
      <Tooltip title="prompt text" color={color} key={color}>
        <Button style={{ margin: 8 }}>{color}</Button>
      </Tooltip>
    ))}
  </div>
```
### 受控的 Tooltip

```jsx
/**
 * title: Controlled
 * desc: 通过 visible 属性控制 Tooltip 显隠。
 */

import React from 'react';
import { Tooltip } from 'faz-ui';

const [visible, setVisible] = React.useState(false);

function onChange(value) {
  console.log('visible', value);
  setVisible(value);
}

export default () =>
  <Tooltip
    defaultVisible={true}
    visible={visible}
    onChange={onChange}
    title="Tooltip"
  >
    <span>Tooltip</span>
  </Tooltip>
```
### 位置

```jsx
/**
 * title: Placement
 * desc: 位置有 12 个方向。
 */

import React from 'react';
import { Tooltip, Button } from 'faz-ui';
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

const tooltipTitle = "Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title";

export default () =>
  <div>
    <TopAndButtomView>
      <Tooltip placement="topLeft" title={tooltipTitle}><ButtonView>topLeft</ButtonView></Tooltip>
      <Tooltip placement="top" title={tooltipTitle}><ButtonView>top</ButtonView></Tooltip>
      <Tooltip placement="topRight" title={tooltipTitle}><ButtonView>topRight</ButtonView></Tooltip>
    </TopAndButtomView>
    <CenterView>
      <Tooltip placement="leftTop" title={tooltipTitle}><ButtonView>leftTop</ButtonView></Tooltip>
      <Tooltip placement="rightTop" title={tooltipTitle}><ButtonView>rightTop</ButtonView></Tooltip>
    </CenterView>
    <CenterView>
      <Tooltip placement="left" title={tooltipTitle}><ButtonView>left</ButtonView></Tooltip>
      <Tooltip placement="right" title={tooltipTitle}><ButtonView>right</ButtonView></Tooltip>
    </CenterView>
    <CenterView>
      <Tooltip placement="leftBottom" title={tooltipTitle}><ButtonView>leftBottom</ButtonView></Tooltip>
      <Tooltip placement="rightBottom" title={tooltipTitle}><ButtonView>rightBottom</ButtonView></Tooltip>
    </CenterView>
    <TopAndButtomView>
      <Tooltip placement="bottomLeft" title={tooltipTitle}><ButtonView>bottomLeft</ButtonView></Tooltip>
      <Tooltip placement="bottom" title={tooltipTitle}><ButtonView>bottom</ButtonView></Tooltip>
      <Tooltip placement="bottomRight" title={tooltipTitle}><ButtonView>bottomRight</ButtonView></Tooltip>
    </TopAndButtomView>
  </div>
```

## API

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| title | Tooltip 内容，设置 title 为 null 时，Tooltip 不会显示 | React.ReactNode | - |
| color | 背景颜色 | string | - |
| defaultVisible | 默认是否显隐 | boolean | false |
| space | Tooltip 和 children 的间距，单位：px | number | 12 |
| container | 浮层渲染父节点，默认渲染到 body 上 | React.ReactInstance &#124 (() => React.ReactInstance) | - |
| placement | 气泡框位置 | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `top` |
| trigger | 触发行为，可使用数组设置多个触发行为 | `hover` `focus` `click` `string[]` | `hover` |
| enterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：毫秒 | number | 100 |
| leaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：毫秒 | number | 100 |
| arrow | 是否展示箭头 | boolean | true |
| className | 设置浮层的类名 | string | - |
| style | 设置浮层的样式 | React.CSSProperties | - |
| visible | 用于手动控制浮层显隐 | boolean | false |
| onChange | 显示隐藏的回调 | (visible: boolean) => void | - |