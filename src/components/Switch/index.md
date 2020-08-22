## Switch 开关
---

### 基本用法

```jsx
/**
 * title: Basic Switch
 * desc: 最简单的用法。
 */

import React from 'react';
import { Switch } from 'faz-ui';

export default () =>
  <div>
    <Switch defaultChecked>Switch</Switch>
    <Switch defaultChecked color="rgb(220, 0, 78)" />
    <Switch defaultChecked color="#43a047" />
  </div>
```
### 禁用状态

```jsx
/**
 * title: Disabled
 * desc: Switch 失效状态。
 */

import React from 'react';
import { Switch } from 'faz-ui';

export default () => <Switch disabled/>
```
### 两种大小

```jsx
/**
 * title: Size
 * desc: 可选 `default` 和 `small`。
 */

import React from 'react';
import { Switch } from 'faz-ui';

export default () =>
  <div>
    <Switch size="default"/>
    <Switch size="small"/>
  </div>
```

### 文字和图标

```jsx
/**
 * title: 文字和图标
 * desc: 带有文字和图标。
 */

import React from 'react';
import { Switch } from 'faz-ui';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default () =>
  <div>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<AiOutlineCheck />}
      unCheckedChildren={<AiOutlineClose />}
      defaultChecked
    />
  </div>
```

## API

| 属性       | 说明  | 类型   | 默认值  |
| --------- | ----- | ------ | ------ |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| checkedChildren | 选中时的内容 | React.ReactNode | - |
| unCheckedChildren | 非选中时的内容 | React.ReactNode | - |
| color | 设置选中时的背景色 | string | - |
| size | 开关大小 | `default` `small` | `default` |
| inputRef | 内部 input 的 ref | `React.Ref<HTMLInputElement>` | - |
| style | 设置样式 | React.CSSProperties | - |
| className | 设置类名 | string | - |
| onChange | 变化时回调函数 | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - |