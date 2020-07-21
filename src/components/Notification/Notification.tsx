import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import {
  NotificationProps,
  NotificationState,
  Notice,
} from './interface';
import {
  GlobalStyle,
  Message,
  NotificationView,
  NotificationItemView,
} from './style';

// let id = 0;

// const MARGIN_BOTTOM = 16;

// function MessageHub(props: NotificationProps) {
//   const {
//     children,
//   } = props;
//   const [items, setItems] = React.useState<any[]>([]);
//   const [refMap] = React.useState(() => new WeakMap());

//   React.useEffect(() => children((msg: string) => setItems(state => [...state, { key: id++, msg }])), []);

//   const transitions = useTransition(items, item => item.key, {
//     from: { opacity: 0, height: 0 },
//     enter: item => (async (next: any) => await next({ opacity: 1, height: refMap.get(item).offsetHeight + MARGIN_BOTTOM })) as any,
//     leave: item => (async (next: any) => {
//       await next({ opacity: 0 });
//       await next({ height: 0 });
//     }) as any,
//     config: ((item: any, state: string) => {
//       const config = { tension: 125, friction: 20, precision: 0.1 };
//       return state === 'leave'
//         ? [{ duration: 30 }, config, config]
//         : config;
//     }) as any
//   });

//   return (
//     <NotificationView>
//       {transitions.map(({ key, item, props }: any) =>
//         <Message key={key} style={props}>
//           <NotificationItemView
//             ref={r => r && refMap.set(item, r)}
//           >
//             {item.msg}
//             <span onClick={(e) => {
//               e.stopPropagation();
//               setItems(state => state.filter(i => i.key !== item.key))
//             }}>
//               x
//             </span>
//           </NotificationItemView>
//         </Message>
//       )}
//     </NotificationView>
//   );
// }

// function Notification(props: NotificationProps) {
//   const ref = React.useRef<string | null>(null);
//   return (
//     <button onClick={() => ref.current('2323')}>
//       click
//       <MessageHub children={(add: string) => ref.current = add}/>
//     </button>
//   );
// }

// function Notification(props: NotificationProps) {
//   const [items, setList] = React.useState([
//     {key: 1, item: "one"},
//     {key: 2, item: "two"},
//     {key: 3, item: "three"}
//   ])
//   const [index, setIndex] = React.useState(4)
//   const addToList = () => {
//     setIndex(index+1)
//     var nItems = items.slice()
//     nItems.push({key: index, item: "new"})
//     setList(nItems)
//   }
//   const removeFromList = () => {
//     var nItems = items.slice()
//     nItems.pop()
//     setList(nItems)
//   }
//   const transitions = useTransition(items, item => item.key, {
//     initial: { transform: 'translate3d(0%, 0%,0)' },
//     from: {    transform: 'translate3d(0%,-100%,0)' },
//     enter: {   transform: 'translate3d(0%, 0%,0)' },
//     leave: {   transform: 'translate3d(100%,0%,0)' }
//   })
//   return (
//     <div>
//       <button onClick={addToList}>add</button>
//       <button onClick={removeFromList}>remove</button>
//       {transitions.map(({ item, props, key }) =>
//         <animated.div
//           key={key}
//           style={props}>
//           <div>{item.item}</div>
//         </animated.div>
//       )}
//     </div>
//   )
// }


class Notification extends Component<NotificationProps, NotificationState> {
  static newInstance: (
    properties: NotificationProps & { getContainer?: () => HTMLElement },
    callback: (instance: any) => void,
  ) => void;

  state = {
    queue: [],
  }

  add = (notice: Notice) => {
    this.setState(({ queue }) => ({ queue: [...queue, notice] }));
  }

  remove = (key: React.Key) => {
    this.setState(({ queue }) => ({ queue: queue.filter(it => it.key !== key ) }));
  }

  handleClose = (key: any, e: any) => {
    e.stopPropagation();
    this.remove(key);
  }

  render() {
    const { queue } = this.state;
    return (
      <NotificationView>
        {queue.map((it: Notice) => (
          <Message key={it.key}>
            <NotificationItemView>
              {it.content}
              {it.closable && (it.closeIcon || <AiOutlineClose onClick={(e) => this.handleClose(it.key, e)}/>)}
            </NotificationItemView>
          </Message>
        ))}
      </NotificationView>
    )
  }
}

Notification.newInstance = function (properties, callback) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function setRef(notification: Notification) {
    callback({
      open(props: any) {
        notification.add(props);
      },
      remove(key: any) {
        notification.remove(key);
      },
    })
  }
  ReactDOM.render(<Notification ref={setRef} />, div);
}

Notification.displayName = 'Notification';

Notification.defaultProps = {

};

Notification.propTypes = {

};

/** @component */
export default Notification;
