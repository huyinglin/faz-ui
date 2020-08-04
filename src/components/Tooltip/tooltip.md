Basic Tooltip:

```jsx
<Tooltip title="Tooltip"><span>Tooltip</span></Tooltip>
```
Trigger:

支持三种触发方式，鼠标移入、聚集、点击。

```jsx
import Button from '../Button';

<>
  <Tooltip trigger="hover" title="Tooltip"><Button style={{ margin: 8 }}>Hover</Button></Tooltip>
  <Tooltip trigger="click" title="Tooltip"><Button style={{ margin: 8 }}>Click</Button></Tooltip>
  <Tooltip trigger="focus" title="Tooltip"><Button style={{ margin: 8 }}>Focus</Button></Tooltip>
  <Tooltip trigger={['click', 'hover']} title="Tooltip"><Button style={{ margin: 8 }}>Hover & Click</Button></Tooltip>
</>
```
EnterDelay & LeaveDelay:

设置鼠标移入移出后延时多少时间显示，单位：ms。

```jsx
import Button from '../Button';

<>
  <Tooltip enterDelay={0} leaveDelay={0} title="Tooltip">
    <Button>0ms</Button>
  </Tooltip>
  <Tooltip enterDelay={500} leaveDelay={500} title="Tooltip">
    <Button style={{ marginLeft: 16 }}>500ms</Button>
  </Tooltip>
  <Tooltip title="Tooltip">
    <Button style={{ marginLeft: 16 }}>default</Button>
  </Tooltip>
</>
```
Colors:

我们添加了多种预设色彩的文字提示样式，用作不同场景使用。

```jsx
import Button from '../Button';

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
      <Button style={{ margin: 8 }}>{color}</Button>
    </Tooltip>
  ))}
  <br/>
  {customColors.map(color => (
    <Tooltip title="prompt text" color={color} key={color}>
      <Button style={{ margin: 8 }}>{color}</Button>
    </Tooltip>
  ))}
</div>
```
Controlled Tooltip:

受控的 Tooltip，通过 visible 属性控制 Tooltip 显隠。

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
