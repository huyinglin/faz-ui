(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    HOF0: function(e, t, n) {
      'use strict';
      n.r(t);
      var l = n('0Owb'),
        o = n('q1tI'),
        a = n.n(o),
        r = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        c = n.n(r),
        u = a.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = n('/7QA'),
            o = t['default'].createElement(
              'div',
              null,
              t['default'].createElement('div', null, 'Content'),
              t['default'].createElement('div', null, 'Content'),
            ),
            a = function() {
              return t['default'].createElement(
                l.Popover,
                { title: 'Title', content: o },
                t['default'].createElement(
                  l.Button,
                  { type: 'primary' },
                  'Hover me',
                ),
              );
            };
          return t['default'].createElement(a);
        }),
        m = a.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = n('/7QA'),
            o = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(
                  l.Popover,
                  { trigger: 'hover', title: 'Popover', content: 'Content' },
                  t['default'].createElement(
                    l.Button,
                    { style: { margin: 8 } },
                    'Hover',
                  ),
                ),
                t['default'].createElement(
                  l.Popover,
                  { trigger: 'click', title: 'Popover', content: 'Content' },
                  t['default'].createElement(
                    l.Button,
                    { style: { margin: 8 } },
                    'Click',
                  ),
                ),
                t['default'].createElement(
                  l.Popover,
                  { trigger: 'focus', title: 'Popover', content: 'Content' },
                  t['default'].createElement(
                    l.Button,
                    { style: { margin: 8 } },
                    'Focus',
                  ),
                ),
                t['default'].createElement(
                  l.Popover,
                  { trigger: ['click', 'hover'], title: 'Popover' },
                  t['default'].createElement(
                    l.Button,
                    { style: { margin: 8 } },
                    'Hover & Click',
                  ),
                ),
              );
            };
          return t['default'].createElement(o);
        }),
        i = a.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('qqnG')),
            l = e(n('q1tI')),
            o = n('/7QA'),
            a = e(n('vOnD'));
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
          function u() {
            var e = (0, t['default'])(['\n  width: 88px;\n  margin: 8px;\n']);
            return (
              (u = function() {
                return e;
              }),
              e
            );
          }
          var m = (0, a['default'])(o.Button)(u()),
            i = a['default'].div(c()),
            p = a['default'].div(r()),
            d = 'Popover Title',
            E = 'Popover Content',
            v = function() {
              return l['default'].createElement(
                'div',
                null,
                l['default'].createElement(
                  i,
                  null,
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'topLeft' },
                    l['default'].createElement(m, null, 'topLeft'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'top' },
                    l['default'].createElement(m, null, 'top'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'topRight' },
                    l['default'].createElement(m, null, 'topRight'),
                  ),
                ),
                l['default'].createElement(
                  p,
                  null,
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'leftTop' },
                    l['default'].createElement(m, null, 'leftTop'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'rightTop' },
                    l['default'].createElement(m, null, 'rightTop'),
                  ),
                ),
                l['default'].createElement(
                  p,
                  null,
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'left' },
                    l['default'].createElement(m, null, 'left'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'right' },
                    l['default'].createElement(m, null, 'right'),
                  ),
                ),
                l['default'].createElement(
                  p,
                  null,
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'leftBottom' },
                    l['default'].createElement(m, null, 'leftBottom'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'rightBottom' },
                    l['default'].createElement(m, null, 'rightBottom'),
                  ),
                ),
                l['default'].createElement(
                  i,
                  null,
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'bottomLeft' },
                    l['default'].createElement(m, null, 'bottomLeft'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'bottom' },
                    l['default'].createElement(m, null, 'bottom'),
                  ),
                  l['default'].createElement(
                    o.Popover,
                    { title: d, content: E, placement: 'bottomRight' },
                    l['default'].createElement(m, null, 'bottomRight'),
                  ),
                ),
              );
            };
          return l['default'].createElement(v);
        });
      t['default'] = function() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h2',
              { id: 'popover-\u6c14\u6ce1\u5361\u7247' },
              a.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#popover-\u6c14\u6ce1\u5361\u7247',
                },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Popover \u6c14\u6ce1\u5361\u7247',
            ),
            a.a.createElement('hr', null),
            a.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              a.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
            a.a.createElement('p', null, 'Basic Popover:'),
            a.a.createElement(
              'p',
              null,
              '\u66f4\u591a\u5c5e\u6027\u8bf7\u53c2\u8003 Tooltip\u3002',
            ),
            a.a.createElement(
              'p',
              null,
              '\u8bf7\u786e\u4fdd Popover \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 onMouseEnter\u3001onMouseLeave\u3001onFocus\u3001onClick \u4e8b\u4ef6\u3002',
            ),
          ),
          a.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Popover, Button } from \'faz-ui\';\n\nconst content = (\n  <div>\n    <div>Content</div>\n    <div>Content</div>\n  </div>\n);\n\nexport default () =>\n  <Popover title="Title" content={content}>\n    <Button type="primary">Hover me</Button>\n  </Popover>',
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            a.a.createElement(u, null),
          ),
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h3',
              { id: '\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f' },
              a.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f',
                },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f',
            ),
          ),
          a.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Popover, Button } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Popover trigger="hover" title="Popover" content="Content"><Button style={{ margin: 8 }}>Hover</Button></Popover>\n    <Popover trigger="click" title="Popover" content="Content"><Button style={{ margin: 8 }}>Click</Button></Popover>\n    <Popover trigger="focus" title="Popover" content="Content"><Button style={{ margin: 8 }}>Focus</Button></Popover>\n    <Popover trigger={[\'click\', \'hover\']} title="Popover"><Button style={{ margin: 8 }}>Hover & Click</Button></Popover>\n  </div>',
                },
              },
              {
                title: 'Trigger',
                desc:
                  '<div class="markdown"><p>\u652f\u6301\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f\uff0c\u9f20\u6807\u79fb\u5165\u3001\u805a\u96c6\u3001\u70b9\u51fb\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            a.a.createElement(m, null),
          ),
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h3',
              { id: '\u4f4d\u7f6e' },
              a.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f4d\u7f6e' },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f4d\u7f6e',
            ),
          ),
          a.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Popover, Button } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst ButtonView = styled(Button)`\n  width: 88px;\n  margin: 8px;\n`;\n\nconst TopAndButtomView = styled.div`\n  margin-left: 104px;\n`;\n\nconst CenterView = styled.div`\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n`;\n\nconst popoverTitle = "Popover Title";\nconst popoverContent = "Popover Content";\n\nexport default () =>\n  <div>\n    <TopAndButtomView>\n      <Popover title={popoverTitle} content={popoverContent} placement="topLeft"><ButtonView>topLeft</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="top"><ButtonView>top</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="topRight"><ButtonView>topRight</ButtonView></Popover>\n    </TopAndButtomView>\n    <CenterView>\n      <Popover title={popoverTitle} content={popoverContent} placement="leftTop"><ButtonView>leftTop</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="rightTop"><ButtonView>rightTop</ButtonView></Popover>\n    </CenterView>\n    <CenterView>\n      <Popover title={popoverTitle} content={popoverContent} placement="left"><ButtonView>left</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="right"><ButtonView>right</ButtonView></Popover>\n    </CenterView>\n    <CenterView>\n      <Popover title={popoverTitle} content={popoverContent} placement="leftBottom"><ButtonView>leftBottom</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="rightBottom"><ButtonView>rightBottom</ButtonView></Popover>\n    </CenterView>\n    <TopAndButtomView>\n      <Popover title={popoverTitle} content={popoverContent} placement="bottomLeft"><ButtonView>bottomLeft</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="bottom"><ButtonView>bottom</ButtonView></Popover>\n      <Popover title={popoverTitle} content={popoverContent} placement="bottomRight"><ButtonView>bottomRight</ButtonView></Popover>\n    </TopAndButtomView>\n  </div>',
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
            a.a.createElement(i, null),
          ),
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h2',
              { id: 'api' },
              a.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            a.a.createElement(
              'p',
              null,
              '\u8bf7\u786e\u4fdd Popover \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 onMouseEnter\u3001onMouseLeave\u3001onFocus\u3001onClick \u4e8b\u4ef6\u3002',
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, '\u5c5e\u6027'),
                  a.a.createElement('th', null, '\u8bf4\u660e'),
                  a.a.createElement('th', null, '\u7c7b\u578b'),
                  a.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'title'),
                  a.a.createElement('td', null, '\u5361\u7247\u6807\u9898'),
                  a.a.createElement('td', null, 'React.ReactNode'),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'content'),
                  a.a.createElement('td', null, '\u5361\u7247\u5185\u5bb9'),
                  a.a.createElement('td', null, 'React.ReactNode'),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'defaultVisible'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u662f\u5426\u663e\u9690',
                  ),
                  a.a.createElement('td', null, 'boolean'),
                  a.a.createElement('td', null, 'false'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'space'),
                  a.a.createElement(
                    'td',
                    null,
                    'Popover \u548c children \u7684\u95f4\u8ddd\uff0c\u5355\u4f4d\uff1apx',
                  ),
                  a.a.createElement('td', null, 'number'),
                  a.a.createElement('td', null, '12'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'container'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u6d6e\u5c42\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    'React.ReactInstance | (() => React.ReactInstance)',
                  ),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'placement'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u6c14\u6ce1\u6846\u4f4d\u7f6e',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'top'),
                    ' ',
                    a.a.createElement('code', null, 'left'),
                    ' ',
                    a.a.createElement('code', null, 'right'),
                    ' ',
                    a.a.createElement('code', null, 'bottom'),
                    ' ',
                    a.a.createElement('code', null, 'topLeft'),
                    ' ',
                    a.a.createElement('code', null, 'topRight'),
                    ' ',
                    a.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    a.a.createElement('code', null, 'bottomRight'),
                    ' ',
                    a.a.createElement('code', null, 'leftTop'),
                    ' ',
                    a.a.createElement('code', null, 'leftBottom'),
                    ' ',
                    a.a.createElement('code', null, 'rightTop'),
                    ' ',
                    a.a.createElement('code', null, 'rightBottom'),
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'top'),
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'trigger'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u89e6\u53d1\u884c\u4e3a\uff0c\u53ef\u4f7f\u7528\u6570\u7ec4\u8bbe\u7f6e\u591a\u4e2a\u89e6\u53d1\u884c\u4e3a',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'hover'),
                    ' ',
                    a.a.createElement('code', null, 'focus'),
                    ' ',
                    a.a.createElement('code', null, 'click'),
                    ' ',
                    a.a.createElement('code', null, 'string[]'),
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'hover'),
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'enterDelay'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u5165\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u663e\u793a Popover\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  a.a.createElement('td', null, 'number'),
                  a.a.createElement('td', null, '100'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'leaveDelay'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u9690\u85cf Popover\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  a.a.createElement('td', null, 'number'),
                  a.a.createElement('td', null, '100'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'arrow'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u7bad\u5934',
                  ),
                  a.a.createElement('td', null, 'boolean'),
                  a.a.createElement('td', null, 'true'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'className'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u7c7b\u540d',
                  ),
                  a.a.createElement('td', null, 'string'),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'style'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f',
                  ),
                  a.a.createElement('td', null, 'React.CSSProperties'),
                  a.a.createElement('td', null, '-'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'visible'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690',
                  ),
                  a.a.createElement('td', null, 'boolean'),
                  a.a.createElement('td', null, 'false'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'onChange'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u9690\u85cf\u7684\u56de\u8c03',
                  ),
                  a.a.createElement('td', null, '(visible: boolean) => void'),
                  a.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
