import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

// import './styles/index.scss';

// import Button from './components/Buttons';
import Modal from './components/Modal';
import Tabs from './components/Tabs';

const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

function App() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      {/* <Modal>
        test
      </Modal> */}
      {/* <div style={{ margin: 20, display: 'flex', justifyContent: 'space-evenly' }}>
        <Button>
          default
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={() => alert(43)}
        >
          lg primary
        </Button>
        <Button
          size="small"
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
      </div> */}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
