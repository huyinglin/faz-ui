(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    ZeLc: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('0Owb'),
        r = t('q1tI'),
        i = t.n(r),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        l = t.n(c),
        m = i.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            r = function() {
              return a['default'].createElement(n.Empty, null);
            };
          return a['default'].createElement(r);
        }),
        o = i.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            r = t('33Fu'),
            i = function() {
              return a['default'].createElement(n.Empty, {
                image: a['default'].createElement(r.AiOutlineDropbox, null),
              });
            };
          return a['default'].createElement(i);
        });
      a['default'] = function() {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h2',
              { id: 'empty-\u7a7a\u72b6\u6001' },
              i.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#empty-\u7a7a\u72b6\u6001' },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Empty \u7a7a\u72b6\u6001',
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
            l.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Empty } from 'faz-ui';\n\nexport default () => <Empty/>",
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
            i.a.createElement(m, null),
          ),
          i.a.createElement(
            'div',
            { className: 'markdown' },
            i.a.createElement(
              'h3',
              { id: '\u81ea\u5b9a\u4e49\u56fe\u7247' },
              i.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u81ea\u5b9a\u4e49\u56fe\u7247',
                },
                i.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u5b9a\u4e49\u56fe\u7247',
            ),
          ),
          i.a.createElement(
            l.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Empty } from 'faz-ui';\nimport { AiOutlineDropbox } from \"react-icons/ai\";\n\nexport default () => <Empty image={<AiOutlineDropbox/>}/>",
                },
              },
              {
                title: 'Image & Size',
                desc:
                  '<div class="markdown"><p>\u901a\u8fc7 image \u5c5e\u6027\u81ea\u5b9a\u4e49\u56fe\u7247\uff0c\u901a\u8fc7 size \u8bbe\u7f6e\u56fe\u7247\u5927\u5c0f\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            i.a.createElement(o, null),
          ),
        );
      };
    },
  },
]);
