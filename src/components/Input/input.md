Basic Input:

```jsx
<Input
  defaultValue="defaultValue"
  allowClear
  style={{ width: 200 }}
  placeholder="This is placeholder"
/>
```
InputRef:

使用 inputRef 获取内部原生 input 元素的 ref。

```jsx
import React, { useRef, useEffect } from 'react';
import Button from '../Button';

const ref = useRef(null);

function onChange(e) {
  console.log('onChange', e.target.value);
}

function onPressEnter(e) {
  console.log('onPressEnter', e.keyCode);
}

<>
  <Button type="primary" style={{ marginRight: 8 }} onClick={() => ref.current.focus()}>focus</Button>
  <Button type="primary" style={{ marginRight: 8 }} onClick={() => ref.current.blur()}>blur</Button>
  <Button type="primary" style={{ marginRight: 8 }} onClick={() => ref.current.select()}>select</Button>
  <Input
    inputRef={ref}
    defaultValue="This is defaultValue"
    onChange={onChange}
    allowClear
    style={{ width: 200 }}
    onPressEnter={onPressEnter}
    placeholder="This is placeholder"
  />
</>
```
Search:

onSearch

```jsx
function onSearch(value) {
  console.log('onSearch', value);
}

<Input.Search
  enterButton="Search"
  defaultValue="This is defaultValue"
  allowClear
  onSearch={onSearch}
  placeholder="This is placeholder"
/>
```
Search:

enterButton: string

```jsx
<Input.Search
  enterButton="Search"
  allowClear
  placeholder="This is placeholder"
/>
```
Search:

enterButton

```jsx
<Input.Search
  enterButton
  allowClear
  placeholder="This is placeholder"
/>
```
Search:

```jsx
<Input.Search
  placeholder="This is placeholder"
/>
```
TextArea:

```jsx
<Input.TextArea
  // rows={3}
  autoSize
  placeholder="This is placeholder"
/>
```
Controlled:

```jsx
import React from 'react';
import Button from '../Button';

const [value, setValue] = React.useState();

<>
  <Button type="primary" style={{ marginBottom: 8 }} onClick={() => setValue(undefined)}>Clear Value</Button>
  <Input
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder="This is placeholder"
  />
</>
```
Input.Password:

使用 Input.Password 时，suffix 和 type 属性将失效

```jsx
import { BsLock, BsUnlock } from 'react-icons/ai';

<Input.Password
  // visibilityToggle={false}
  placeholder="This is placeholder"
/>
```
Input.Limit:

maxLength 必填

```jsx
<Input.Limit
  maxLength={20}
  placeholder="This is placeholder"
/>
```

AllowClear:

```jsx
<Input
  allowClear
  placeholder="This is placeholder"
/>
```
AddonBefore & AddonAfter:

```jsx
<Input
  addonBefore="http://"
  allowClear
  addonAfter=".com"
  placeholder="This is placeholder"
/>
```
Prefix & Suffix:

```jsx
<Input
  prefix="￥"
  suffix="RMB"
  allowClear
  placeholder="This is placeholder"
/>
```
Disabled:

```jsx
<Input
  disabled
  placeholder="This is placeholder"
/>
```
