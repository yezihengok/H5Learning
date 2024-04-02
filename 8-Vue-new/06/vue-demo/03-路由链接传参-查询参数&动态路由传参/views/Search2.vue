<template>
  <div class="search">


    <p>搜索关键字: {{ $route.params.keyWords }} </p>
    <h4>路由跳转传参之 -- 2、动态路由传参 </h4>
    <ul>
      <li>1、在跳转路由时, to="/path/参数值"</li>
      <li>2、对应页面组件接: $route.params.参数名</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MySearch',

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