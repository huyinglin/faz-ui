Basic Message:

第二个参数为 null 时不关闭。

```jsx
import Button from '../Button';

function onOpen() {
  Message.success('这是提示3');
  // Message.info('这是提示', null);
  // Message.warning('这是提示', null);
  // Message.error('这是提示', null);
}

<Button onClick={onOpen} type="primary">click</Button>
```
