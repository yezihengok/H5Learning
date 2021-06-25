const path = require('path')
//导入默认预览功能包
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html', //设置生成预览页面的模板文件
  filename: 'index.html' //设置生成的预览页面名称
})

//vue组件的加载器
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vuePlugin = new VueLoaderPlugin();
module.exports = {
  // 编译模式
  mode: 'development', //可以设置为development(开发模式，不会进行压缩和混淆)，production(发布模式，会进行压缩和混淆，打包速度会慢一些)

  //设置webpack的打包入口/出口
  entry: path.join(__dirname, './src/index.js'), //设置入口文件路径
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  },
  plugins: [htmlPlugin, vuePlugin],

  /*   通过loader打包非js模块： 默认情况下， webpack只能打包js文件， 如果想要打包非js文件， 需要调用loader加载器才能打包
    loader加载器包含：
    1).less - loader
    2).sass - loader
    3).url - loader: 打包处理css中与url路径有关的文件
    4).babel - loader: 处理高级js语法的加载器
    5).postcss - loader
    6).css - loader, style - loader */

  module: {
    rules: [{
        //test设置需要匹配的文件类型，支持正则
        test: /\.css$/,
        //use表示该文件类型需要调用的loader
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        //    补充：安装sass-loader失败时，大部分情况是因为网络原因，详情参考：
        // https: //segmentfault.com/a/1190000010984731?utm_source=tag-newest
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      //在样式表css中有时候会设置背景图片和设置字体文件，一样需要loader进行处理
      {
        //limit用来设置字节数，只有小于limit值的图片，才会转换
        //为base64图片
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: 'url-loader?limit=16941'
      },
      {
        //配置babel
        test: /\.js$/,
        use: 'babel-loader',
        //exclude为排除项，意思是不要处理node_modules中的js文件
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}