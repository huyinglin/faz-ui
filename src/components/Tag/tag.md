Basic Tag:

```jsx
<Tag>Tag</Tag>
<Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
```
**StyleConfig:**

设置标签的颜色，可设置 background、borderColor、color。同时，color 属性将失效。

```jsx
<Tag
  styleConfig={{
    background: '#fff',
    borderColor: '#108ee9',
    color: '#108ee9'
  }}
>
  Tag
</Tag>
```
CheckedBackground:

设置选中时标签的背景颜色

```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(true);

<Tag
  checkedBackground="#f50"
  checked={checked}
  onCheck={check => setChecked(check)}
>
  Tag
</Tag>
```
Preset Type Tag:

```jsx
<>
  <Tag color="success">success</Tag>
  <Tag color="processing">processing</Tag>
  <Tag color="error">error</Tag>
  <Tag color="warning">warning</Tag>
  <Tag color="default">default</Tag>
  <br/>
  <Tag color="#f50">#f50</Tag>
  <Tag color="#2db7f5">#2db7f5</Tag>
  <Tag color="#87d068">#87d068</Tag>
  <Tag color="#108ee9">#108ee9</Tag>
</>
```
Preset Color Tag:

当使用可选择标签时，closable 属性将失效

```jsx
<>
  <Tag color="pink">pink</Tag>
  <Tag color="yellow">yellow</Tag>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag>
  <Tag color="volcano">volcano</Tag>
  <Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>
  <Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag>
  <Tag color="cyan">cyan</Tag>
  <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag>
  <Tag color="purple">purple</Tag>
</>
```
Checkable Tag:

当使用可选择标签时，必须使用受控模式。同时 closable 属性将失效。

```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(true);

<>
  <Tag checked={checked} onCheck={check => setChecked(check)}>Tag</Tag>
</>
```
Icon Tag:

```jsx
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

<>
  <Tag icon={<AiOutlineTwitter />} color="#55acee">
    Twitter
  </Tag>
  <Tag icon={<AiOutlineYoutube />} color="#cd201f">
    Youtube
  </Tag>
  <Tag icon={<AiOutlineFacebook />} color="#3b5999">
    Facebook
  </Tag>
  <Tag icon={<AiOutlineLinkedin />} color="#55acee">
    LinkedIn
  </Tag>
</>
```
Visible Tag:

```jsx
import { useState } from 'react';

const [visible, setVisible] = useState(true);

<>
  <button style={{ marginRight: 8 }} onClick={() => setVisible(!visible)}>Toggle</button>
  <Tag visible={visible}>Tag</Tag>
</>
```
Closable Tag:

```jsx

function onClose(e) {
  console.log('onClose')
}

<Tag closable onClose={onClose}>Tag</Tag>
```
