Basic Notification:

```jsx
import Button from '../Button';

let val = 0;

function onOpen() {
  Notification.open({
    title: 'NotificationT' + val++,
    description: 'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
  });
}

<Button onClick={onOpen}>click</Button>
```

```jsx
import Button from '../Button';

const openNotificationWithIcon = type => {
  Notification[type]({
    title: 'Notification Title',
    duration: null,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

<>
  <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('success')}>Success</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('info')}>Info</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('error')}>Error</Button>
</>
```

```jsx
import Button from '../Button';

const openNotification = placement => {
  Notification.info({
    title: `Notification Title ${placement}`,
    placement,
    duration: null,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

<>
  <Button style={{ marginRight: 8 }} onClick={() => openNotification('topLeft')}>topLeft</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotification('topRight')}>topRight</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomLeft')}>bottomLeft</Button>
  <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomRight')}>bottomRight</Button>
</>
```
