Basic Popconfirm:

更多属性请参考 Tooltip。

请确保 Popconfirm 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。

```jsx
import message from '../Message';
import Button from '../Button';

function confirm(e) {
  console.log(e);
  message.success('点击了确认');
}

function cancel(e) {
  console.log(e);
  message.error('点击了取消');
}

<Popconfirm
  title="确定删除此记录吗?"
  onConfirm={confirm}
  onCancel={cancel}
>
  <Button type="primary" danger>Delete</Button>
</Popconfirm>
```
Icon & ConfirmButton & CancelButton:

当 title 为 null 时，不显示 Popconfirm。

```jsx
import message from '../Message';
import Button from '../Button';
import { AiOutlineQuestionCircle } from "react-icons/ai";

function confirm(e) {
  console.log(e);
  message.success('点击了确认');
}

function cancel(e) {
  console.log(e);
  message.error('点击了取消');
}

<Popconfirm
  title="确定删除此记录吗?"
  onConfirm={confirm}
  onCancel={cancel}
  confirmButton={{ text: '删除' }}
  icon={<AiOutlineQuestionCircle style={{ color: 'red' }}/>}

>
  <Button type="primary" danger>Delete</Button>
</Popconfirm>
```
