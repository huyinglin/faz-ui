const { styles, theme } = require('./styleguide.styles')
const { version } = require('./package.json')

module.exports = {
  title: `Faz-UI @${version}`,
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  showUsage: true,
  ignore: [
    'src/components/**/styled.{js,jsx,ts,tsx}',
    'src/components/**/interface.{ts,tsx}',
    'src/components/**/index.{ts,tsx}',
    'src/components/**/__tests__/**',
    'src/components/**/component/**',
    'src/components/**/hook/**',
  ],
  styles,
  theme,
}