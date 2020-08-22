## Input 输入框
---

### 基本使用

```jsx
/**
 * title: Basic Input
 * desc: 基本使用。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () => <Input placeholder="This is placeholder" style={{ width: 200 }} />
```
### 带移除图标

```jsx
/**
 * title: AllowClear
 * desc: 带移除图标的输入框，点击图标删除所有内容。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () => <Input allowClear placeholder="This is placeholder" style={{ width: 200 }}/>
```
### 前置/后置标签

```jsx
/**
 * title: AddonBefore & AddonAfter
 * desc: 用于配置一些固定组合。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () =>
  <Input
    addonBefore="http://"
    addonAfter=".com"
    defaultValue="mysite"
    style={{ width: 400 }}
  />
```
### 前缀和后缀

```jsx
/**
 * title: Prefix & Suffix
 * desc: 在输入框上添加前缀或后缀图标。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () =>
  <Input
    prefix="￥"
    suffix="RMB"
    style={{ width: 400 }}
  />
```
### 禁用

```jsx
/**
 * title: Disabled
 * desc: 禁用 Input。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () => <Input disabled style={{ width: 200 }}/>
```
### 搜索框

```tsx
/**
 * title: Input.Search
 * desc: 带有搜索按钮的输入框。点击搜索按钮或者按下回车可触发 onSearch。
 */

import React from 'react';
import { Input } from 'faz-ui';

function onSearch(value: string) {
  console.log('SearchValue:', value);
}

export default () =>
  <div>
    <Input.Search
      onSearch={onSearch}
      placeholder="input search text"
      style={{ width: 200 }}
    />
    <Input.Search
      enterButton
      onSearch={onSearch}
      placeholder="input search text"
      style={{ width: 400, margin: 16 }}
    />
    <Input.Search
      enterButton="Search"
      onSearch={onSearch}
      placeholder="input search text"
      style={{ width: 400 }}
    />
  </div>
```
### 文本域

```jsx
/**
 * title: Input.TextArea
 * desc: 用于多行输入。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () =>
  <Input.TextArea
    rows={4}
    placeholder="This is placeholder"
    style={{ width: 400 }}
  />
```
### 密码框

```jsx
/**
 * title: Input.Password
 * desc: 密码框。使用 Input.Password 时，suffix 和 type 属性将失效。
 */

import React from 'react';
import { Input } from 'faz-ui';
import { BsLock, BsUnlock } from 'react-icons/ai';

export default () => <Input.Password placeholder="Enter your Password" style={{ width: 200 }}/>
```

### 内容长度限制

```jsx
/**
 * title: Input.Limit
 * desc: 限制输入长度的输入框。
 */

import React from 'react';
import { Input } from 'faz-ui';

export default () => <Input.Limit maxLength={4} placeholder="Enter up to 4 characters" style={{ width: 200 }}/>
```
## API

### Input

Input 的其他属性和 React 自带的 input 一致。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| addonAfter | 带标签的 input，设置后置标签 | React.ReactNode | - |
| addonBefore | 带标签的 input，设置前置标签 | React.ReactNode | - |
| prefix | 带有前缀图标的 input	| React.ReactNode | - |
| suffix | 带有后缀图标的 input	| React.ReactNode | - |
| defaultValue | 输入框默认内容	| string | - |
| disabled | 	是否禁用 | boolean | false |
| inputRef | 内部原生 input 的 ref | `React.Ref<HTMLInputElement>` | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性 | string | text |
| allowClear | 可以点击清除图标删除内容	| boolean | false |
| value | 输入框内容 | string | - |
| onChange | 输入框内容变化时的回调 | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - |
| onPressEnter | 按下回车的回调 | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | - |

### Input.TextArea

Input.TextArea 的其他属性和浏览器自带的 textarea 一致。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| defaultValue | 输入框默认内容	| string | - |
| value | 输入框内容 | string | - |
| onChange | 输入框内容变化时的回调 | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | - |
| onPressEnter | 按下回车的回调 | `(event: React.KeyboardEvent<HTMLTextAreaElement>) => void` | - |
| onResize | TextArea 大小变化时的回调 | `(width: number, height: number) => void` | - |

### Input.Search

其余属性和 Input 一致。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。| `boolean | React.ReactNode` | false |
| onSearch | 点击搜索或按下回车键时的回调	| `(value: string, event: React.KeyboardEvent<HTMLInputElement>) => void` | - |

### Input.Password

其余属性和 Input 一致。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| visibilityToggle | 是否显示切换按钮 | boolean | true |
| visibleIcon | 自定义显示密码 Icon | React.ReactNode | - |
| invisibleIcon | 自定义隐藏密码 Icon | React.ReactNode | - |

### Input.Limit

其余属性和 Input 一致。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| maxLength | 内容的最大长度 | number | 0 |