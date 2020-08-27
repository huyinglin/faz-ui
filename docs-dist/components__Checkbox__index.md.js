(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    vbHr: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('0Owb'),
        c = n('q1tI'),
        l = n.n(c),
        r = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        d = n.n(r),
        o = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            c = function() {
              return t['default'].createElement(a.Checkbox, null, 'Checkbox');
            };
          return t['default'].createElement(c);
        }),
        i = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            c = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Checkbox, {
                  checked: !0,
                  disabled: !0,
                }),
                t['default'].createElement(a.Checkbox, { disabled: !0 }),
                t['default'].createElement(
                  a.Checkbox,
                  { checked: !0, disabled: !0 },
                  'Checkbox',
                ),
                t['default'].createElement(
                  a.Checkbox,
                  { disabled: !0 },
                  'Checkbox',
                ),
              );
            };
          return t['default'].createElement(c);
        }),
        u = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('tJVT')),
            a = e(n('q1tI')),
            c = n('/7QA'),
            l = a['default'].useState(!0),
            r = (0, t['default'])(l, 2),
            d = r[0],
            o = r[1],
            i = a['default'].useState(!1),
            u = (0, t['default'])(i, 2),
            m = u[0],
            h = u[1];
          function k(e) {
            console.log(e.target.checked), o(e.target.checked);
          }
          var s = function() {
            return a['default'].createElement(
              'div',
              null,
              a['default'].createElement(
                c.Checkbox,
                { checked: d, disabled: m, onChange: k },
                d ? 'Checked' : 'Unchecked',
                '-',
                m ? 'Disabled' : 'Enabled',
              ),
              a['default'].createElement(
                'div',
                { style: { marginTop: 16 } },
                a['default'].createElement(
                  c.Button,
                  {
                    onClick: function() {
                      return o(!d);
                    },
                    style: { marginRight: 8 },
                  },
                  d ? 'Check' : 'Uncheck',
                ),
                a['default'].createElement(
                  c.Button,
                  {
                    onClick: function() {
                      return h(!m);
                    },
                  },
                  m ? 'Enable' : 'Disable',
                ),
              ),
            );
          };
          return a['default'].createElement(s);
        }),
        m = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            c = n('NIcq'),
            l = function() {
              return t['default'].createElement(
                a.Checkbox,
                {
                  icon: t['default'].createElement(c.MdFavoriteBorder, null),
                  checkedIcon: t['default'].createElement(c.MdFavorite, null),
                  color: 'rgb(220, 0, 78)',
                  defaultChecked: !0,
                },
                'Favorite',
              );
            };
          return t['default'].createElement(l);
        }),
        h = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            c = n('NIcq'),
            l = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(
                  a.Checkbox,
                  {
                    icon: t['default'].createElement(c.MdFavoriteBorder, null),
                    checkedIcon: t['default'].createElement(c.MdFavorite, null),
                    color: 'rgb(220, 0, 78)',
                    defaultChecked: !0,
                  },
                  'Favorite',
                ),
                t['default'].createElement(
                  a.Checkbox,
                  { color: 'rgb(220, 0, 78)', defaultChecked: !0 },
                  'Checkbox',
                ),
                t['default'].createElement(
                  a.Checkbox,
                  { color: '#43a047', defaultChecked: !0 },
                  'Checkbox',
                ),
                t['default'].createElement(
                  a.Checkbox,
                  { color: '#1976d2', defaultChecked: !0 },
                  'Checkbox',
                ),
              );
            };
          return t['default'].createElement(l);
        }),
        k = l.a.memo(function() {
          var e = n('K+nK'),
            t = e(n('oBTY')),
            a = e(n('tJVT')),
            c = e(n('q1tI')),
            l = n('/7QA'),
            r = c['default'].useState([]),
            d = (0, a['default'])(r, 2),
            o = d[0],
            i = d[1];
          function u(e, n) {
            var a = n.target.checked;
            !a || o.includes(e)
              ? i(
                  o.filter(function(t) {
                    return t !== e;
                  }),
                )
              : i([].concat((0, t['default'])(o), [e]));
          }
          function m(e) {
            var t = e.target.checked;
            i(t ? ['Pear', 'Orange', 'Apple'] : []);
          }
          var h = function() {
            return c['default'].createElement(
              'div',
              null,
              c['default'].createElement(
                l.Checkbox,
                {
                  indeterminate: o.length < 3 && o.length > 0,
                  checked: 3 === o.length,
                  onChange: m,
                },
                'Check All',
              ),
              c['default'].createElement('hr', null),
              c['default'].createElement(
                l.Checkbox,
                {
                  checked: o.includes('Apple'),
                  onChange: function(e) {
                    return u('Apple', e);
                  },
                },
                'Apple',
              ),
              c['default'].createElement(
                l.Checkbox,
                {
                  checked: o.includes('Pear'),
                  onChange: function(e) {
                    return u('Pear', e);
                  },
                },
                'Pear',
              ),
              c['default'].createElement(
                l.Checkbox,
                {
                  checked: o.includes('Orange'),
                  onChange: function(e) {
                    return u('Orange', e);
                  },
                },
                'Orange',
              ),
            );
          };
          return c['default'].createElement(h);
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
              { id: 'checkbox-\u591a\u9009\u6846' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#checkbox-\u591a\u9009\u6846' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Checkbox \u591a\u9009\u6846',
            ),
            l.a.createElement('hr', null),
            l.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          l.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Checkbox } from 'faz-ui';\n\nexport default () => <Checkbox>Checkbox</Checkbox>",
                },
              },
              {
                title: 'Basic Checkbox',
                desc:
                  '<div class="markdown"><p>\u7b80\u5355\u7684 checkbox\u3002</p></div>',
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
              { id: '\u7981\u7528\u72b6\u6001' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528\u72b6\u6001' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u72b6\u6001',
            ),
          ),
          l.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Checkbox } from 'faz-ui';\n\nexport default () =>\n  <div>\n    <Checkbox checked disabled></Checkbox>\n    <Checkbox disabled></Checkbox>\n    <Checkbox checked disabled>Checkbox</Checkbox>\n    <Checkbox disabled>Checkbox</Checkbox>\n  </div>",
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>checkbox \u4e0d\u53ef\u7528\u3002</p></div>',
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
              { id: '\u53d7\u63a7\u7684-checkbox' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53d7\u63a7\u7684-checkbox' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53d7\u63a7\u7684 Checkbox',
            ),
          ),
          l.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Checkbox, Button } from 'faz-ui';\n\nconst [checked, setChecked] = React.useState(true);\nconst [disabled, setDisabled] = React.useState(false);\n\nfunction onChange(e) {\n  console.log(e.target.checked);\n  setChecked(e.target.checked);\n}\n\nexport default () =>\n  <div>\n    <Checkbox\n      checked={checked}\n      disabled={disabled}\n      onChange={onChange}\n    >\n      {checked ? 'Checked' : 'Unchecked'}-{disabled ? 'Disabled' : 'Enabled'}\n    </Checkbox>\n    <div style={{ marginTop: 16 }}>\n      <Button onClick={() => setChecked(!checked)} style={{ marginRight: 8 }}>{checked ? 'Check' : 'Uncheck'}</Button>\n      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>\n    </div>\n  </div>",
                },
              },
              {
                title: 'Controlled',
                desc:
                  '<div class="markdown"><p>\u4f7f\u7528 checked \u548c onChange \u5c5e\u6027\u4f7f CheckBox \u53d7\u63a7\u3002</p></div>',
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
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Checkbox } from \'faz-ui\';\nimport { MdFavoriteBorder, MdFavorite } from "react-icons/md";\n\nexport default () =>\n  <Checkbox\n    icon={<MdFavoriteBorder/>}\n    checkedIcon={<MdFavorite/>}\n    color="rgb(220, 0, 78)"\n    defaultChecked\n  >\n    Favorite\n  </Checkbox>',
                },
              },
              {
                title: 'Icon & CheckedIcon',
                desc:
                  '<div class="markdown"><p>\u4f7f\u7528 icon \u548c checkedIcon \u5c5e\u6027\u53ef\u81ea\u5b9a\u4e49 CheckBox \u9009\u4e2d\u6216\u672a\u9009\u4e2d\u72b6\u6001\u56fe\u6807\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
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
              { id: '\u989c\u8272' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u989c\u8272' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u989c\u8272',
            ),
          ),
          l.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Checkbox } from \'faz-ui\';\nimport { MdFavoriteBorder, MdFavorite } from "react-icons/md";\n\nexport default () =>\n  <div>\n    <Checkbox\n      icon={<MdFavoriteBorder/>}\n      checkedIcon={<MdFavorite/>}\n      color="rgb(220, 0, 78)"\n      defaultChecked\n    >\n      Favorite\n    </Checkbox>\n    <Checkbox color="rgb(220, 0, 78)" defaultChecked>Checkbox</Checkbox>\n    <Checkbox color="#43a047" defaultChecked>Checkbox</Checkbox>\n    <Checkbox color="#1976d2" defaultChecked>Checkbox</Checkbox>\n  </div>',
                },
              },
              {
                title: 'Color',
                desc:
                  '<div class="markdown"><p>\u4f7f\u7528 color \u5c5e\u6027\u53ef\u81ea\u5b9a\u4e49 CheckBox \u56fe\u6807\u7684\u989c\u8272\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            l.a.createElement(h, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: 'indeterminate' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#indeterminate' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Indeterminate',
            ),
          ),
          l.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Checkbox } from 'faz-ui';\n\nconst [checkList, setCheckList] = React.useState([]);\n\nfunction onChange(value, e) {\n  const { checked } = e.target;\n  if (checked && !checkList.includes(value)) {\n    setCheckList([...checkList, value]);\n    return;\n  }\n  setCheckList(checkList.filter(it => it !== value));\n}\n\nfunction onCheckAll(e) {\n  const { checked } = e.target;\n  setCheckList(checked ? [\"Pear\", \"Orange\", \"Apple\"] : []);\n}\n\nexport default () =>\n  <div>\n    <Checkbox\n      indeterminate={checkList.length < 3 && checkList.length > 0}\n      checked={checkList.length === 3}\n      onChange={onCheckAll}\n    >\n      Check All\n    </Checkbox>\n    <hr/>\n    <Checkbox checked={checkList.includes('Apple')} onChange={e => onChange('Apple', e)}>Apple</Checkbox>\n    <Checkbox checked={checkList.includes('Pear')} onChange={e => onChange('Pear', e)}>Pear</Checkbox>\n    <Checkbox checked={checkList.includes('Orange')} onChange={e => onChange('Orange', e)}>Orange</Checkbox>\n  </div>",
                },
              },
              {
                title: 'Indeterminate',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e indeterminate \u72b6\u6001\uff0c\u53ea\u8d1f\u8d23\u6837\u5f0f\u63a7\u5236\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            l.a.createElement(k, null),
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
                  l.a.createElement('td', null, 'checked'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'defaultChecked'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u662f\u5426\u9009\u4e2d',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'disabled'),
                  l.a.createElement('td', null, '\u5931\u6548\u72b6\u6001'),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'icon'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u672a\u9009\u4e2d\u72b6\u6001\u7684 icon',
                  ),
                  l.a.createElement('td', null, 'React.ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'checkedIcon'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9009\u4e2d\u72b6\u6001\u7684 icon',
                  ),
                  l.a.createElement('td', null, 'React.ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'color'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u4e2d\u65f6\u7684\u80cc\u666f\u8272',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'indeterminate'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e indeterminate \u72b6\u6001\uff0c\u53ea\u8d1f\u8d23\u6837\u5f0f\u63a7\u5236',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'inputRef'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5185\u90e8 input \u7684 ref',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'React.Ref<HTMLInputElement>',
                    ),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'inputProps'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5185\u90e8 input \u7684\u5c5e\u6027',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'React.InputHTMLAttributes<HTMLInputElement>',
                    ),
                  ),
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
                  l.a.createElement('td', null, 'className'),
                  l.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onChange'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u53d8\u5316\u65f6\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      '(event: React.ChangeEvent<HTMLInputElement>) => void',
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
