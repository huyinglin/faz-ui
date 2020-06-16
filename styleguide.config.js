module.exports = {
  title: 'Faz',
  components: 'src/components/**/index.{ts,tsx}',
  ignore: [
    'src/components/**/styled.{js,jsx,ts,tsx}',
    'src/components/**/interface.{ts,tsx}',
    'src/components/**/index.{ts,tsx}',
  ],
  styles: function(theme) {
    return {
      Logo: {
        logo: {
          // we can now change the color used in the logo item to use the theme's `link` color
          color: theme.color.light
        }
      }
    }
  }
}