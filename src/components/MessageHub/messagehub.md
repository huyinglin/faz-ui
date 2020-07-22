Basic MessageHub:

```jsx
import { useEffect } from 'react';

let messagehub = null;
let key = 0;

useEffect(() => {
  MessageHub.newInstance({
    // maxCount: 3
    placement: 'topRight',
    position: {
      top: 40,
      right: 10
    }
  }, instance => {
    messagehub = instance;
  });
}, []);

function onOpen() {
  messagehub.open({
    key: key++,
    content: 44444 + key,
    closable: true,
    // duration: 3000,
  });
}

<>
  <button onClick={onOpen}>click</button>
  <button onClick={() => messagehub.close(--key)}>close</button>
</>
```
