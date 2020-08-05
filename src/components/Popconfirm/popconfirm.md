Basic Popconfirm:

```jsx
import message from '../Message';
import Button from '../Button';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

<Popconfirm
  title="确定删除此记录吗?"
  onConfirm={confirm}
  onCancel={cancel}
>
  <Button type="primary" danger>Delete</Button>
</Popconfirm>
```
