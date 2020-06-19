Basic Tabs:

```jsx
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

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
```
Disabled:

```jsx
const { TabPane } = Tabs;

<Tabs defaultActiveKey="1">
  <TabPane tab="Tab 1" key="1">
    Content of Tab Pane 1
  </TabPane>
  <TabPane tab="Tab 2" key="2" disabled>
    Content of Tab Pane 2
  </TabPane>
  <TabPane tab="Tab 3" key="3">
    Content of Tab Pane 3
  </TabPane>
</Tabs>
```
Tab position:

```jsx
import React from 'react';

const { TabPane } = Tabs;

const [position, setPosition] = React.useState('top');

<div>
  <div>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setPosition('top')}>Top</span>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setPosition('bottom')}>Buttom</span>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setPosition('right')}>Right</span>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setPosition('left')}>Left</span>
  </div>

  <Tabs defaultActiveKey="1" tabPosition={position}>
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
</div>
```
Tab size:

```jsx
import React from 'react';

const { TabPane } = Tabs;

const [size, setSize] = React.useState('default');

<div>
  <div>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setSize('default')}>Default</span>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setSize('large')}>Large</span>
    <span style={{ margin: 8, cursor: 'pointer' }} onClick={() => setSize('small')}>Small</span>
  </div>

  <Tabs defaultActiveKey="1" size={size}>
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
</div>
```
