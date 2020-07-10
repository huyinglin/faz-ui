Basic Carousel:

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
renderBar Carousel:

animation: CarouselAnimation; // 面板过渡动画
nextBar?: React.ReactElement; // 自定义渲染下一张箭头
prevBar?: React.ReactElement; // 自定义渲染上一张箭头
dot: Dot; // 自定义渲染单个面板指示点

```jsx

```

onChange

```jsx
import React, { useState } from 'react';

const [activeKey, setActiveKey] = useState('1');

function onChange(key) {
  console.log('key:', key);
  setActiveKey(key);
}

<Carousel activeKey={activeKey} onChange={onChange}>
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

autoplay

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