### **EXAMPLES**

**Basic Carousel**

```jsx
<Carousel>
  <Carousel.Item key="1">
    <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
  </Carousel.Item>
  <Carousel.Item key="2">
    <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
  </Carousel.Item>
  <Carousel.Item key="3">
    <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
  </Carousel.Item>
</Carousel>
```

onChange

```jsx
import React, { useState } from 'react';

const [activeKey, setActiveKey] = useState('1');

function onChange(key) {
  console.log('key:', key); // 问题： key 会调两次
  setActiveKey(key);
}

<Carousel onChange={onChange}>
  <Carousel.Item key="1">
    <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
  </Carousel.Item>
  <Carousel.Item key="2">
    <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
  </Carousel.Item>
  <Carousel.Item key="3">
    <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
  </Carousel.Item>
</Carousel>
```

配置切换 page 的动画


```jsx
<Carousel animation={{ timingFunction: 'ease', duration: 0.3, delay: 0 }}>
  <Carousel.Item key="1">
    <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
  </Carousel.Item>
  <Carousel.Item key="2">
    <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
  </Carousel.Item>
  <Carousel.Item key="3">
    <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
  </Carousel.Item>
</Carousel>
```

自定义渲染单个面板指示点


```jsx
<Carousel nextArrow=">" prevArrow="<">
  <Carousel.Item key="1">
    <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
  </Carousel.Item>
  <Carousel.Item key="2">
    <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
  </Carousel.Item>
  <Carousel.Item key="3">
    <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
  </Carousel.Item>
</Carousel>
```

nextArrow: React.ReactElement;

prevArrow: React.ReactElement;

```jsx
<Carousel nextArrow=">" prevArrow="<">
  <Carousel.Item key="1">
    <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
  </Carousel.Item>
  <Carousel.Item key="2">
    <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
  </Carousel.Item>
  <Carousel.Item key="3">
    <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
  </Carousel.Item>
</Carousel>
```

Methods:

prev: () => void;

next: () => void;

goto: (key: React.Key, lockAnimation: boolean) => void;

```jsx
import React, { useState, useRef } from 'react';

const carouselRef = useRef(null);
const [autoplay, setAutoplay] = useState(false);

<div>
  <button style={{ margin: 8 }} onClick={() => carouselRef.current.prev()}>
    prev
  </button>
  <button style={{ margin: 8 }} onClick={() => carouselRef.current.next()}>
    next
  </button>
  <input
    style={{ margin: 8 }}
    placeholder="input goto key"
    onChange={e => carouselRef.current.goto(e.target.value, true)}
  />
  <Carousel
    ref={carouselRef}
    style={{ marginTop: 16 }}
  >
    <Carousel.Item key="1">
      <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
    </Carousel.Item>
    <Carousel.Item key="2">
      <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
    </Carousel.Item>
    <Carousel.Item key="3">
      <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
    </Carousel.Item>
  </Carousel>
</div>

```

autoplay & autoplayDuration

```jsx
import React, { useState } from 'react';

const [autoplay, setAutoplay] = useState(false);

<>
  <button onClick={() => setAutoplay(prev => !prev)}>
    autoplay: {autoplay ? '开' : '关'}
  </button>
  <Carousel
    autoplay={autoplay}
    autoplayDuration={2 * 1000}
    style={{ marginTop: 16 }}
  >
    <Carousel.Item key="1">
      <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
    </Carousel.Item>
    <Carousel.Item key="2">
      <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
    </Carousel.Item>
    <Carousel.Item key="3">
      <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
    </Carousel.Item>
  </Carousel>
</>

```

controls

```jsx
import React, { useState } from 'react';

const [controls, setControls] = useState(false);

<>
  <button onClick={() => setControls(prev => !prev)}>
    controls: {controls ? '开' : '关'}
  </button>
  <Carousel
    controls={controls}
    style={{ marginTop: 16 }}
  >
    <Carousel.Item key="1">
      <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
    </Carousel.Item>
    <Carousel.Item key="2">
      <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
    </Carousel.Item>
    <Carousel.Item key="3">
      <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
    </Carousel.Item>
  </Carousel>
</>

```

showDots

```jsx
import React, { useState } from 'react';

const [showDots, setShowDots] = useState(false);

<>
  <button onClick={() => setShowDots(prev => !prev)}>
    controls: {showDots ? '开' : '关'}
  </button>
  <Carousel
    showDots={showDots}
    style={{ marginTop: 16 }}
  >
    <Carousel.Item key="1">
      <h3 style={{ margin: 0, background: 'yellowgreen' }}>1</h3>
    </Carousel.Item>
    <Carousel.Item key="2">
      <h3 style={{ margin: 0, background: 'blueviolet' }}>2</h3>
    </Carousel.Item>
    <Carousel.Item key="3">
      <h3 style={{ margin: 0, background: 'pink' }}>3</h3>
    </Carousel.Item>
  </Carousel>
</>

```