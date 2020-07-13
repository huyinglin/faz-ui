Basic Tabs:

```jsx
import React, { useState } from 'react';

const { TabPane } = Tabs;
const [activeKey, setActiveKey] = useState('1');
console.log('activeKey: ', activeKey);

function callback(key) {
  setActiveKey(key);
  console.log(key);
}

<Tabs activeKey={activeKey} onChange={callback}>
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
Tab scroll:

```jsx
const { TabPane } = Tabs;

<Tabs defaultActiveKey="1">
  <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
  <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
  <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
  <TabPane tab="Tab 5" key="5">Content of Tab Pane 5</TabPane>
  <TabPane tab="Tab 6" key="6">Content of Tab Pane 6</TabPane>
  <TabPane tab="Tab 7" key="7">Content of Tab Pane 7</TabPane>
  <TabPane tab="Tab 8" key="8">Content of Tab Pane 8</TabPane>
  <TabPane tab="Tab 9" key="9">Content of Tab Pane 9</TabPane>
  <TabPane tab="Tab 10" key="10">Content of Tab Pane 10</TabPane>
  <TabPane tab="Tab 11" key="11">Content of Tab Pane 11</TabPane>
  <TabPane tab="Tab 12" key="12">Content of Tab Pane 12</TabPane>
  <TabPane tab="Tab 13" key="13">Content of Tab Pane 13</TabPane>
  <TabPane tab="Tab 14" key="14">Content of Tab Pane 14</TabPane>
  <TabPane tab="Tab 15" key="15">Content of Tab Pane 15</TabPane>
  <TabPane tab="Tab 16" key="16">Content of Tab Pane 16</TabPane>
  <TabPane tab="Tab 17" key="17">Content of Tab Pane 17</TabPane>
  <TabPane tab="Tab 18" key="18">Content of Tab Pane 18</TabPane>
  <TabPane tab="Tab 19" key="19">Content of Tab Pane 19</TabPane>
  <TabPane tab="Tab 20" key="20">Content of Tab Pane 20</TabPane>
</Tabs>
```
