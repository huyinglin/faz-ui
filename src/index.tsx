import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Button from './components/Button/button';

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Button
        className="test"
        disabled
        size="lg"
      >
        faz
      </Button>
      <Button
        className="test"
        disabled
        type="primary"
      >
        faz
      </Button>
      <Button
        className="test"
        size="sm"
        type="link"
        href="www.baidu.com"
      >
        faz
      </Button>
      faz
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
