Basic Message:

```jsx

function onOpen() {
  Message.success('这是提示3', null);
  Message.info('这是提示', null);
  Message.warning('这是提示', null);
  Message.error('这是提示', null);
}

<>
  <button onClick={onOpen}>click</button>
</>
```
