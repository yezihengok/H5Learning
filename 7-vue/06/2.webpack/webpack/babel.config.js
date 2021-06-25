module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
}

/* 打包js文件中的高级语法： 在编写js的时候， 有时候我们会使用高版本的js语法
有可能这些高版本的语法不被兼容， 我们需要将之打包为兼容性的js代码
我们需要安装babel系列的包
A.安装babel转换器
npm install babel - loader @babel / core @babel / runtime - D
B.安装babel语法插件包
npm install @babel / preset - env @babel / plugin - transform - runtime @babel / plugin - proposal - class - properties - D
C.在项目根目录创建并配置babel.config.js文件 */
