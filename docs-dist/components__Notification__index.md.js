(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '1wwz': function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n('0Owb'),
        l = n('q1tI'),
        i = n.n(l),
        o = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        c = n.n(o),
        r = i.a.memo(function() {
          var t = n('K+nK'),
            e = t(n('q1tI')),
            a = n('/7QA'),
            l = 0;
          function i() {
            a.Notification.open({
              title: 'Notification ' + l++,
              description:
                'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
            });
          }
          var o = function() {
            return e['default'].createElement(
              a.Button,
              { onClick: i, type: 'primary' },
              'Open the Notification',
            );
          };
          return e['default'].createElement(o);
        }),
        u = i.a.memo(function() {
          var t = n('K+nK'),
            e = t(n('q1tI')),
            a = n('/7QA');
          function l(t) {
            a.Notification.open({
              title: 'Notification Title',
              duration: t,
              description:
                'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',
            });
          }
          var i = function() {
            return e['default'].createElement(
              'div',
              null,
              e['default'].createElement(
                a.Button,
                {
                  onClick: function() {
                    return l(void 0);
                  },
                  type: 'primary',
                  style: { margin: 8 },
                },
                'Default',
              ),
              e['default'].createElement(
                a.Button,
                {
                  onClick: function() {
                    return l(2e3);
                  },
                  type: 'primary',
                  style: { margin: 8 },
                },
                '2s',
              ),
              e['default'].createElement(
                a.Button,
                {
                  onClick: function() {
                    return l(1e4);
                  },
                  type: 'primary',
                  style: { margin: 8 },
                },
                '10s',
              ),
              e['default'].createElement(
                a.Button,
                {
                  onClick: function() {
                    return l(null);
                  },
                  type: 'primary',
                  style: { margin: 8 },
                },
                '\u4e0d\u5173\u95ed',
              ),
            );
          };
          return e['default'].createElement(i);
        }),
        m = i.a.memo(function() {
          var t = n('K+nK'),
            e = t(n('q1tI')),
            a = n('/7QA'),
            l = function(t) {
              a.Notification[t]({
                title: 'Notification Title',
                duration: null,
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              });
            },
            i = function() {
              return e['default'].createElement(
                'div',
                null,
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('success');
                    },
                  },
                  'Success',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('info');
                    },
                  },
                  'Info',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('warning');
                    },
                  },
                  'Warning',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('error');
                    },
                  },
                  'Error',
                ),
              );
            };
          return e['default'].createElement(i);
        }),
        f = i.a.memo(function() {
          var t = n('K+nK'),
            e = t(n('q1tI')),
            a = n('/7QA'),
            l = function(t) {
              a.Notification.info({
                title: 'Notification Title '.concat(t),
                placement: t,
                duration: null,
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              });
            },
            i = function() {
              return e['default'].createElement(
                'div',
                null,
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('topLeft');
                    },
                  },
                  'topLeft',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('topRight');
                    },
                  },
                  'topRight',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('bottomLeft');
                    },
                  },
                  'bottomLeft',
                ),
                e['default'].createElement(
                  a.Button,
                  {
                    style: { marginRight: 8 },
                    onClick: function() {
                      return l('bottomRight');
                    },
                  },
                  'bottomRight',
                ),
              );
            };
          return e['default'].createElement(i);
        });
      e['default'] = function() {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h2',
              { id: 'notification-\u901a\u77e5\u63d0\u9192\u6846' },
              i.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#notification-\u901a\u77e5\u63d0\u9192\u6846',
                },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Notification \u901a\u77e5\u63d0\u9192\u6846',
            ),
            i.a.createElement('hr', null),
            i.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              i.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          i.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Notification } from 'faz-ui';\n\nlet val = 0;\n\nfunction onOpen() {\n  Notification.open({\n    title: 'Notification ' + val++,\n    description: 'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.',\n  });\n}\n\nexport default () => <Button onClick={onOpen} type=\"primary\">Open the Notification</Button>",
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            i.a.createElement(r, null),
          ),
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h3',
              { id: '\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6' },
              i.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6',
                },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6',
            ),
          ),
          i.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Button, Notification } from \'faz-ui\';\n\nfunction onOpen(duration) {\n  Notification.open({\n    title: \'Notification Title\',\n    duration,\n    description: \'This is the content of the notification. This is theotification. This is the content of the notification. This is the content of the notification.\',\n  });\n}\n\nexport default () =>\n  <div>\n    <Button onClick={() => onOpen(undefined)} type="primary" style={{ margin: 8 }}>Default</Button>\n    <Button onClick={() => onOpen(2000)} type="primary" style={{ margin: 8 }}>2s</Button>\n    <Button onClick={() => onOpen(10000)} type="primary" style={{ margin: 8 }}>10s</Button>\n    <Button onClick={() => onOpen(null)} type="primary" style={{ margin: 8 }}>\u4e0d\u5173\u95ed</Button>\n  </div>',
                },
              },
              {
                title: 'Duration',
                desc:
                  '<div class="markdown"><p>\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u9ed8\u8ba4 4500\u3002\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a null \u5373\u53ef\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            i.a.createElement(u, null),
          ),
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h3',
              {
                id:
                  '\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846',
              },
              i.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846',
                },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846',
            ),
          ),
          i.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Notification } from 'faz-ui';\n\nconst openNotificationWithIcon = type => {\n  Notification[type]({\n    title: 'Notification Title',\n    duration: null,\n    description:\n      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n  });\n};\n\nexport default () =>\n  <div>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('success')}>Success</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('info')}>Info</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('warning')}>Warning</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotificationWithIcon('error')}>Error</Button>\n  </div>",
                },
              },
              {
                title: 'Type',
                desc:
                  '<div class="markdown"><p>\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            i.a.createElement(m, null),
          ),
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h3',
              { id: '\u4f4d\u7f6e' },
              i.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f4d\u7f6e' },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f4d\u7f6e',
            ),
          ),
          i.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Notification } from 'faz-ui';\n\nconst openNotification = placement => {\n  Notification.info({\n    title: `Notification Title ${placement}`,\n    placement,\n    duration: null,\n    description:\n      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n  });\n};\n\nexport default () =>\n  <div>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotification('topLeft')}>topLeft</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotification('topRight')}>topRight</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomLeft')}>bottomLeft</Button>\n    <Button style={{ marginRight: 8 }} onClick={() => openNotification('bottomRight')}>bottomRight</Button>\n  </div>",
                },
              },
              {
                title: 'Placement',
                desc:
                  '<div class="markdown"><p>\u901a\u77e5\u4ece\u53f3\u4e0a\u89d2\u3001\u53f3\u4e0b\u89d2\u3001\u5de6\u4e0b\u89d2\u3001\u5de6\u4e0a\u89d2\u5f39\u51fa\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            i.a.createElement(f, null),
          ),
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h2',
              { id: 'api' },
              i.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            i.a.createElement(
              'ul',
              null,
              i.a.createElement('li', null, 'Notification.success(config)'),
              i.a.createElement('li', null, 'Notification.error(config)'),
              i.a.createElement('li', null, 'Notification.info(config)'),
              i.a.createElement('li', null, 'Notification.warning(config)'),
              i.a.createElement('li', null, 'Notification.open(config)'),
              i.a.createElement('li', null, 'Notification.close(key: string)'),
            ),
            i.a.createElement(
              'p',
              null,
              'config \u53c2\u6570\u5982\u4e0b\uff1a',
            ),
            i.a.createElement(
              'table',
              null,
              i.a.createElement(
                'thead',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('th', null, '\u5c5e\u6027'),
                  i.a.createElement('th', null, '\u8bf4\u660e'),
                  i.a.createElement('th', null, '\u7c7b\u578b'),
                  i.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'title'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009',
                  ),
                  i.a.createElement('td', null, 'React.ReactNode'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'description'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009',
                  ),
                  i.a.createElement('td', null, 'React.ReactNode'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'closeIcon'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807',
                  ),
                  i.a.createElement('td', null, 'React.ReactNode'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'key'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u5f53\u524d\u901a\u77e5\u552f\u4e00\u6807\u5fd7',
                  ),
                  i.a.createElement('td', null, 'React.Key'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'placement'),
                  i.a.createElement('td', null, '\u5f39\u51fa\u4f4d\u7f6e'),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement('code', null, 'topLeft'),
                    ' ',
                    i.a.createElement('code', null, 'topRight'),
                    ' ',
                    i.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    i.a.createElement('code', null, 'bottomRight'),
                  ),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement('code', null, 'topRight'),
                  ),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'style'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5185\u8054\u6837\u5f0f',
                  ),
                  i.a.createElement('td', null, 'React.CSSProperties'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'className'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u7c7b\u540d',
                  ),
                  i.a.createElement('td', null, 'string'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'duration'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u5173\u95ed\u65f6\u957f\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\u3002\u4e3a null \u65f6\u4e0d\u5173\u95ed',
                  ),
                  i.a.createElement('td', null, 'number | null'),
                  i.a.createElement('td', null, '4500'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'closable'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u53ef\u5173\u95ed',
                  ),
                  i.a.createElement('td', null, 'boolean'),
                  i.a.createElement('td', null, 'true'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'onClose'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u5f53\u901a\u77e5\u5173\u95ed\u65f6\u89e6\u53d1',
                  ),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement(
                      'code',
                      null,
                      '(key?: React.Key) => void',
                    ),
                  ),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'onClick'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u901a\u77e5\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement(
                      'code',
                      null,
                      '(key?: React.Key) => void',
                    ),
                  ),
                  i.a.createElement('td', null, '-'),
                ),
              ),
            ),
            i.a.createElement(
              'p',
              null,
              '\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u914d\u7f6e\u65b9\u6cd5\uff0c\u5728\u8c03\u7528\u524d\u63d0\u524d\u914d\u7f6e\uff0c\u5168\u5c40\u4e00\u6b21\u751f\u6548\u3002',
            ),
            i.a.createElement(
              'ul',
              null,
              i.a.createElement('li', null, 'Notification.config(options)'),
            ),
            i.a.createElement(
              'p',
              null,
              'options \u53c2\u6570\u5982\u4e0b\uff1a',
            ),
            i.a.createElement(
              'table',
              null,
              i.a.createElement(
                'thead',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('th', null, '\u5c5e\u6027'),
                  i.a.createElement('th', null, '\u8bf4\u660e'),
                  i.a.createElement('th', null, '\u7c7b\u578b'),
                  i.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'maxCount'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u6700\u5927\u6d88\u606f\u6570',
                  ),
                  i.a.createElement('td', null, 'number'),
                  i.a.createElement('td', null, '-'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'zIndex'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u5f39\u51fa\u6846\u5c42\u7ea7',
                  ),
                  i.a.createElement('td', null, 'number'),
                  i.a.createElement('td', null, '1000'),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'placement'),
                  i.a.createElement('td', null, '\u5f39\u51fa\u4f4d\u7f6e'),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement('code', null, 'topLeft'),
                    ' ',
                    i.a.createElement('code', null, 'topRight'),
                    ' ',
                    i.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    i.a.createElement('code', null, 'bottomRight'),
                  ),
                  i.a.createElement(
                    'td',
                    null,
                    i.a.createElement('code', null, 'topRight'),
                  ),
                ),
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('td', null, 'position'),
                  i.a.createElement(
                    'td',
                    null,
                    '\u5f39\u51fa\u4f4d\u7f6e\u8ddd\u79bb\u6587\u6863\u7684\u4f4d\u7f6e',
                  ),
                  i.a.createElement(
                    'td',
                    null,
                    '{',
                    ' top?: string; bottom?: string; left?: string; right?: string; ',
                    '}',
                  ),
                  i.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
