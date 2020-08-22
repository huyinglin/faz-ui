## Select 选择器
---

### 基本用法

```jsx
/**
 * title: Basic
 * desc: 最简单的用法。
 */

import React from 'react';
import { Select } from 'faz-ui';

export default () =>
  <Select
    style={{ width: 200 }}
    placeholder="Please select"
  >
    {Array.from({ length: 10 }).map((it, index) =>
      <Select.Option
        value={index}
        key={index}
      >
        Option-{index}
      </Select.Option>
    )}
  </Select>
```
### 多选模式。

```jsx
/**
 * title: Multiple
 * desc: 多选，从已有条目中选择。
 */

import React from 'react';
import { Select } from 'faz-ui';

export default () =>
  <Select
    multiple
    style={{ width: 400 }}
    placeholder="Please select"
  >
    {Array.from({ length: 10 }).map((it, index) =>
      <Select.Option
        value={index}
        key={index}
      >
        Option-{index}
      </Select.Option>
    )}
  </Select>
```
### 带搜索框

```jsx
/**
 * title: ShowSearch
 * desc: 展开后可对选项进行搜索。
 */

import React from 'react';
import { Select } from 'faz-ui';

export default () =>
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Please select"
  >
    <Select.Option value="jack">Jack</Select.Option>
    <Select.Option value="lucy">Lucy</Select.Option>
    <Select.Option value="disabled" disabled>
      Disabled
    </Select.Option>
    <Select.Option value="Yiminghe">yiminghe</Select.Option>
  </Select>
```
### 清除选择内容

```jsx
/**
 * title: AllowClear
 * desc: 清除已选择内容。
 */

import React from 'react';
import { Select } from 'faz-ui';

export default () =>
  <Select
    allowClear
    style={{ width: 200 }}
    placeholder="Please select"
  >
    <Select.Option value="jack">Jack</Select.Option>
    <Select.Option value="lucy">Lucy</Select.Option>
    <Select.Option value="disabled" disabled>
      Disabled
    </Select.Option>
    <Select.Option value="Yiminghe">yiminghe</Select.Option>
  </Select>
```
### 禁用状态

```jsx
/**
 * title: Disabled
 * desc: 禁用状态。
 */

import React from 'react';
import { Select } from 'faz-ui';

export default () =>
  <Select
    disabled
    style={{ width: 200 }}
    placeholder="Please select"
  >
    <Select.Option value="jack">Jack</Select.Option>
    <Select.Option value="lucy">Lucy</Select.Option>
    <Select.Option value="disabled" disabled>
      Disabled
    </Select.Option>
    <Select.Option value="Yiminghe">yiminghe</Select.Option>
  </Select>
```

## API

| 属性       | 说明  | 类型   | 默认值  |
| --------- | ----- | ------ | ------ |
| allowClear | 支持清除 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| showSearch | 使单选模式可搜索 | boolean | false |
| multiple | 开启多选模式 | boolean | false |
| suffixIcon | 自定义选择框后缀图标 | React.ReactNode | - |
| clearIcon | 自定义多选框清空图标	 | React.ReactNode | - |
| defaultValue | 默认选中值 | string &#124; string[] | - |
| value | 设置选中值 | string &#124; string[] | - |
| placeholder | 选择框默认文字 | string | - |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| style | 设置样式 | React.CSSProperties | - |
| className | 设置类名 | string | - |
| onSelect | 选中时的回调 | (value: string &#124; string[]) => void | - |
| onChange | value 改变时的回调 | (value: string &#124; string[] &#124; undefined) => void | - |