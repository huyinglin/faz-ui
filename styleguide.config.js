const path = require('path');
const { styles, theme } = require('./styleguide.styles');
const { version } = require('./package.json');

const options = {
  savePropValueAsString: true,
  propFilter: (prop, component) => {
    if (prop.parent) {
      return !prop.parent.fileName.includes("node_modules");
    }

    return true;
  },
};

module.exports = {
  title: `Faz-UI @${version}`,
  // template: require('./styleguide.template.html'),
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  usageMode: 'expand',
  moduleAliases: {
    'faz-ui': path.resolve(__dirname, 'src/components')
  },
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/huyinglin/faz-ui',
    // Text to show on the ribbon (optional)
    text: 'GitHub',
  },
  styleguideComponents: {
    Logo: path.join(__dirname, 'logo')
  },
  getComponentPathLine: (componentPath) => {
    const componentName = componentPath.split('/')[2];
    return `import ${componentName} from 'faz-ui/${componentName}';`;
  },
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  ignore: [
    'src/components/**/styled.{js,jsx,ts,tsx}',
    'src/components/**/interface.{ts,tsx}',
    'src/components/**/index.{ts,tsx}',
    'src/components/**/__tests__/**',
    'src/components/**/component/**',
    'src/components/**/hook/**',
  ],
  styles,
  propsParser: require("react-docgen-typescript").withDefaultConfig(options).parse,
  theme,
  sections: [
    {
      name: '通用',
      components: () => ([
        path.resolve(__dirname, 'src/components/Button', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Icon', 'index.tsx'),
      ])
    },
    {
      name: '布局',
      components: () => ([
      ])
    },
    {
      name: '导航',
      components: () => ([
        path.resolve(__dirname, 'src/components/Menu', 'index.tsx'),
      ])
    },
    {
      name: '数据录入',
      components: () => ([
        path.resolve(__dirname, 'src/components/Input', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Checkbox', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Radio', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Switch', 'index.tsx'),
      ])
    },
    {
      name: '数据展示',
      components: () => ([
        path.resolve(__dirname, 'src/components/Carousel', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Tree', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Tabs', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Tag', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Tooltip', 'index.tsx'),
      ])
    },
    {
      name: '反馈',
      components: () => ([
        path.resolve(__dirname, 'src/components/Alert', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Modal', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Message', 'index.tsx'),
        path.resolve(__dirname, 'src/components/Notification', 'index.tsx'),
      ])
    },
  ],
}