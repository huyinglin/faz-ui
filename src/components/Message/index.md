## Message 全局提示
---
### 普通提示

第二个参数为 null 时不关闭。

```jsx
/**
 * title: Basic
 * desc: 信息提醒反馈。
 */

import React from 'react';
import { Button, Message } from 'faz-ui';

function onOpen() {
  Message.success('这是提示3');
  // Message.info('这是提示', null);
  // Message.warning('这是提示', null);
  // Message.error('这是提示', null);
}

export default () => <Button onClick={onOpen} type="primary">click</Button>
```
