
## Notification 通知提醒框
---
### 基本用法

```jsx
/**
 * title: Basic
 * desc: 最简单的用法，4.5 秒后自动关闭。
 */

import React from 'react';
import { Button, Notification } from 'faz-ui';

let val = 0;

function onOpen() {
  Notification.open({
    title: 'Notification ' + val++,
    description: 'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
  });
}

export default () => <Button onClick={onOpen} type="primary">Open the Notification</Button>
```
### 自动关闭的延时

```jsx
/**
 * title: Duration
 * desc: 自定义通知框自动关闭的延时，单位：毫秒，默认 4500。取消自动关闭只要将该值设为 null 即可。
 */

import React from 'react';
import { Button, Notification } from 'faz-ui';

function onOpen(duration) {
  Notification.open({
    title: 'Notification Title',
    duration,
    description: 'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
  });
}

export default () =>
  <div>
    <Button onClick={() => onOpen(undefined)} type="primary" style={{ margin: 8 }}>Default</Button>
    <Button onClick={() => onOpen(2000)} type="primary" style={{ margin: 8 }}>2s</Button>
    <Button onClick={() => onOpen(10000)} type="primary" style={{ margin: 8 }}>10s</Button>
    <Button onClick={() => onOpen(null)} type="primary" style={{ margin: 8 }}>不关闭</Button>
  </div>
```
### 带有图标的通知提醒框

```jsx
/**
 * title: Type
 * desc: 通知提醒框左侧有图标。
 */

import React from 'react';
import { Button, Notification } from 'faz-ui';

const openNotificationWithIcon = type => {
  Notification[type]({
    title: 'Notification Title',
    duration: null,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default () =>
  <div>
    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>
```
### 位置

```jsx
/**
 * title: Placement
 * desc: 通知从右上角、右下角、左下角、左上角弹出。
 */

import React from 'react';
import { Button, Notification } from 'faz-ui';

const openNotification = placement => {
  Notification.info({
    title: `Notification Title ${placement}`,
    placement,
    duration: null,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default () =>
  <div>
    <Button style={{ marginRight: 8 }} onClick={() => openNotification('topLeft')}>topLeft</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotification('topRight')}>topRight</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomLeft')}>bottomLeft</Button>
    <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomRight')}>bottomRight</Button>
  </div>
```

## API

- Notification.success(config)
- Notification.error(config)
- Notification.info(config)
- Notification.warning(config)
- Notification.open(config)
- Notification.close(key: string)

config 参数如下：

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| title | 通知提醒标题，必选 | React.ReactNode | - |
| description | 通知提醒内容，必选 | React.ReactNode | - |
| closeIcon | 自定义关闭图标 | React.ReactNode | - |
| key | 当前通知唯一标志 | React.Key | - |
| placement | 弹出位置 | `topLeft` `topRight` `bottomLeft` `bottomRight` | `topRight` |
| style | 自定义内联样式 | React.CSSProperties | - |
| className | 自定义类名 | string | - |
| duration | 自动关闭时长，单位：毫秒。为 null 时不关闭 | number &#124 null | 4500 |
| closable | 是否可关闭 | boolean | true |
| onClose | 当通知关闭时触发 | `(key?: React.Key) => void` | - |
| onClick | 点击通知时触发的回调函数 | `(key?: React.Key) => void` | - |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- Notification.config(options)

options 参数如下：

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| maxCount | 最大消息数 | number | - |
| zIndex | 弹出框层级 | number | 1000 |
| placement | 弹出位置 | `topLeft` `topRight` `bottomLeft` `bottomRight` | `topRight` |
| position | 弹出位置距离文档的位置 | { top?: string; bottom?: string; left?: string; right?: string; }  | - |