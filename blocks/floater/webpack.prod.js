const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ]
  },
  output: {
    filename: 'floater.[hash].js',
    globalObject: 'this',
    library: 'floater',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'https://cea.vteximg.com.br/arquivos/',
    umdNamedDefine: true
  },
  plugins: [
    new StatsWriterPlugin()
  ]
})
