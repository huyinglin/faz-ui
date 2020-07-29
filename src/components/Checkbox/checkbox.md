Basic Checkbox:

```jsx
<Checkbox defaultChecked>Checkbox</Checkbox>
```
受控的 Checkbox:

```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(true);
const [disabled, setDisabled] = useState(false);

function onChange(e) {
  console.log(e.target.checked);
  setChecked(e.target.checked);
}

<>
  <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
    {checked ? 'Checked' : 'Unchecked'}-{disabled ? 'Disabled' : 'Enabled'}
  </Checkbox>
  <div style={{ marginTop: 16 }}>
    <button style={{ marginRight: 8 }} onClick={() => setChecked(!checked)}>{checked ? 'Check' : 'Uncheck'}</button>
    <button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</button>
  </div>
</>
```
Disabled Checkbox:

```jsx
<Checkbox checked disabled></Checkbox>
<Checkbox disabled></Checkbox>
<Checkbox checked disabled>Checkbox</Checkbox>
<Checkbox disabled>Checkbox</Checkbox>
```
