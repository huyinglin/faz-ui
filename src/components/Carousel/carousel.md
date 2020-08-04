### **EXAMPLES**

**Basic Carousel**

```jsx
import styled from 'styled-components';
import Carousel from 'faz-ui/Carousel';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

<Carousel>
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

**OnChange**

切换面板的回调

```jsx
import React, { useState } from 'react';
import styled from 'styled-components';

function onChange(key) {
  console.log('key:', key);
}

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**Autoplay & AutoplayDuration**

设置是否自动切换和自动切换的时间间隔

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

<Carousel
  autoplay={true}
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

**ShowDots**

是否展示面板指示点

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**DotType**

面板指示点类型，可选 `line` | `circle`

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

面板指示点样式

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**Animation**

自定义面板切换动画，可定义 timingFunction | duration | delay

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**Arrows**

是否展示上一页下一页导航箭头

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**NextArrow & PrevArrow**

自定义上一页下一页导航箭头

```jsx
import styled from 'styled-components';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

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

**Methods**

使用 ref 调用以下方法

prev: () => void;

next: () => void;

goto: (key: React.Key, lockAnimation: boolean) => void;

```jsx
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

const CarouselView = styled.h3`
  margin: 0;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: ${props => props.background};
`;

const carouselRef = useRef(null);

<>
  <Button style={{ margin: 8 }} onClick={() => carouselRef.current.prev()}>
    prev
  </Button>
  <Button style={{ margin: 8 }} onClick={() => carouselRef.current.next()}>
    next
  </Button>
  <Input
    style={{ margin: 8 }}
    placeholder="input goto key"
    onChange={e => carouselRef.current.goto(e.target.value, true)}
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
</>

```
