Basic Input:

```jsx
import React, { useRef, useEffect } from 'react';

const ref = useRef(null);

function onChange(e) {
  console.log('onChange', e.target.value);
}

function onPressEnter(e) {
  console.log('onPressEnter', e.keyCode);
}

useEffect(() => {
  console.log('input', ref.current.element.type)
});

<>
  <button onClick={() => ref.current.focus()}>focus</button>
  <button onClick={() => ref.current.blur()}>blur</button>
  <button onClick={() => ref.current.select()}>select</button>
  <Input.Search
    ref={ref}
    defaultValue="323"
    onChange={onChange}
    allowClear
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
  defaultValue="323"
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

const [value, setValue] = React.useState();

<>
  <button onClick={() => setValue(undefined)}>click</button>
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
  addonBefore="http://"
  addonAfter=".com"
  allowClear
  placeholder="This is placeholder"
/>
```
Prefix & Suffix:

```jsx
<Input
  prefix="￥"
  allowClear
  suffix="RMB"
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
