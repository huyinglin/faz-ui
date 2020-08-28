(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    '0raW': function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('0Owb'),
        r = n('q1tI'),
        l = n.n(r),
        s = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        c = n.n(s),
        i = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            r = function() {
              return t['default'].createElement(a.Alert, {
                message: 'This is Info alert!',
              });
            };
          return t['default'].createElement(r);
        }),
        o = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            r = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Alert, {
                  message: 'Success Text',
                  type: 'success',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Info Text',
                  type: 'info',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Warning Text',
                  type: 'warning',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Danger Text',
                  type: 'danger',
                  style: { marginBottom: 8 },
                }),
              );
            };
          return t['default'].createElement(r);
        }),
        m = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            r = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Alert, {
                  message: 'Success Text',
                  description:
                    'Success Description Success Description Success Description',
                  type: 'success',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Info Text',
                  description:
                    'Info Description Info Description Info Description Info Description',
                  type: 'info',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Warning Text',
                  description:
                    'Warning Description Warning Description Warning Description Warning Description',
                  type: 'warning',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Danger Text',
                  description:
                    'Error Description Error Description Error Description Error Description',
                  type: 'danger',
                  style: { marginBottom: 8 },
                }),
              );
            };
          return t['default'].createElement(r);
        }),
        u = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            r = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Alert, {
                  message: 'Info Text',
                  closable: !0,
                  onClose: function(e) {
                    return console.log(e, 'I was closed.');
                  },
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  message: 'Success Text',
                  description:
                    'Success Description Success Description Success Description',
                  type: 'success',
                  closable: !0,
                }),
              );
            };
          return t['default'].createElement(r);
        }),
        d = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            r = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Success Text',
                  type: 'success',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Info Text',
                  type: 'info',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Warning Text',
                  type: 'warning',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Danger Text',
                  type: 'danger',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Success Text',
                  description:
                    'Success Description Success Description Success Description',
                  type: 'success',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Info Text',
                  description:
                    'Info Description Info Description Info Description Info Description',
                  type: 'info',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Warning Text',
                  description:
                    'Warning Description Warning Description Warning Description Warning Description',
                  type: 'warning',
                  style: { marginBottom: 8 },
                }),
                t['default'].createElement(a.Alert, {
                  showIcon: !0,
                  message: 'Danger Text',
                  description:
                    'Error Description Error Description Error Description Error Description',
                  type: 'danger',
                  style: { marginBottom: 8 },
                }),
              );
            };
          return t['default'].createElement(r);
        });
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'alert-\u8b66\u544a\u63d0\u793a' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#alert-\u8b66\u544a\u63d0\u793a',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Alert \u8b66\u544a\u63d0\u793a',
            ),
            l.a.createElement('hr', null),
            l.a.createElement(
              'h3',
              { id: '\u57fa\u672c' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c',
            ),
          ),
          l.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Alert } from 'faz-ui';\n\nexport default () => <Alert message=\"This is Info alert!\" />;",
                },
              },
              {
                title: 'Basic Alert',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u9002\u7528\u4e8e\u7b80\u77ed\u7684\u8b66\u544a\u63d0\u793a\u3002</p></div>',
                hideActions: ['CSB'],
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(i, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u56db\u79cd\u6837\u5f0f' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u56db\u79cd\u6837\u5f0f' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u56db\u79cd\u6837\u5f0f',
            ),
          ),
          l.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Alert } from \'faz-ui\';\n\nexport default () => (\n  <div>\n    <Alert message="Success Text" type="success" style={{ marginBottom: 8 }} />\n    <Alert message="Info Text" type="info" style={{ marginBottom: 8 }} />\n    <Alert message="Warning Text" type="warning" style={{ marginBottom: 8 }} />\n    <Alert message="Danger Text" type="danger" style={{ marginBottom: 8 }} />\n  </div>\n);',
                },
              },
              {
                title: 'Type',
                desc:
                  '<div class="markdown"><p>\u5171\u6709\u56db\u79cd\u6837\u5f0f success\u3001info\u3001warning\u3001error\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(o, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd',
            ),
          ),
          l.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Alert } from \'faz-ui\';\n\nexport default () => (\n  <div>\n    <Alert\n      message="Success Text"\n      description="Success Description Success Description Success Description"\n      type="success"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      message="Info Text"\n      description="Info Description Info Description Info Description Info Description"\n      type="info"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      message="Warning Text"\n      description="Warning Description Warning Description Warning Description Warning Description"\n      type="warning"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      message="Danger Text"\n      description="Error Description Error Description Error Description Error Description"\n      type="danger"\n      style={{ marginBottom: 8 }}\n    />\n  </div>\n);',
                },
              },
              {
                title: 'Description',
                desc:
                  '<div class="markdown"><p>\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u7684\u8b66\u544a\u63d0\u793a\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(m, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a',
            ),
          ),
          l.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Alert } from \'faz-ui\';\n\nexport default () => (\n  <div>\n    <Alert\n      message="Info Text"\n      closable\n      onClose={e => console.log(e, \'I was closed.\')}\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      message="Success Text"\n      description="Success Description Success Description Success Description"\n      type="success"\n      closable\n    />\n  </div>\n);',
                },
              },
              {
                title: 'Closable',
                desc:
                  '<div class="markdown"><p>\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u5173\u95ed\u8b66\u544a\u63d0\u793a\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(u, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u56fe\u6807' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u56fe\u6807' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u56fe\u6807',
            ),
          ),
          l.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Alert } from \'faz-ui\';\n\nexport default () => (\n  <div>\n    <Alert\n      showIcon\n      message="Success Text"\n      type="success"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Info Text"\n      type="info"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Warning Text"\n      type="warning"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Danger Text"\n      type="danger"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Success Text"\n      description="Success Description Success Description Success Description"\n      type="success"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Info Text"\n      description="Info Description Info Description Info Description Info Description"\n      type="info"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Warning Text"\n      description="Warning Description Warning Description Warning Description Warning Description"\n      type="warning"\n      style={{ marginBottom: 8 }}\n    />\n    <Alert\n      showIcon\n      message="Danger Text"\n      description="Error Description Error Description Error Description Error Description"\n      type="danger"\n      style={{ marginBottom: 8 }}\n    />\n  </div>\n);',
                },
              },
              {
                title: 'ShowIcon',
                desc:
                  '<div class="markdown"><p>\u5408\u9002\u7684\u56fe\u6807\u8ba9\u4fe1\u606f\u7c7b\u578b\u66f4\u52a0\u9192\u76ee\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(d, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'api' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u5c5e\u6027'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'closable'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'type'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u8b66\u544a\u63d0\u793a\u7684\u7c7b\u578b',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'success'),
                    ' ',
                    l.a.createElement('code', null, 'info'),
                    ' ',
                    l.a.createElement('code', null, 'danger'),
                    ' ',
                    l.a.createElement('code', null, 'warning'),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'info'),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'message'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8b66\u544a\u63d0\u793a\u5185\u5bb9',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'description'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'showIcon'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u8f85\u52a9\u56fe\u6807',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'className'),
                  l.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'style'),
                  l.a.createElement('td', null, '\u8bbe\u7f6e\u6837\u5f0f'),
                  l.a.createElement('td', null, 'React.CSSProperties'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onClose'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      '(e: React.MouseEvent<HTMLDivElement>) => void',
                    ),
                  ),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
