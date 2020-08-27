(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    mpTb: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('0Owb'),
        l = a('q1tI'),
        r = a.n(l),
        c = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        u = a.n(c),
        d = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                placeholder: 'This is placeholder',
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        }),
        m = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                allowClear: !0,
                placeholder: 'This is placeholder',
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        }),
        i = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                addonBefore: 'http://',
                addonAfter: '.com',
                defaultValue: 'mysite',
                style: { width: 400 },
              });
            };
          return t['default'].createElement(l);
        }),
        E = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                prefix: '\uffe5',
                suffix: 'RMB',
                style: { width: 400 },
              });
            };
          return t['default'].createElement(l);
        }),
        o = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                disabled: !0,
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        });
      t['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'input-\u8f93\u5165\u6846' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#input-\u8f93\u5165\u6846' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input \u8f93\u5165\u6846',
            ),
            r.a.createElement('hr', null),
            r.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u4f7f\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u4f7f\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u4f7f\u7528',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => (\n  <Input placeholder=\"This is placeholder\" style={{ width: 200 }} />\n);",
                },
              },
              {
                title: 'Basic Input',
                desc:
                  '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(d, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5e26\u79fb\u9664\u56fe\u6807' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5e26\u79fb\u9664\u56fe\u6807',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5e26\u79fb\u9664\u56fe\u6807',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => (\n  <Input allowClear placeholder=\"This is placeholder\" style={{ width: 200 }} />\n);",
                },
              },
              {
                title: 'AllowClear',
                desc:
                  '<div class="markdown"><p>\u5e26\u79fb\u9664\u56fe\u6807\u7684\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u56fe\u6807\u5220\u9664\u6240\u6709\u5185\u5bb9\u3002</p></div>',
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
              { id: '\u524d\u7f6e\u540e\u7f6e\u6807\u7b7e' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u524d\u7f6e\u540e\u7f6e\u6807\u7b7e',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u524d\u7f6e/\u540e\u7f6e\u6807\u7b7e',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nexport default () => (\n  <Input\n    addonBefore="http://"\n    addonAfter=".com"\n    defaultValue="mysite"\n    style={{ width: 400 }}\n  />\n);',
                },
              },
              {
                title: 'AddonBefore & AddonAfter',
                desc:
                  '<div class="markdown"><p>\u7528\u4e8e\u914d\u7f6e\u4e00\u4e9b\u56fa\u5b9a\u7ec4\u5408\u3002</p></div>',
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
              { id: '\u524d\u7f00\u548c\u540e\u7f00' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u524d\u7f00\u548c\u540e\u7f00',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u524d\u7f00\u548c\u540e\u7f00',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nexport default () => <Input prefix="\uffe5" suffix="RMB" style={{ width: 400 }} />;',
                },
              },
              {
                title: 'Prefix & Suffix',
                desc:
                  '<div class="markdown"><p>\u5728\u8f93\u5165\u6846\u4e0a\u6dfb\u52a0\u524d\u7f00\u6216\u540e\u7f00\u56fe\u6807\u3002</p></div>',
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
              'h3',
              { id: '\u7981\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => <Input disabled style={{ width: 200 }} />;",
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>\u7981\u7528 Input\u3002</p></div>',
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
              'h3',
              { id: 'input' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#input' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input',
            ),
            r.a.createElement(
              'p',
              null,
              'Input \u7684\u5176\u4ed6\u5c5e\u6027\u548c React \u81ea\u5e26\u7684 input \u4e00\u81f4\u3002',
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
                  r.a.createElement('td', null, 'addonAfter'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6807\u7b7e\u7684 input\uff0c\u8bbe\u7f6e\u540e\u7f6e\u6807\u7b7e',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'addonBefore'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6807\u7b7e\u7684 input\uff0c\u8bbe\u7f6e\u524d\u7f6e\u6807\u7b7e',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'prefix'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6709\u524d\u7f00\u56fe\u6807\u7684 input',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'suffix'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6709\u540e\u7f00\u56fe\u6807\u7684 input',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'defaultValue'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u9ed8\u8ba4\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabled'),
                  r.a.createElement('td', null, '\u662f\u5426\u7981\u7528'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'inputRef'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5185\u90e8\u539f\u751f input \u7684 ref',
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
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u58f0\u660e input \u7c7b\u578b\uff0c\u540c\u539f\u751f input \u6807\u7b7e\u7684 type \u5c5e\u6027',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, 'text'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'allowClear'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u53ef\u4ee5\u70b9\u51fb\u6e05\u9664\u56fe\u6807\u5220\u9664\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5185\u5bb9',
                  ),
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
                    '\u8f93\u5165\u6846\u5185\u5bb9\u53d8\u5316\u65f6\u7684\u56de\u8c03',
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
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onPressEnter'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6309\u4e0b\u56de\u8f66\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.KeyboardEvent<HTMLInputElement>) => void',
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
