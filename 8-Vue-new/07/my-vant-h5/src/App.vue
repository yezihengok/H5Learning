<template>
  <div id="app">
    <!-- 一级路由出口 -->
    <!-- include ： 组件名数组，只有匹配的组件会被缓存 -->
    <!-- exclude ： 组件名数组，任何匹配的组件都不会被缓存 -->
    <keep-alive include="['article-page']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {

  }
}
</script>
<!-- // 注意：px不会等比例缩放, 但是我们只需要写px, 当前webpack会自动将px换成vw -->
<style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
