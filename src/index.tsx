import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Button from './components/Button/button';

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Button>
        default
      </Button>
      <Button
        type="primary"
        size="lg"
      >
        lg primary
      </Button>
      <Button
        size="sm"
        type="danger"
      >
        sm danger
      </Button>
      <Button
        disabled
      >
        disabled
      </Button>
      <Button
        disabled
        type="primary"
      >
        disabled primary
      </Button>
      <Button
        type="link"
        href="www.baidu.com"
      >
        link
      </Button>
      <Button
        type="link"
        href="www.baidu.com"
        disabled
      >
        disabled link
      </Button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
