Basic Switch:

```jsx
<Switch defaultChecked>Switch</Switch>
<Switch defaultChecked color="rgb(220, 0, 78)" />
<Switch defaultChecked color="#43a047" />
```
Size:

```jsx
<Switch size="default"/>
<Switch size="small"/>
```

文字和图标:

```jsx
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

<>
  <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
  <br />
  <Switch checkedChildren="1" unCheckedChildren="0" />
  <br />
  <Switch
    checkedChildren={<AiOutlineCheck />}
    unCheckedChildren={<AiOutlineClose />}
    defaultChecked
  />
</>
```
Disabled:

```jsx
import { useState } from 'react';
import Button from '../Button';

const [disabled, setDisabled] = useState(true);

<>
  <Button style={{ marginBottom: 8 }} onClick={() => setDisabled(!disabled)}>Toggle disabled</Button>
  <br/>
  <Switch disabled={disabled}/>
</>
```
