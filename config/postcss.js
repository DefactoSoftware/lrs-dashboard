module.exports = [
  require('postcss-autoreset')({
    reset: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: 'inherit',
      fontSize: '1rem',
      listStyleType: 'none',
    }
  }),
  require('postcss-cssnext'),
  require('postcss-color-function')
]
