var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
  entry: {
    main: './main' //配置的单入口
  },
  output: {
    path: path.join(__dirname, './dist'), //打包的输出目录
    publicPath: '/dist/', // 资源文件引用的目录
    filename: 'main.js' // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    // 重命名提取的css文件
    new ExtractTextPlugin('main.css')
  ]
}
module.exports = config