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
}