Basic Tooltip:

```jsx
<Tooltip title="Tooltip"><span>Tooltip</span></Tooltip>
```
Trigger:

```jsx
<>
  <Tooltip title="Tooltip"><button>Click</button></Tooltip>
  <br/>
  <Tooltip title="Tooltip"><span>focus</span></Tooltip>
  <br/>
  <Tooltip title="Tooltip"><span>Tooltip</span></Tooltip>
</>
```
EnterDelay & LeaveDelay:

```jsx
<Tooltip enterDelay={0} leaveDelay={0} title="Tooltip">
  <span>Tooltip</span>
</Tooltip>
```
Colors:

```jsx

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

<div>
  {colors.map(color => (
    <Tooltip title="prompt text" color={color} key={color}>
      <button style={{ margin: 8 }}>{color}</button>
    </Tooltip>
  ))}
  <br/>
  {customColors.map(color => (
    <Tooltip title="prompt text" color={color} key={color}>
      <span style={{ margin: 8 }}>{color}</span>
    </Tooltip>
  ))}
</div>
```
Controlled Tooltip:

```jsx
import { useState } from 'react';

const [visible, setVisible] = useState(false);

function onChange(value) {
  console.log('visible', value);
  setVisible(value);
}

<Tooltip
  defaultVisible={true}
  visible={visible}
  onChange={onChange}
  title="Tooltip"
>
  <span>Tooltip</span>
</Tooltip>
```
