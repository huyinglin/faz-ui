(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '5+Ma': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('0Owb'),
        l = t('q1tI'),
        r = t.n(l),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        d = t.n(c),
        u = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = function() {
              return a['default'].createElement(n.Radio, null, 'Radio');
            };
          return a['default'].createElement(l);
        }),
        o = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = function() {
              return a['default'].createElement(
                n.Radio,
                { disabled: !0 },
                'Radio',
              );
            };
          return a['default'].createElement(l);
        }),
        i = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState(1),
            c = (0, a['default'])(r, 2),
            d = c[0],
            u = c[1];
          function o(e) {
            console.log('value: ', e.target.value), u(e.target.value);
          }
          var i = function() {
            return n['default'].createElement(
              l.Radio.Group,
              { onChange: o, value: d },
              n['default'].createElement(l.Radio, { value: 1 }, 'A'),
              n['default'].createElement(l.Radio, { value: 2 }, 'B'),
              n['default'].createElement(l.Radio, { value: 3 }, 'C'),
              n['default'].createElement(l.Radio, { value: 4 }, 'D'),
            );
          };
          return n['default'].createElement(i);
        }),
        m = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState(1),
            c = (0, a['default'])(r, 2),
            d = c[0],
            u = c[1],
            o = n['default'].useState('row'),
            i = (0, a['default'])(o, 2),
            m = i[0],
            E = i[1];
          function s(e) {
            console.log('value: ', e.target.value), u(e.target.value);
          }
          var f = function() {
            return n['default'].createElement(
              'div',
              null,
              n['default'].createElement(
                l.Button,
                {
                  style: { marginBottom: 8 },
                  onClick: function() {
                    return E('row' === m ? 'col' : 'row');
                  },
                },
                'row' === m ? 'Row - Mode' : 'Col - Mode',
              ),
              n['default'].createElement(
                l.Radio.Group,
                { mode: m, onChange: s, value: d },
                n['default'].createElement(l.Radio, { value: 1 }, 'A'),
                n['default'].createElement(l.Radio, { value: 2 }, 'B'),
                n['default'].createElement(l.Radio, { value: 3 }, 'C'),
                n['default'].createElement(l.Radio, { value: 4 }, 'D'),
              ),
            );
          };
          return n['default'].createElement(f);
        }),
        E = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState('a'),
            c = (0, a['default'])(r, 2),
            d = c[0],
            u = c[1];
          function o(e) {
            u(e.target.value);
          }
          var i = function() {
            return n['default'].createElement(
              'div',
              null,
              n['default'].createElement(l.Radio, {
                checked: 'a' === d,
                onChange: o,
                value: 'a',
                inputProps: { 'aria-label': 'A' },
              }),
              n['default'].createElement(l.Radio, {
                checked: 'b' === d,
                onChange: o,
                value: 'b',
                color: 'rgb(220, 0, 78)',
                inputProps: { 'aria-label': 'B' },
              }),
              n['default'].createElement(l.Radio, {
                checked: 'c' === d,
                onChange: o,
                value: 'c',
                inputProps: { 'aria-label': 'C' },
              }),
              n['default'].createElement(l.Radio, {
                checked: 'd' === d,
                onChange: o,
                value: 'd',
                inputProps: { 'aria-label': 'D' },
              }),
              n['default'].createElement(l.Radio, {
                checked: 'e' === d,
                onChange: o,
                value: 'e',
                color: '#43a047',
                inputProps: { 'aria-label': 'E' },
              }),
            );
          };
          return n['default'].createElement(i);
        });
      a['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'radio-\u5355\u9009\u6846' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#radio-\u5355\u9009\u6846' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Radio \u5355\u9009\u6846',
            ),
            r.a.createElement('hr', null),
            r.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Radio } from 'faz-ui';\n\nexport default () => <Radio>Radio</Radio>",
                },
              },
              {
                title: 'Basic Radio',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(u, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u7981\u7528\u72b6\u6001' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528\u72b6\u6001' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u72b6\u6001',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Radio } from 'faz-ui';\n\nexport default () => <Radio disabled>Radio</Radio>",
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>Radio \u4e0d\u53ef\u7528\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(o, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: 'radiogroup' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#radiogroup' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Radio.Group',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Radio } from 'faz-ui';\n\nconst [value, setValue] = React.useState(1);\n\nfunction onChange(e) {\n  console.log('value: ', e.target.value);\n  setValue(e.target.value);\n}\n\nexport default () =>\n  <Radio.Group\n    onChange={onChange}\n    value={value}\n  >\n    <Radio value={1}>A</Radio>\n    <Radio value={2}>B</Radio>\n    <Radio value={3}>C</Radio>\n    <Radio value={4}>D</Radio>\n  </Radio.Group>",
                },
              },
              {
                title: 'Radio.Group',
                desc: '<div class="markdown"><p>Radio \u7ec4\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: 'radiogroup---mode' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#radiogroup---mode' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Radio.Group - Mode',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Radio, Button } from 'faz-ui';\n\nconst [value, setValue] = React.useState(1);\nconst [mode, setMode] = React.useState('row');\n\nfunction onChange(e) {\n  console.log('value: ', e.target.value);\n  setValue(e.target.value);\n}\n\nexport default () =>\n  <div>\n    <Button\n      style={{ marginBottom: 8 }}\n      onClick={() => setMode(mode === 'row' ? 'col' : 'row')}\n    >\n      {mode === 'row' ? 'Row - Mode' : 'Col - Mode'}\n    </Button>\n    <Radio.Group\n      mode={mode}\n      onChange={onChange}\n      value={value}\n    >\n      <Radio value={1}>A</Radio>\n      <Radio value={2}>B</Radio>\n      <Radio value={3}>C</Radio>\n      <Radio value={4}>D</Radio>\n    </Radio.Group>\n  </div>",
                },
              },
              {
                title: 'Mode',
                desc:
                  '<div class="markdown"><p>\u53ef\u9009 <code>row</code> | <code>col</code>\uff0c\u5206\u522b\u4e3a\u884c\u6a21\u5f0f\u548c\u5217\u6a21\u5f0f\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5355\u72ec\u4f7f\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5355\u72ec\u4f7f\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5355\u72ec\u4f7f\u7528',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Radio } from 'faz-ui';\n\nconst [selectedValue, setSelectedValue] = React.useState('a');\n\nfunction handleChange(e) {\n  setSelectedValue(e.target.value);\n};\n\nexport default () =>\n  <div>\n    <Radio\n      checked={selectedValue === 'a'}\n      onChange={handleChange}\n      value=\"a\"\n      inputProps={{ 'aria-label': 'A' }}\n    />\n    <Radio\n      checked={selectedValue === 'b'}\n      onChange={handleChange}\n      value=\"b\"\n      color=\"rgb(220, 0, 78)\"\n      inputProps={{ 'aria-label': 'B' }}\n    />\n    <Radio\n      checked={selectedValue === 'c'}\n      onChange={handleChange}\n      value=\"c\"\n      inputProps={{ 'aria-label': 'C' }}\n    />\n    <Radio\n      checked={selectedValue === 'd'}\n      onChange={handleChange}\n      value=\"d\"\n      inputProps={{ 'aria-label': 'D' }}\n    />\n    <Radio\n      checked={selectedValue === 'e'}\n      onChange={handleChange}\n      value=\"e\"\n      color=\"#43a047\"\n      inputProps={{ 'aria-label': 'E' }}\n    />\n  </div>",
                },
              },
              {
                title: '\u5355\u72ec\u4f7f\u7528',
                desc:
                  '<div class="markdown"><p>Radio \u53ef\u8131\u79bb RadioGroup \u5355\u72ec\u4f7f\u7528\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(E, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d',
                  ),
                  r.a.createElement('td', null, 'string | number'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'checked'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'defaultChecked'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u662f\u5426\u9009\u4e2d',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabled'),
                  r.a.createElement('td', null, '\u5931\u6548\u72b6\u6001'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'icon'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u672a\u9009\u4e2d\u72b6\u6001\u7684 icon',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'checkedIcon'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9009\u4e2d\u72b6\u6001\u7684 icon',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'color'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u4e2d\u65f6\u7684\u80cc\u666f\u8272',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'name'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'input[type="radio"]'),
                    ' \u7684 name \u5c5e\u6027',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'inputRef'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5185\u90e8 input \u7684 ref',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      'React.Ref<HTMLInputElement>',
                    ),
                  ),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'inputProps'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5185\u90e8 input \u7684\u5c5e\u6027',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      'React.InputHTMLAttributes<HTMLInputElement>',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'style'),
                  r.a.createElement('td', null, '\u8bbe\u7f6e\u6837\u5f0f'),
                  r.a.createElement('td', null, 'React.CSSProperties'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'className'),
                  r.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u53d8\u5316\u65f6\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.ChangeEvent<HTMLInputElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
