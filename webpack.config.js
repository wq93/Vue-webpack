var path = require('path')
var config = {
  entry: {
    main: './main' //配置的单入口
  },
  output: {
    path: path.join(__dirname, './dist'), //打包的输出目录
    publicPath: '/dist/', // 资源文件引用的目录
    filename: 'main.js' // 输出文件名
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
module.exports = config