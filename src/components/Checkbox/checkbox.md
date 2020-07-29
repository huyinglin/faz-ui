Basic Checkbox:

```jsx
<Checkbox defaultChecked>Checkbox</Checkbox>
```
Icon & Color:

```jsx
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

<>
  <Checkbox
    icon={<MdFavoriteBorder/>}
    checkedIcon={<MdFavorite/>}
    color="rgb(220, 0, 78)"
    defaultChecked
  >
    Favorite
  </Checkbox>
  <Checkbox color="rgb(220, 0, 78)" defaultChecked>Checkbox</Checkbox>
  <Checkbox color="#43a047" defaultChecked>Checkbox</Checkbox>
  <Checkbox color="#1976d2" defaultChecked>Checkbox</Checkbox>
</>
```
Indeterminate:

设置 indeterminate 状态，只负责样式控制

```jsx
import { useState } from 'react';

const [checkList, setCheckList] = useState([]);

function onChange(value, e) {
  const { checked } = e.target;
  if (checked && !checkList.includes(value)) {
    setCheckList([...checkList, value]);
    return;
  }
  setCheckList(checkList.filter(it => it !== value));
}

function onCheckAll(e) {
  const { checked } = e.target;
  setCheckList(checked ? ["Pear", "Orange", "Apple"] : []);
}

<>
  <Checkbox
    indeterminate={checkList.length < 3 && checkList.length > 0}
    checked={checkList.length === 3}
    onChange={onCheckAll}
  >
    Check All
  </Checkbox>
  <hr/>
  <Checkbox checked={checkList.includes('Apple')} onChange={e => onChange('Apple', e)}>Apple</Checkbox>
  <Checkbox checked={checkList.includes('Pear')} onChange={e => onChange('Pear', e)}>Pear</Checkbox>
  <Checkbox checked={checkList.includes('Orange')} onChange={e => onChange('Orange', e)}>Orange</Checkbox>
</>
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
