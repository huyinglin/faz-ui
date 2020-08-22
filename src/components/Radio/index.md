## Radio 单选框
---

### 基本用法

```jsx
/**
 * title: Basic Radio
 * desc: 最简单的用法。
 */

import React from 'react';
import { Radio } from 'faz-ui';

export default () => <Radio>Radio</Radio>
```

### 禁用状态

```jsx
/**
 * title: Disabled
 * desc: Radio 不可用。
 */

import React from 'react';
import { Radio } from 'faz-ui';

export default () => <Radio disabled>Radio</Radio>
```
### Radio.Group

```jsx
/**
 * title: Radio.Group
 * desc: Radio 组。
 */

import React from 'react';
import { Radio } from 'faz-ui';

const [value, setValue] = React.useState(1);

function onChange(e) {
  console.log('value: ', e.target.value);
  setValue(e.target.value);
}

export default () =>
  <Radio.Group
    onChange={onChange}
    value={value}
  >
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
```
### Radio.Group - Mode

```jsx
/**
 * title: Mode
 * desc: 可选 `row` | `col`，分别为行模式和列模式。
 */

import React from 'react';
import { Radio, Button } from 'faz-ui';

const [value, setValue] = React.useState(1);
const [mode, setMode] = React.useState('row');

function onChange(e) {
  console.log('value: ', e.target.value);
  setValue(e.target.value);
}

export default () =>
  <div>
    <Button
      style={{ marginBottom: 8 }}
      onClick={() => setMode(mode === 'row' ? 'col' : 'row')}
    >
      {mode === 'row' ? 'Row - Mode' : 'Col - Mode'}
    </Button>
    <Radio.Group
      mode={mode}
      onChange={onChange}
      value={value}
    >
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  </div>
```
### 单独使用

```jsx
/**
 * title: 单独使用
 * desc: Radio 可脱离 RadioGroup 单独使用。
 */

import React from 'react';
import { Radio } from 'faz-ui';

const [selectedValue, setSelectedValue] = React.useState('a');

function handleChange(e) {
  setSelectedValue(e.target.value);
};

export default () =>
  <div>
    <Radio
      checked={selectedValue === 'a'}
      onChange={handleChange}
      value="a"
      inputProps={{ 'aria-label': 'A' }}
    />
    <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      value="b"
      color="rgb(220, 0, 78)"
      inputProps={{ 'aria-label': 'B' }}
    />
    <Radio
      checked={selectedValue === 'c'}
      onChange={handleChange}
      value="c"
      inputProps={{ 'aria-label': 'C' }}
    />
    <Radio
      checked={selectedValue === 'd'}
      onChange={handleChange}
      value="d"
      inputProps={{ 'aria-label': 'D' }}
    />
    <Radio
      checked={selectedValue === 'e'}
      onChange={handleChange}
      value="e"
      color="#43a047"
      inputProps={{ 'aria-label': 'E' }}
    />
  </div>
```

## API

| 属性       | 说明  | 类型   | 默认值  |
| --------- | ----- | ------ | ------ |
| value | 根据 value 进行比较，判断是否选中 | string &#124 number | - |
| checked | 指定当前是否选中 |  boolean | false |
| defaultChecked | 初始是否选中 |  boolean | false |
| disabled | 失效状态 |  boolean | false |
| icon | 自定义未选中状态的 icon |  React.ReactNode | - |
| checkedIcon | 自定义选中状态的 icon |  React.ReactNode | - |
| color | 设置选中时的背景色 |  string | - |
| name | `input[type="radio"]` 的 name 属性 |  string | - |
| inputRef | 内部 input 的 ref | `React.Ref<HTMLInputElement>` | |
| inputProps | 设置内部 input 的属性 | `React.InputHTMLAttributes<HTMLInputElement>` | - |
| style | 设置样式 | React.CSSProperties | - |
| className | 设置类名 | string | - |
| onChange | 变化时的回调函数 | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - |