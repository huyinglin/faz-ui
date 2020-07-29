Basic Radio:

```jsx
<Radio>Radio</Radio>
<Radio disabled>Radio</Radio>
```
Radio Group:

```jsx
import { useState } from 'react';

const [value, setValue] = useState(1);
const [mode, setMode] = useState('row');

function onChange(e) {
  console.log('value: ', e.target.value);
  setValue(e.target.value);
}
<>
  <button onClick={() => setMode(mode === 'row' ? 'col' : 'row')}>
    {mode === 'row' ? 'Row-Mode' : 'Col-Mode'}
  </button>
  <hr/>
  <Radio.Group name="radio-button-demo" mode={mode} onChange={onChange} value={value}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
</>

```
**Radio 可脱离 RadioGroup 单独使用**

```jsx
import { useState } from 'react';

const [selectedValue, setSelectedValue] = useState('a');

function handleChange(e) {
  setSelectedValue(e.target.value);
};

<>
  <Radio
    checked={selectedValue === 'a'}
    onChange={handleChange}
    value="a"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'A' }}
  />
  <Radio
    checked={selectedValue === 'b'}
    onChange={handleChange}
    value="b"
    color="rgb(220, 0, 78)"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'B' }}
  />
  <Radio
    checked={selectedValue === 'c'}
    onChange={handleChange}
    value="c"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'C' }}
  />
  <Radio
    checked={selectedValue === 'd'}
    onChange={handleChange}
    value="d"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'D' }}
  />
  <Radio
    checked={selectedValue === 'e'}
    onChange={handleChange}
    value="e"
    color="#43a047"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'E' }}
    size="small"
  />
</>
```
