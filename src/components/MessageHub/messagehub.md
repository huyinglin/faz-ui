Basic MessageHub:

```jsx
import { useEffect } from 'react';
import Button from '../Button';

let messagehub = null;
let key = 0;

useEffect(() => {
  MessageHub.newInstance({
    // maxCount: 3
    placement: 'topLeft',
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
  <Button onClick={onOpen}>click</Button>
  <Button onClick={() => messagehub.close(--key)}>close</Button>
</>
```
