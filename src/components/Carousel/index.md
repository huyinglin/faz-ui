## Carousel 走马灯
---

### 基本

```tsx
/**
 * title: Basic
 * desc: 最简单的用法。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 40px;
  background: ${props => props.background};
`;

function onChange(key: string) {
  console.log('key:', key);
}

export default () =>
  <Carousel onChange={onChange}>
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```

### 自动切换

```jsx
/**
 * title: Autoplay & AutoplayDuration
 * desc: 设置是否自动切换。使用 autoplayDuration 属性可设置自动切换时间， 单位：毫秒。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel
    autoplay
    autoplayDuration={2 * 1000}
  >
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```

### 面板指示点

```jsx
/**
 * title: ShowDots
 * desc: 是否展示面板指示点。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel showDots={false}>
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```
### 面板指示点类型

```jsx
/**
 * title: DotType
 * desc: 指定面板指示点类型，可选 `line` | `circle`。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel dotType="circle">
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```

**DotStyle**

### 面板指示点样式

```jsx
/**
 * title: DotStyle
 * desc: 设置面板指示点样式。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel
    dotStyle={{
      background: 'Crimson',
      width: 40,
      height: 3,
      margin: '0 4px',
      activeOpacity: .85,
      opacity: .25,
    }}
  >
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```
### 切换动画

```jsx
/**
 * title: Animation
 * desc: 自定义面板切换动画，可定义 timingFunction | duration | delay。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel animation={{ timingFunction: 'ease-in-out', duration: 0.3, delay: 0 }}>
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```
### 导航箭头

```jsx
/**
 * title: Arrows
 * desc: 是否展示上一页下一页导航箭头。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel arrows={false}>
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```
### 自定义导航箭头

```jsx
/**
 * title: NextArrow & PrevArrow
 * desc: 自定义上一页下一页导航箭头。
 */

import React from 'react';
import { Carousel } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

export default () =>
  <Carousel nextArrow=">" prevArrow="<">
    <Carousel.Item key="1">
      <CarouselView background="MediumAquaMarine">1</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="2">
      <CarouselView background="LightSeaGreen">2</CarouselView>
    </Carousel.Item>
    <Carousel.Item key="3">
      <CarouselView background="Coral">3</CarouselView>
    </Carousel.Item>
  </Carousel>
```

### 方法调用

```tsx
/**
 * title: Methods
 * desc: 使用 ref 可调用以下方法 prev()、next()、goto(key, lockAnimation)。
 */

import React, { useState, useRef } from 'react';
import { Carousel, Button, Input } from 'faz-ui';
import styled from 'styled-components';

const CarouselView = styled.h3`
  color: #fff;
  font-size: 40px;
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

const carouselRef = useRef(null);

function onPrev() {
  carouselRef?.current.prev();
}

function onNext() {
  carouselRef?.current.next();
}

function onGoto(key: string, lockAnimation: boolean) {
  carouselRef?.current.goto(key, lockAnimation);
}

export default () =>
  <div>
    <Button style={{ marginRight: 8 }} type="primary" onClick={onPrev}>
      Prev Page
    </Button>
    <Button style={{ marginRight: 8 }} type="primary" onClick={onNext}>
      Next Page
    </Button>
    <Input
      style={{ width: 200 }}
      placeholder="input goto key"
      onChange={e => onGoto(e.target.value, true)}
    />
    <Carousel ref={carouselRef} style={{ marginTop: 16 }}>
      <Carousel.Item key="1">
        <CarouselView background="MediumAquaMarine">1</CarouselView>
      </Carousel.Item>
      <Carousel.Item key="2">
        <CarouselView background="LightSeaGreen">2</CarouselView>
      </Carousel.Item>
      <Carousel.Item key="3">
        <CarouselView background="Coral">3</CarouselView>
      </Carousel.Item>
    </Carousel>
  </div>
```

## API

| 属性       | 说明  | 类型   | 默认值 |
| --------- | ----- | ------ | --    |
| autoplay | 是否自动切换 | boolean | true|
| autoplayDuration | 自动切换间隔时长 | number | 3000 |
| arrows | 是否展示上一页下一页导航箭头 | boolean | true |
| showDots | 是否展示面板指示点 | boolean | true |
| animation | 自定义面板切换动画 | `{ timingFunction?: string; duration?: number; delay?: number; }` | {} |
| nextArrow | 自定义下一页导航箭头 | React.ReactNode | - |
| prevArrow | 自定义上一页导航箭头 | React.ReactNode | - |
| dotType | 面板指示点类型 | `line` `circle`| `line` |
| dotStyle | 覆盖面板指示点样式 | object | {} |
| style | 设置 Carousel Wrapper 的样式 | React.CSSProperties | - |
| className | 设置 Carousel Wrapper 的类名 | string | - |
| onChange | 面板变化时的回调 | `(slideKey: React.Key) => void` | - |