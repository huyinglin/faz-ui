(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    '6m5v': function(e, t, n) {
      'use strict';
      n.r(t);
      var l = n('0Owb'),
        a = n('q1tI'),
        o = n.n(a),
        r = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        c = n.n(r),
        m = o.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = n('/7QA');
          function a(e) {
            console.log(e), l.Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');
          }
          function o(e) {
            console.log(e), l.Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');
          }
          var r = function() {
            return t['default'].createElement(
              l.Popconfirm,
              {
                title: '\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?',
                onConfirm: a,
                onCancel: o,
              },
              t['default'].createElement(
                l.Button,
                { type: 'primary', danger: !0 },
                'Delete',
              ),
            );
          };
          return t['default'].createElement(r);
        }),
        i = o.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = n('/7QA'),
            a = n('33Fu');
          function o(e) {
            console.log(e), l.Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');
          }
          function r(e) {
            console.log(e), l.Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');
          }
          var c = function() {
            return t['default'].createElement(
              l.Popconfirm,
              {
                title: '\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?',
                onConfirm: o,
                onCancel: r,
                icon: t['default'].createElement(a.AiOutlineQuestionCircle, {
                  style: { color: 'red' },
                }),
              },
              t['default'].createElement(
                l.Button,
                { type: 'primary', danger: !0 },
                'Delete',
              ),
            );
          };
          return t['default'].createElement(c);
        }),
        u = o.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = n('/7QA'),
            a = n('33Fu');
          function o(e) {
            console.log(e), l.Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');
          }
          function r(e) {
            console.log(e), l.Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');
          }
          var c = function() {
            return t['default'].createElement(
              l.Popconfirm,
              {
                title: '\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?',
                onConfirm: o,
                onCancel: r,
                confirmButton: { text: '\u5220\u9664' },
                icon: t['default'].createElement(a.AiOutlineQuestionCircle, {
                  style: { color: 'red' },
                }),
              },
              t['default'].createElement(
                l.Button,
                { type: 'primary', danger: !0 },
                'Delete',
              ),
            );
          };
          return t['default'].createElement(c);
        }),
        d = o.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('qqnG')),
            l = e(n('q1tI')),
            a = n('/7QA'),
            o = e(n('vOnD'));
          function r() {
            var e = (0, t['default'])([
              '\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n',
            ]);
            return (
              (r = function() {
                return e;
              }),
              e
            );
          }
          function c() {
            var e = (0, t['default'])(['\n  margin-left: 104px;\n']);
            return (
              (c = function() {
                return e;
              }),
              e
            );
          }
          function m() {
            var e = (0, t['default'])(['\n  width: 88px;\n  margin: 8px;\n']);
            return (
              (m = function() {
                return e;
              }),
              e
            );
          }
          var i = (0, o['default'])(a.Button)(m()),
            u = o['default'].div(c()),
            d = o['default'].div(r()),
            f = '\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?',
            p = function() {
              return l['default'].createElement(
                'div',
                null,
                l['default'].createElement(
                  u,
                  null,
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'topLeft', title: f },
                    l['default'].createElement(i, null, 'topLeft'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'top', title: f },
                    l['default'].createElement(i, null, 'top'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'topRight', title: f },
                    l['default'].createElement(i, null, 'topRight'),
                  ),
                ),
                l['default'].createElement(
                  d,
                  null,
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'leftTop', title: f },
                    l['default'].createElement(i, null, 'leftTop'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'rightTop', title: f },
                    l['default'].createElement(i, null, 'rightTop'),
                  ),
                ),
                l['default'].createElement(
                  d,
                  null,
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'left', title: f },
                    l['default'].createElement(i, null, 'left'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'right', title: f },
                    l['default'].createElement(i, null, 'right'),
                  ),
                ),
                l['default'].createElement(
                  d,
                  null,
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'leftBottom', title: f },
                    l['default'].createElement(i, null, 'leftBottom'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'rightBottom', title: f },
                    l['default'].createElement(i, null, 'rightBottom'),
                  ),
                ),
                l['default'].createElement(
                  u,
                  null,
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'bottomLeft', title: f },
                    l['default'].createElement(i, null, 'bottomLeft'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'bottom', title: f },
                    l['default'].createElement(i, null, 'bottom'),
                  ),
                  l['default'].createElement(
                    a.Popconfirm,
                    { placement: 'bottomRight', title: f },
                    l['default'].createElement(i, null, 'bottomRight'),
                  ),
                ),
              );
            };
          return l['default'].createElement(p);
        });
      t['default'] = function() {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'popconfirm-\u6c14\u6ce1\u786e\u8ba4\u6846' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#popconfirm-\u6c14\u6ce1\u786e\u8ba4\u6846',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Popconfirm \u6c14\u6ce1\u786e\u8ba4\u6846',
            ),
            o.a.createElement('hr', null),
            o.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          o.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Popconfirm, Button, Message } from 'faz-ui';\n\nfunction confirm(e) {\n  console.log(e);\n  Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');\n}\n\nfunction cancel(e) {\n  console.log(e);\n  Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');\n}\n\nexport default () =>\n  <Popconfirm\n    title=\"\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?\"\n    onConfirm={confirm}\n    onCancel={cancel}\n  >\n    <Button type=\"primary\" danger>Delete</Button>\n  </Popconfirm>",
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\u5f53 title \u4e3a null \u65f6\uff0c\u4e0d\u663e\u793a Popconfirm\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            o.a.createElement(m, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u81ea\u5b9a\u4e49-icon-\u56fe\u6807' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u81ea\u5b9a\u4e49-icon-\u56fe\u6807',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u5b9a\u4e49 Icon \u56fe\u6807',
            ),
          ),
          o.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Popconfirm, Button, Message } from 'faz-ui';\nimport { AiOutlineQuestionCircle } from \"react-icons/ai\";\n\nfunction confirm(e) {\n  console.log(e);\n  Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');\n}\n\nfunction cancel(e) {\n  console.log(e);\n  Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');\n}\n\nexport default () =>\n  <Popconfirm\n    title=\"\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?\"\n    onConfirm={confirm}\n    onCancel={cancel}\n    icon={<AiOutlineQuestionCircle style={{ color: 'red' }}/>}\n  >\n    <Button type=\"primary\" danger>Delete</Button>\n  </Popconfirm>",
                },
              },
              {
                title: 'Icon',
                desc:
                  '<div class="markdown"><p>\u81ea\u5b9a\u4e49\u63d0\u793a icon\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            o.a.createElement(i, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u914d\u7f6e\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#\u914d\u7f6e\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u914d\u7f6e\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae',
            ),
          ),
          o.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Popconfirm, Button, Message } from 'faz-ui';\nimport { AiOutlineQuestionCircle } from \"react-icons/ai\";\n\nfunction confirm(e) {\n  console.log(e);\n  Message.success('\u70b9\u51fb\u4e86\u786e\u8ba4');\n}\n\nfunction cancel(e) {\n  console.log(e);\n  Message.error('\u70b9\u51fb\u4e86\u53d6\u6d88');\n}\n\nexport default () =>\n  <Popconfirm\n    title=\"\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?\"\n    onConfirm={confirm}\n    onCancel={cancel}\n    confirmButton={{ text: '\u5220\u9664' }}\n    icon={<AiOutlineQuestionCircle style={{ color: 'red' }}/>}\n  >\n    <Button type=\"primary\" danger>Delete</Button>\n  </Popconfirm>",
                },
              },
              {
                title: 'ConfirmButton & CancelButton',
                desc:
                  '<div class="markdown"><p>\u914d\u7f6e\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            o.a.createElement(u, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u4f4d\u7f6e' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f4d\u7f6e' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f4d\u7f6e',
            ),
          ),
          o.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Popconfirm, Button } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst ButtonView = styled(Button)`\n  width: 88px;\n  margin: 8px;\n`;\n\nconst TopAndButtomView = styled.div`\n  margin-left: 104px;\n`;\n\nconst CenterView = styled.div`\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n`;\n\nconst popconfirmTitle = "\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\u5417?";\n\nexport default () =>\n  <div>\n    <TopAndButtomView>\n      <Popconfirm placement="topLeft" title={popconfirmTitle}><ButtonView>topLeft</ButtonView></Popconfirm>\n      <Popconfirm placement="top" title={popconfirmTitle}><ButtonView>top</ButtonView></Popconfirm>\n      <Popconfirm placement="topRight" title={popconfirmTitle}><ButtonView>topRight</ButtonView></Popconfirm>\n    </TopAndButtomView>\n    <CenterView>\n      <Popconfirm placement="leftTop" title={popconfirmTitle}><ButtonView>leftTop</ButtonView></Popconfirm>\n      <Popconfirm placement="rightTop" title={popconfirmTitle}><ButtonView>rightTop</ButtonView></Popconfirm>\n    </CenterView>\n    <CenterView>\n      <Popconfirm placement="left" title={popconfirmTitle}><ButtonView>left</ButtonView></Popconfirm>\n      <Popconfirm placement="right" title={popconfirmTitle}><ButtonView>right</ButtonView></Popconfirm>\n    </CenterView>\n    <CenterView>\n      <Popconfirm placement="leftBottom" title={popconfirmTitle}><ButtonView>leftBottom</ButtonView></Popconfirm>\n      <Popconfirm placement="rightBottom" title={popconfirmTitle}><ButtonView>rightBottom</ButtonView></Popconfirm>\n    </CenterView>\n    <TopAndButtomView>\n      <Popconfirm placement="bottomLeft" title={popconfirmTitle}><ButtonView>bottomLeft</ButtonView></Popconfirm>\n      <Popconfirm placement="bottom" title={popconfirmTitle}><ButtonView>bottom</ButtonView></Popconfirm>\n      <Popconfirm placement="bottomRight" title={popconfirmTitle}><ButtonView>bottomRight</ButtonView></Popconfirm>\n    </TopAndButtomView>\n  </div>',
                },
              },
              {
                title: 'Placement',
                desc:
                  '<div class="markdown"><p>\u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            o.a.createElement(d, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'api' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            o.a.createElement(
              'p',
              null,
              '\u8bf7\u786e\u4fdd Popconfirm \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 onMouseEnter\u3001onMouseLeave\u3001onFocus\u3001onClick \u4e8b\u4ef6\u3002',
            ),
            o.a.createElement(
              'table',
              null,
              o.a.createElement(
                'thead',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('th', null, '\u5c5e\u6027'),
                  o.a.createElement('th', null, '\u8bf4\u660e'),
                  o.a.createElement('th', null, '\u7c7b\u578b'),
                  o.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              o.a.createElement(
                'tbody',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'title'),
                  o.a.createElement(
                    'td',
                    null,
                    'Popconfirm \u5185\u5bb9\uff0c\u8bbe\u7f6e title \u4e3a null \u65f6\uff0cPopconfirm \u4e0d\u4f1a\u663e\u793a',
                  ),
                  o.a.createElement('td', null, 'React.ReactNode'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'confirmButton'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u786e\u8ba4\u6309\u94ae\u914d\u7f6e',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    '{',
                    ' text: string; type: ButtonType; size: ButtonSize; props: ButtonProps; ',
                    '}',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'cancelButton'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u53d6\u6d88\u6309\u94ae\u914d\u7f6e',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    '{',
                    ' text: string; type: ButtonType; size: ButtonSize; props: ButtonProps; ',
                    '}',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'icon'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u63d0\u793a icon',
                  ),
                  o.a.createElement('td', null, 'React.ReactNode'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'defaultVisible'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u662f\u5426\u663e\u9690',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'false'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'space'),
                  o.a.createElement(
                    'td',
                    null,
                    'Popconfirm \u548c children \u7684\u95f4\u8ddd\uff0c\u5355\u4f4d\uff1apx',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '12'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'container'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6d6e\u5c42\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    'React.ReactInstance | (() => React.ReactInstance)',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'placement'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6c14\u6ce1\u6846\u4f4d\u7f6e',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'top'),
                    ' ',
                    o.a.createElement('code', null, 'left'),
                    ' ',
                    o.a.createElement('code', null, 'right'),
                    ' ',
                    o.a.createElement('code', null, 'bottom'),
                    ' ',
                    o.a.createElement('code', null, 'topLeft'),
                    ' ',
                    o.a.createElement('code', null, 'topRight'),
                    ' ',
                    o.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    o.a.createElement('code', null, 'bottomRight'),
                    ' ',
                    o.a.createElement('code', null, 'leftTop'),
                    ' ',
                    o.a.createElement('code', null, 'leftBottom'),
                    ' ',
                    o.a.createElement('code', null, 'rightTop'),
                    ' ',
                    o.a.createElement('code', null, 'rightBottom'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'top'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'enterDelay'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u5165\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u663e\u793a Popconfirm\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '100'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'leaveDelay'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u9690\u85cf Popconfirm\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '100'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'arrow'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u7bad\u5934',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'true'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'className'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u7c7b\u540d',
                  ),
                  o.a.createElement('td', null, 'string'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'style'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f',
                  ),
                  o.a.createElement('td', null, 'React.CSSProperties'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'visible'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'false'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onCancel'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u53d6\u6d88\u7684\u56de\u8c03',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement(
                      'code',
                      null,
                      '(e: React.MouseEvent<HTMLElement>) => void',
                    ),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onConfirm'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u786e\u8ba4\u7684\u56de\u8c03',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement(
                      'code',
                      null,
                      '(e: React.MouseEvent<HTMLElement>) => void',
                    ),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onChange'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u9690\u85cf\u7684\u56de\u8c03',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement(
                      'code',
                      null,
                      '(visible: boolean) => void',
                    ),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
