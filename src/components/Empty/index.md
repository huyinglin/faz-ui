## Empty 空状态
---

### 基本用法

```jsx
/**
 * title: Basic
 * desc: 最简单的用法。
 */

import React from 'react';
import { Empty } from 'faz-ui';

export default () => <Empty/>
```
### 自定义图片

```jsx
/**
 * title: Image & Size
 * desc: 通过 image 属性自定义图片，通过 size 设置图片大小。
 */

import React from 'react';
import { Empty } from 'faz-ui';
import { AiOutlineDropbox } from "react-icons/ai";

export default () => <Empty image={<AiOutlineDropbox/>}/>
```
