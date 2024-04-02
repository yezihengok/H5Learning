// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 适配的标准手机屏幕 375  （2倍设计图/2）
      viewportWidth: 375
    }
  }
}
