import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border: 1px solid #fff;
  vertical-align: middle;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
`;

function App() {
  const x = '❌';
  const o = '⭕️';

  let pattern = [
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];

  function renderLine() {

  }

  return (
    <div>
      {pattern.map((item: number[]) => {
        <Line>{item.map((it: number) => {
          <Line>{it}</Line>
        })}</Line>
      })}
    </div>
  )
}

export default App;
