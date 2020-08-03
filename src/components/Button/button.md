Button 类型:

可选 primary、dashed、danger、link、text、default

```jsx
<Button type="primary" style={{ margin: 8 }}>Primary Button</Button>
<Button style={{ margin: 8 }}>Default Button</Button>
<Button type="dashed" style={{ margin: 8 }}>Dashed Button</Button>
<br />
<Button type="text" style={{ margin: 8 }}>Text Button</Button>
<Button type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link Button</Button>
```
Shape:

可选 circle、round

```jsx
import { AiOutlineSearch } from "react-icons/ai";

<>
  <Button style={{ margin: 8 }} type="primary" shape="circle" icon={<AiOutlineSearch />} />
  <Button style={{ margin: 8 }} type="primary" shape="round" icon={<AiOutlineSearch />} />
  <Button style={{ margin: 8 }} type="primary" shape="round" icon={<AiOutlineSearch />}>
    Search
  </Button>
  <Button shape="circle" style={{ margin: 8 }}>A</Button>
  <Button shape="round" style={{ margin: 8 }}>Round Shape Button</Button>
</>
```
Size:

可选 large、small、default

```jsx
<Button size="large" style={{ margin: 8 }}>Large Button</Button>
<Button size="default" style={{ margin: 8 }}>Default Button</Button>
<Button size="small" style={{ margin: 8 }}>Small Button</Button>
<br/>
<Button size="large" type="text" style={{ margin: 8 }}>Large Text Button</Button>
<Button size="default" type="text" style={{ margin: 8 }}>Default Text Button</Button>
<Button size="small" type="text" style={{ margin: 8 }}>Small Text Button</Button>
<br/>
<Button size="large" type="link"  href="https://www.baidu.com" style={{ margin: 8 }}>Large Link Button</Button>
<Button size="default" type="link"  href="https://www.baidu.com" style={{ margin: 8 }}>Default Link Button</Button>
<Button size="small" type="link"  href="https://www.baidu.com" style={{ margin: 8 }}>Small Link Button</Button>
<br/>
<Button size="large" shape="circle" style={{ margin: 8 }}>A</Button>
<Button size="default" shape="circle" style={{ margin: 8 }}>A</Button>
<Button size="small" shape="circle" style={{ margin: 8 }}>A</Button>
<br/>
<Button size="large" shape="round" style={{ margin: 8 }}>Large Round Button</Button>
<Button size="default" shape="round" style={{ margin: 8 }}>Default Round Button</Button>
<Button size="small" shape="round" style={{ margin: 8 }}>Small Round Button</Button>
```
Icon:

```jsx
import { AiOutlineSearch } from "react-icons/ai";

<>
  <Button style={{ margin: 8 }} type="primary" shape="circle" icon={<AiOutlineSearch />} />
  <Button style={{ margin: 8 }} type="primary" icon={<AiOutlineSearch />}>
    Search
  </Button>
  <Button style={{ margin: 8 }} icon={<AiOutlineSearch />}>
    Search
  </Button>
</>
```
Disabled:

```jsx
<Button type="primary" style={{ margin: 8 }} disabled>Primary Button</Button>
<Button type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }} disabled>Link Button</Button>
```
Block:

block 属性将使按钮适合其父宽度。

```jsx
<Button block type="primary" style={{ margin: 8 }}>Primary</Button>
<Button block style={{ margin: 8 }}>Default</Button>
<Button block type="dashed" style={{ margin: 8 }}>Dashed</Button>
<Button block type="text" style={{ margin: 8 }}>Text</Button>
<Button block type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
```
Ghost:

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```jsx
<div style={{ background: 'rgb(190, 200, 200)' }}>
  <Button ghost type="primary" style={{ margin: 8 }}>Primary</Button>
  <Button ghost style={{ margin: 8 }}>Default</Button>
  <Button ghost type="dashed" style={{ margin: 8 }}>Dashed</Button>
  <Button ghost type="text" style={{ margin: 8 }}>Text</Button>
  <Button ghost type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
</div>
```
Danger:

危险按钮。

```jsx
<Button danger type="primary" style={{ margin: 8 }}>Primary</Button>
<Button danger style={{ margin: 8 }}>Default</Button>
<Button danger type="dashed" style={{ margin: 8 }}>Dashed</Button>
<Button danger type="text" style={{ margin: 8 }}>Text</Button>
<Button danger type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
```
