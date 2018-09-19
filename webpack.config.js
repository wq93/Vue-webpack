const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
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
        test: /\.vue/,
        loader: 'vue-loader',
        options: { // 处理单文件组件文件
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024',

      },
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
    new VueLoaderPlugin(),
    // 重命名提取的css文件
    new ExtractTextPlugin('main.css')
  ]
}
module.exports = config