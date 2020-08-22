## Checkbox 多选框
---

### 基本用法

```jsx
/**
 * title: Basic Checkbox
 * desc: 简单的 checkbox。
 */

import React from 'react';
import { Checkbox } from 'faz-ui';

export default () => <Checkbox>Checkbox</Checkbox>
```
### 禁用状态

```jsx
/**
 * title: Disabled
 * desc: checkbox 不可用。
 */

import React from 'react';
import { Checkbox } from 'faz-ui';

export default () =>
  <div>
    <Checkbox checked disabled></Checkbox>
    <Checkbox disabled></Checkbox>
    <Checkbox checked disabled>Checkbox</Checkbox>
    <Checkbox disabled>Checkbox</Checkbox>
  </div>
```
### 受控的 Checkbox

```jsx
/**
 * title: Controlled
 * desc: 使用 checked 和 onChange 属性使 CheckBox 受控。
 */

import React from 'react';
import { Checkbox, Button } from 'faz-ui';

const [checked, setChecked] = React.useState(true);
const [disabled, setDisabled] = React.useState(false);

function onChange(e) {
  console.log(e.target.checked);
  setChecked(e.target.checked);
}

export default () =>
  <div>
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    >
      {checked ? 'Checked' : 'Unchecked'}-{disabled ? 'Disabled' : 'Enabled'}
    </Checkbox>
    <div style={{ marginTop: 16 }}>
      <Button onClick={() => setChecked(!checked)} style={{ marginRight: 8 }}>{checked ? 'Check' : 'Uncheck'}</Button>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>
    </div>
  </div>
```
### 图标

```jsx
/**
 * title: Icon & CheckedIcon
 * desc: 使用 icon 和 checkedIcon 属性可自定义 CheckBox 选中或未选中状态图标。
 */

import React from 'react';
import { Checkbox } from 'faz-ui';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default () =>
  <Checkbox
    icon={<MdFavoriteBorder/>}
    checkedIcon={<MdFavorite/>}
    color="rgb(220, 0, 78)"
    defaultChecked
  >
    Favorite
  </Checkbox>
```
### 颜色

```jsx
/**
 * title: Color
 * desc: 使用 color 属性可自定义 CheckBox 图标的颜色。
 */

import React from 'react';
import { Checkbox } from 'faz-ui';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default () =>
  <div>
    <Checkbox
      icon={<MdFavoriteBorder/>}
      checkedIcon={<MdFavorite/>}
      color="rgb(220, 0, 78)"
      defaultChecked
    >
      Favorite
    </Checkbox>
    <Checkbox color="rgb(220, 0, 78)" defaultChecked>Checkbox</Checkbox>
    <Checkbox color="#43a047" defaultChecked>Checkbox</Checkbox>
    <Checkbox color="#1976d2" defaultChecked>Checkbox</Checkbox>
  </div>
```
### Indeterminate

```jsx
/**
 * title: Indeterminate
 * desc: 设置 indeterminate 状态，只负责样式控制。
 */

import React from 'react';
import { Checkbox } from 'faz-ui';

const [checkList, setCheckList] = React.useState([]);

function onChange(value, e) {
  const { checked } = e.target;
  if (checked && !checkList.includes(value)) {
    setCheckList([...checkList, value]);
    return;
  }
  setCheckList(checkList.filter(it => it !== value));
}

function onCheckAll(e) {
  const { checked } = e.target;
  setCheckList(checked ? ["Pear", "Orange", "Apple"] : []);
}

export default () =>
  <div>
    <Checkbox
      indeterminate={checkList.length < 3 && checkList.length > 0}
      checked={checkList.length === 3}
      onChange={onCheckAll}
    >
      Check All
    </Checkbox>
    <hr/>
    <Checkbox checked={checkList.includes('Apple')} onChange={e => onChange('Apple', e)}>Apple</Checkbox>
    <Checkbox checked={checkList.includes('Pear')} onChange={e => onChange('Pear', e)}>Pear</Checkbox>
    <Checkbox checked={checkList.includes('Orange')} onChange={e => onChange('Orange', e)}>Orange</Checkbox>
  </div>
```

## API

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| checked | 指定当前是否选中 |  boolean | false |
| defaultChecked | 初始是否选中 |  boolean | false |
| disabled | 失效状态 |  boolean | false |
| icon | 自定义未选中状态的 icon |  React.ReactNode | - |
| checkedIcon | 自定义选中状态的 icon |  React.ReactNode | - |
| color | 设置选中时的背景色 |  string | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 |  boolean | false |
| inputRef | 内部 input 的 ref | `React.Ref<HTMLInputElement>` | |
| inputProps | 设置内部 input 的属性 | `React.InputHTMLAttributes<HTMLInputElement>` | - |
| style | 设置样式 | React.CSSProperties | - |
| className | 设置类名 | string | - |
| onChange | 变化时的回调函数 | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - |