## Button 按钮
---
### 按钮类型

```jsx
/**
 * title: Type
 * desc: 可选 primary、dashed、danger、link、text、default。
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () =>
  <div>
    <Button type="primary" style={{ margin: 8 }}>Primary Button</Button>
    <Button style={{ margin: 8 }}>Default Button</Button>
    <Button type="dashed" style={{ margin: 8 }}>Dashed Button</Button>
    <br />
    <Button type="text" style={{ margin: 8 }}>Text Button</Button>
    <Button type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link Button</Button>
  </div>
```
### 按钮形状

```jsx
/**
 * title: Shape
 * desc: 可选 circle、round。
 */

import React from 'react';
import { Button } from 'faz-ui';
import { AiOutlineSearch } from "react-icons/ai";

export default () => (
  <div>
    <Button style={{ margin: 8 }} type="primary" shape="circle" icon={<AiOutlineSearch />} />
    <Button style={{ margin: 8 }} type="primary" shape="round" icon={<AiOutlineSearch />} />
    <Button style={{ margin: 8 }} type="primary" shape="round" icon={<AiOutlineSearch />}>
      Search
    </Button>
    <Button shape="circle" style={{ margin: 8 }}>A</Button>
    <Button shape="round" style={{ margin: 8 }}>Round Shape Button</Button>
  </div>
)
```
### 按钮尺寸

```jsx
/**
 * title: Size
 * desc: 可选 large、small、default。
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () => (
  <div>
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
  </div>
)
```

### 图标按钮

```jsx
/**
 * title: Icon
 * desc: 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
 */

import React from 'react';
import { Button } from 'faz-ui';
import { AiOutlineSearch } from "react-icons/ai";

export default () => (
  <div>
    <Button style={{ margin: 8 }} type="primary" shape="circle" icon={<AiOutlineSearch />} />
    <Button style={{ margin: 8 }} type="primary" icon={<AiOutlineSearch />}>
      Search
    </Button>
    <Button style={{ margin: 8 }} icon={<AiOutlineSearch />}>
      Search
    </Button>
  </div>
)
```
### 禁用状态

```jsx
/**
 * title: Disabled
 * desc: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () => (
  <div>
    <Button type="primary" style={{ margin: 8 }} disabled>Primary Button</Button>
    <Button type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }} disabled>Link Button</Button>
  </div>
)
```
### Block 按钮

```jsx
/**
 * title: Block
 * desc: block 属性将使按钮适合其父宽度。
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () => (
  <div>
    <Button block type="primary" style={{ margin: 8 }}>Primary</Button>
    <Button block style={{ margin: 8 }}>Default</Button>
    <Button block type="dashed" style={{ margin: 8 }}>Dashed</Button>
    <Button block type="text" style={{ margin: 8 }}>Text</Button>
    <Button block type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
  </div>
)
```
### 幽灵按钮

```jsx
/**
 * title: Ghost
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () => (
  <div style={{ background: 'rgb(190, 200, 200)' }}>
    <Button ghost type="primary" style={{ margin: 8 }}>Primary</Button>
    <Button ghost style={{ margin: 8 }}>Default</Button>
    <Button ghost type="dashed" style={{ margin: 8 }}>Dashed</Button>
    <Button ghost type="text" style={{ margin: 8 }}>Text</Button>
    <Button ghost type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
  </div>
)
```
### 危险按钮

```jsx
/**
 * title: Danger
 */

import React from 'react';
import { Button } from 'faz-ui';

export default () => (
  <div>
    <Button danger type="primary" style={{ margin: 8 }}>Primary</Button>
    <Button danger style={{ margin: 8 }}>Default</Button>
    <Button danger type="dashed" style={{ margin: 8 }}>Dashed</Button>
    <Button danger type="text" style={{ margin: 8 }}>Text</Button>
    <Button danger type="link" href="https://www.baidu.com" target="_blank" style={{ margin: 8 }}>Link</Button>
  </div>
)
```
### 加载中状态

```jsx
/**
 * title: Loading
 * desc: 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
 */

import React from 'react';
import { Button } from 'faz-ui';

const [loading, setLoading] = React.useState(false);

export default () => (
  <div>
    <Button
      type="primary"
      style={{ margin: 8 }}
      onClick={() => setLoading(!loading)}
    >
      Toggle Loading
    </Button>
    <br/>
    <Button loading={loading} type="primary" style={{ margin: 8 }}>Primary</Button>
    <Button loading={loading} style={{ margin: 8 }}>Default</Button>
  </div>
)
```

## API

支持原生 button 的其他所有属性。

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | ----- |
| size      | 设置按钮大小   | `large`  `small`  `default`  | `default` |
| type      | 设置按钮类型	 | `primary` `dashed` `danger` `link` `text` `default`  | `default` |
| shape     | 设置按钮形状   | `circle`  `round`  | - |
| disabled  | 按钮失效状态	 | boolean  | false |
| ghost     | 幽灵属性，使按钮背景透明 | boolean | false |
| loading   | 设置按钮载入状态 | boolean | false |
| danger    | 设置危险按钮	 | boolean | false |
| block     | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| icon      | 设置按钮的图标组件 | React.ReactNode | - |
| className | 设置按钮类名 | string | - |
| style     | 设置按钮样式 | React.CSSProperties | - |
| onClick   | 点击按钮时的回调 | `(e: React.MouseEvent<HTMLElement>) => void` | - |