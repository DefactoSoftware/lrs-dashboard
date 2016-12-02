module.exports = [
  require('postcss-autoreset')({
    reset: 'sizes'
  }),
  require('postcss-cssnext'),
  require('postcss-color-function')
]
