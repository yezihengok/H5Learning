<template>
  <div class="search">

    <!-- 查询参数传参: $route.query.参数名  -->
    <p>搜索关键字: {{ $route.query.key }} </p>
    <h4>路由跳转传参之 -- 1、查询参数传参 </h4>
    <ul>
      <li>1、在跳转路由时, 进行传值 to="/path?参数名=值"</li>
      <li>2、对应页面组件接收传递过来的值 $route.query.参数名</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MySearch',
  created() {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取
    console.log(this.$route.query.key);
  }
}
</script>

<style>
.search {
  width: 450px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>