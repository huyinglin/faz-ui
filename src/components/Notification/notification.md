Basic Notification:

```jsx

let val = 0;

function onOpen() {
  Notification.open({
    title: 'NotificationT' + val++,
    description: 'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
    closable: false,
  });
}

<>
  <button onClick={onOpen}>click</button>
</>
```

```jsx

const openNotificationWithIcon = type => {
  Notification[type]({
    title: 'Notification Title',
    duration: null,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

<>
  <button onClick={() => openNotificationWithIcon('success')}>Success</button>
  <button onClick={() => openNotificationWithIcon('info')}>Info</button>
  <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
  <button onClick={() => openNotificationWithIcon('error')}>Error</button>
</>
```

```jsx

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
  <button onClick={() => openNotification('topLeft')}>topLeft</button>
  <button onClick={() => openNotification('topRight')}>topRight</button>
  <button onClick={() => openNotification('bottomLeft')}>bottomLeft</button>
  <button onClick={() => openNotification('bottomRight')}>bottomRight</button>
</>
```
