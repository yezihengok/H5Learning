<!-- 
组件存放文件夹 分类建议：
页面组件 - views文件夹 => 配合路由，页面展示
复用组件 - components文件夹 => 存放封装复用模块的组件
 -->

<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="top">
      <!-- router-view 配置路由出口(匹配的组件展示的位置)  -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}
</style>