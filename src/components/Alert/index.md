## Alert 警告提示

---

### 基本

```jsx
/**
 * title: Basic Alert
 * desc: 最简单的用法，适用于简短的警告提示。
 * hideActions:
 *   - CSB
 */

import React from 'react';
import { Alert } from 'faz-ui';

export default () => <Alert message="This is Info alert!" />;
```

### 四种样式

```jsx
/**
 * title: Type
 * desc: 共有四种样式 success、info、warning、error。
 */

import React from 'react';
import { Alert } from 'faz-ui';

export default () => (
  <div>
    <Alert message="Success Text" type="success" style={{ marginBottom: 8 }} />
    <Alert message="Info Text" type="info" style={{ marginBottom: 8 }} />
    <Alert message="Warning Text" type="warning" style={{ marginBottom: 8 }} />
    <Alert message="Danger Text" type="danger" style={{ marginBottom: 8 }} />
  </div>
);
```

### 含有辅助性文字介绍

```jsx
/**
 * title: Description
 * desc: 含有辅助性文字介绍的警告提示。
 */

import React from 'react';
import { Alert } from 'faz-ui';

export default () => (
  <div>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
      style={{ marginBottom: 8 }}
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      style={{ marginBottom: 8 }}
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
      style={{ marginBottom: 8 }}
    />
    <Alert
      message="Danger Text"
      description="Error Description Error Description Error Description Error Description"
      type="danger"
      style={{ marginBottom: 8 }}
    />
  </div>
);
```

### 可关闭的警告提示

```jsx
/**
 * title: Closable
 * desc: 显示关闭按钮，点击可关闭警告提示。
 */

import React from 'react';
import { Alert } from 'faz-ui';

export default () => (
  <div>
    <Alert
      message="Info Text"
      closable
      onClose={e => console.log(e, 'I was closed.')}
      style={{ marginBottom: 8 }}
    />
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
      closable
    />
  </div>
);
```

### 图标

```jsx
/**
 * title: ShowIcon
 * desc: 合适的图标让信息类型更加醒目。
 */

import React from 'react';
import { Alert } from 'faz-ui';

export default () => (
  <div>
    <Alert
      showIcon
      message="Success Text"
      type="success"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Info Text"
      type="info"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Warning Text"
      type="warning"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Danger Text"
      type="danger"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
      style={{ marginBottom: 8 }}
    />
    <Alert
      showIcon
      message="Danger Text"
      description="Error Description Error Description Error Description Error Description"
      type="danger"
      style={{ marginBottom: 8 }}
    />
  </div>
);
```

## API

| 属性        | 说明                     | 类型                                            | 默认值 |
| ----------- | ------------------------ | ----------------------------------------------- | ------ |
| closable    | 是否显示关闭按钮         | boolean                                         | false  |
| type        | 指定警告提示的类型       | `success` `info` `danger` `warning`             | `info` |
| message     | 警告提示内容             | string                                          | -      |
| description | 警告提示的辅助性文字介绍 | string                                          | -      |
| showIcon    | 是否显示辅助图标         | boolean                                         | false  |
| className   | 设置类名                 | string                                          | -      |
| style       | 设置样式                 | React.CSSProperties                             | -      |
| onClose     | 关闭时触发的回调函数     | `(e: React.MouseEvent<HTMLDivElement>) => void` | -      |
