var webpack = require("webpack");
var openBrowser = require("open-browser-webpack-plugin");
var HTMLPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/app.jsx",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.[chunkhash:8].js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader"
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: "url-loader?limit=2048" // 超过2048，进行压缩处理
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!postcss-loader!less-loader"
      })
    }]
  },
  plugins: [
    // 自动打开浏览器
    new openBrowser({
      // 配置默认打开的端口
      url: "http://localhost:8082"
    }),
    // 模板插件
    new HTMLPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    // 确认是开发环境还是生产环境
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash:8].js'
    }),

    //压缩文件，并去掉所有警告
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}