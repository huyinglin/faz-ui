import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Button from './components/Button/button';
import Alert from './components/Alert/alert';
import Toc from './tox';

function App() {
  return (
    <div>
      <div style={{ margin: 20, display: 'flex', justifyContent: 'space-evenly' }}>
        <Button>
          default
        </Button>
        <Button
          type="primary"
          size="lg"
          onClick={() => alert(43)}
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
          target="_blank"
          href="www.baidu.com"
        >
          link
        </Button>
        <Button
          type="link"
          href="https://www.baidu.com"
          disabled
        >
          disabled link
        </Button>
      </div>
      <div style={{ width: '50%', margin: 20 }}>
        <Alert
          message="this is alert!"
          type="info"
        />
        <Alert
          message="this is alert!"
          type="success"
          closable
        />
        <Alert
          message="this is alert!"
          type="warning"
          description="this is a description"
          closable
        />
        <Alert
          message="this is alert!"
          type="danger"
          closable
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Toc />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
