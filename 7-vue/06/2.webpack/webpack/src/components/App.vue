### Vue单文件组件

传统Vue组件的缺陷：
全局定义的组件不能重名，字符串模板缺乏语法高亮，不支持css(当html和js组件化时，css没有参与其中)
没有构建步骤限制，只能使用H5和ES5，不能使用预处理器（babel）
解决方案：
使用Vue单文件组件，每个单文件组件的后缀名都是.vue
每一个Vue单文件组件都由三部分组成
1).template组件组成的模板区域
2).script组成的业务逻辑区域
3).style样式区域

<template>
  <div>
    <h2>这是 App 根组件:{{uname}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {uname:'ok~~~'};
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  color: rgb(218, 62, 62);
}
</style>