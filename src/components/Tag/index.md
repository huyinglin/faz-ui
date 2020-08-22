## Tag 标签
---

### 基本用法

```jsx
/**
 * title: Basic Radio
 * desc: 最简单的用法。
 */

import React from 'react';
import { Tag } from 'faz-ui';

export default () =>
  <div>
    <Tag>Tag</Tag>
    <Tag><a href="https://github.com/huyinglin/faz-ui" target="_blank">Link</a></Tag>
  </div>
```
### 可删除

```jsx
/**
 * title: Closable
 * desc: Tag 可删除。
 */

import React from 'react';
import { Tag } from 'faz-ui';

function onClose(e) {
  console.log('onClose')
}

export default () => <Tag closable onClose={onClose}>Tag</Tag>
```
### 多彩标签
Preset Type Tag:

```jsx
/**
 * title: Color
 * desc: 我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 */

import React from 'react';
import { Tag } from 'faz-ui';

export default () =>
  <div>
    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="default">default</Tag>
    <br/>
    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
    <br/>
    <Tag color="pink">pink</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
  </div>
```
### 标签样式

```jsx
/**
 * title: StyleConfig
 * desc: 设置标签的颜色，可设置 background、borderColor、color。同时 color 属性将失效。
 */

import React from 'react';
import { Tag } from 'faz-ui';

export default () =>
  <Tag
    styleConfig={{
      background: '#fff',
      borderColor: '#108ee9',
      color: '#108ee9'
    }}
  >
    Tag
  </Tag>
```
### 可选择标签

```jsx
/**
 * title: Checkable
 * desc: 当使用可选择标签时，必须使用受控模式。同时 closable 属性将失效。
 */

import React from 'react';
import { Tag } from 'faz-ui';

const [checked, setChecked] = React.useState(true);

export default () => <Tag checked={checked} onCheck={check => setChecked(check)}>Tag</Tag>
```
### 选中时背景颜色

```jsx
/**
 * title: CheckedBackground
 * desc: 设置选中时标签的背景颜色。
 */

import React from 'react';
import { Tag } from 'faz-ui';

const [checked, setChecked] = React.useState(true);

export default () =>
  <Tag
    checkedBackground="#f50"
    checked={checked}
    onCheck={check => setChecked(check)}
  >
    Tag
  </Tag>
```
### 图标按钮

```jsx
/**
 * title: Icon
 * desc: 当需要在 Tag 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
 */

import React from 'react';
import { Tag } from 'faz-ui';

import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

export default () =>
  <div>
    <Tag icon={<AiOutlineTwitter />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<AiOutlineYoutube />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<AiOutlineFacebook />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<AiOutlineLinkedin />} color="#55acee">
      LinkedIn
    </Tag>
  </div>
```
### 控制关闭状态

```jsx
/**
 * title: Visible
 * desc: 通过 visible 属性控制关闭状态。
 */

import React from 'react';
import { Tag, Button } from 'faz-ui';

const [visible, setVisible] = React.useState(true);

export default () =>
  <div>
    <Button style={{ marginBottom: 8 }} type="primary" onClick={() => setVisible(!visible)}>Toggle Visible</Button>
    <br/>
    <Tag visible={visible}>Tag</Tag>
  </div>
```
## API

| 属性       | 说明  | 类型   | 默认值  |
| --------- | ----- | ------ | ------ |
|closable | 标签是否可以关闭 | boolean | false |
|closeIcon | 自定义关闭按钮 | React.ReactNode | - |
|color | 标签颜色 | string | - |
|visible | 是否显示标签 | boolean | true |
|icon | 设置Icon | React.ReactNode | - |
|checked | 是否选中 | boolean | false |
|checkedBackground | 选中后标签的背景色 | string | - |
|styleConfig | 配置 Tag 样式 | { background: string; borderColor: string; color: string; } | - |
|style | 设置样式 | React.CSSProperties | - |
|className | 设置类名 | string | - |
|onCheck | 点击带有 checked 属性标签的回调 | (checked: boolean) => void | - |
|onClose | 关闭时的回调 | `(e: React.MouseEvent<HTMLSpanElement>) => void` | - |