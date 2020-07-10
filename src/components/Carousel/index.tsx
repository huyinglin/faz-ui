import Carousel from './Carousel';
import React from 'react';
export function test() {

  return (
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
  )
}