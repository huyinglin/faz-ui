Basic Input:

```jsx
import React, { useRef, useEffect } from 'react';

const ref = useRef(null);

function onFocus(e) {
  console.log('onFocus', e.target.value);
}

function onBlur(e) {
  console.log('onBlur', e.target.value);
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
  <Input
    ref={ref}
    defaultValue="323"
    onFocus={onFocus}
    onBlur={onBlur}
    onPressEnter={onPressEnter}
    placeholder="This is placeholder"
  />
</>
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
