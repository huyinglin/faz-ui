Basic Notification:

```jsx
import { useEffect } from 'react';

let notification = null;
let key = 0;

useEffect(() => {
  Notification.newInstance({}, n => {
    notification = n;
  });
}, []);

function onOpen() {
  notification.open({
    key: key++,
    content: 44444 + key,
    closable: true,
  });
}

<>
  <button onClick={onOpen}>click</button>
  <button onClick={() => notification.remove(key--)}>close</button>
</>
```
