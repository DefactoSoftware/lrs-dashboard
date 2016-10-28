module.exports = [
  require('autoprefixer')({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9', // React doesn't support IE8 anyway
    ]
  }),
  require('postcss-autoreset')({
    reset: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: 'inherit',
      fontSize: '1rem',
    }
  }),
  require('postcss-cssnext'),
  require('postcss-color-function')
]
